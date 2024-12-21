// import { NextResponse } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
// 	return NextResponse.redirect(new URL("/about", request.url));
// }

// // See "Matching Paths" below to learn more

import { auth } from "@/app/_lib/auth";

export const middleware = auth;

export const config = {
	matcher: ["/cabins", "/account"],
};
