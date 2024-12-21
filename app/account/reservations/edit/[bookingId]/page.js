import UpdateReservationForm from '@/app/_components/UpdateReservationForm';
import { updateReservation } from '@/app/_lib/actions';
import { getBooking, getCabin } from '@/app/_lib/data-service';

export default async function Page({ params }) {
  const { bookingId } = await params;

  const booking = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(booking.cabinId);
  return (
    <div>
      <h2 className="mb-7 text-2xl font-semibold text-accent-400">
        Edit Reservation #{bookingId}
      </h2>

      <UpdateReservationForm
        booking={booking}
        maxCapacity={maxCapacity}
        updateReservation={updateReservation}
      />
    </div>
  );
}
