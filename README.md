🏨 Hotel Booking App (Next.js)

A modern hotel booking web application built with Next.js (App Router), allowing users to browse hotels, create reservations, and manage bookings with authentication and protected routes.

📌 Features
🔐 Authentication system (protected routes)
🏨 Browse available hotels
📅 Create reservations
✏️ Edit existing reservations
🧾 View user-specific bookings
🔒 Authorization: users can only manage their own reservations
⚡ Server Actions for data mutations
🔄 Optimistic UI updates (improved UX)
♻️ Cache revalidation after updates
📱 Responsive UI (mobile-friendly)
🧠 Key Technical Highlights

This project demonstrates real-world Next.js concepts:

Next.js App Router (app/ directory)
Server Actions for CRUD operations
Route protection via middleware
Dynamic routes (/account/reservations/edit/[id])
Data fetching per user session
Optimistic UI updates with useOptimistic
Cache invalidation using Next.js revalidation APIs
Secure authorization checks on the server
🏗️ Project Structure
app/
  account/
    reservations/
      edit/[id]/   → Edit reservation page
      page.js      → User reservations list
  api/             → Server actions / handlers
  components/      → Reusable UI components
  lib/             → Utilities & helpers
middleware.js      → Route protection
✏️ Edit Reservation Flow
User clicks Edit Reservation

Route:

/account/reservations/edit/[id]

Fetch current booking using:

getBooking(id)
User updates form fields

Form submits via Server Action:

updateReservation(formData)
Backend validates:
User authentication
Ownership of reservation (security check)

Update is executed:

updateBooking(id, updateFields)
Cache is revalidated

User is redirected:

redirect("/account/reservations")
🔐 Security Considerations
Users can only edit their own reservations
Server-side authorization enforced before updates
No client-only trust for booking IDs
⚡ Performance Improvements
Server Components used where possible
Cache revalidation after mutations
Optimistic UI for faster interaction feel
🧪 Future Improvements
Payment integration (Stripe)
Admin dashboard for hotel owners
Advanced filtering (price, location, availability)
Email confirmations for bookings
Unit & integration testing
🛠️ Getting Started
git clone https://github.com/Ramahadam/Hotel-booking-nextjs-app.git
cd Hotel-booking-nextjs-app
npm install
npm run dev

Open: http://localhost:3000

📦 Tech Stack
Next.js (App Router)
React
Tailwind CSS
Server Actions
Middleware
JavaScript (or TypeScript if applicable)
