'use server';

import { jsx } from 'react/jsx-runtime';
import { auth, signIn, signOut } from './auth';
import { supabase } from './supabase';
import { revalidatePath } from 'next/cache';
import { getBookings } from './data-service';
import { redirect } from 'next/navigation';

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error('You must be logged in');

  const nationalID = formData.get('nationalID');
  const [nationality, countryFlag] = formData.get('nationality').split('%');

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error('Please provide valid national ID');

  const updateData = {
    nationality,
    countryFlag,
    nationalID,
  };

  const { data, error } = await supabase
    .from('guests')
    .update(updateData)
    .eq('id', session.user.guestId);

  if (error) throw new Error('Guest could not be updated');

  revalidatePath('/account/profile');
}

export async function updateReservation(formData) {
  const session = await auth();
  if (!session) throw new Error('You must be logged in');

  const bookingId = Number(formData.get('bookingId'));

  const updatedData = {
    numGuests: Number(formData.get('numGuests')),
    observations: formData.get('observations').slice(0, 500),
  };

  const { error } = await supabase
    .from('bookings')
    .update(updatedData)
    .eq('id', bookingId);

  if (error) {
    console.error(error);
    throw new Error('Guest could not be updated');
  }

  revalidatePath('/account/reservations');

  redirect('/account/reservations');
}

export async function createBooking(bookingData, formData) {
  // 01. Authentication
  const session = await auth();
  if (!session) throw new Error('You must be logged in');

  const newBooking = {
    ...bookingData,
    numGuests: Number(formData.get('numGuests')),
    observations: formData.get('observations').slice(0, 500),
    guestId: session.user.guestId,
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    hasBreakfast: false,
    status: 'unconfirmed',
  };

  console.log(newBooking);

  const { error } = await supabase.from('bookings').insert([newBooking]);

  if (error) {
    console.error(error);
    throw new Error('Booking could not be created');
  }

  revalidatePath(`/cabins/${bookingData.cabinId}`);

  redirect('/cabins/thankyou');
}

export async function deleteReservation(bookingId) {
  // 01. Authentication
  const session = await auth();
  if (!session) throw new Error('You must be logged in');

  //02. Authorization
  const guestBookings = await getBookings(session.user.guestId);
  const bookingsIds = guestBookings.map((booking) => booking.id);

  //03. Error Handling
  if (!bookingsIds.includes(bookingId))
    throw new Error('You are not allowed to delete this booking');

  //04. Delete Booking (Mutation)
  const { data, error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', bookingId);

  if (error) throw new Error('Reservation could not be deleted');
  revalidatePath('/account/reservations');
}

export async function signInAction() {
  await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' });
}
