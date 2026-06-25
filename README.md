# 🏨 Hotel Booking App (Next.js)

A modern hotel booking web application built with **Next.js (App Router)**, allowing users to browse hotels, create reservations, and manage bookings with authentication and protected routes.

---

## 📌 Features

- 🔐 Authentication system (protected routes)
- 🏨 Browse available hotels
- 📅 Create reservations
- ✏️ Edit existing reservations
- 🧾 View user-specific bookings
- 🔒 Authorization: users can only manage their own reservations
- ⚡ Server Actions for data mutations
- 🔄 Optimistic UI updates (improved UX)
- ♻️ Cache revalidation after updates
- 📱 Responsive UI (mobile-friendly)

---

## 🧠 Key Technical Highlights

This project demonstrates real-world Next.js concepts:

- Next.js App Router (`app/` directory)
- Server Actions for CRUD operations
- Route protection via middleware
- Dynamic routes (`/account/reservations/edit/[id]`)
- Data fetching per user session
- Optimistic UI updates with `useOptimistic`
- Cache invalidation using Next.js revalidation APIs
- Secure authorization checks on the server

---

## 🏗️ Project Structure
