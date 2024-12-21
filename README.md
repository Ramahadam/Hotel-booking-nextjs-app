This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

Update Reservation.

# In the reservation card we have the rout /account/reservations/edit/${id}

# Implement a rout for this edit and in this page get current booking getBooking(id)

# Since you are updating the current booking create a server action for that updteReservation(); TODO make sure you are setting the user authentication & BUG authorization that the user can only edit their own reservation only.

# Add the server action to the form in the edit form make sure all the feild get passed with correct name.

# You will to some point where you have to add booking ID in the reservation-edit-page how to do that? TODO one option is to set hidden field with value of booking Id then the value will be sent along to the server action

# Once the booking is updated by updateBooking(id, updateFields) you have to redirect the user to the reservation page. you can use the redirect funtion. import from Next/Navigation.

# You have to think also what cache needs to be revalidated TODO keep in mind the revalidation should happen before the page is redirected.

#

# BUG"Dont't forget to implement the useOptimistic for adding new reservation"

#

#

#

#

#

#

#
