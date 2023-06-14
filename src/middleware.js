import { NextResponse } from "next/server";
import middlewareAuth from "./utils/middlewareAut";

export async function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;


  if (pathname.startsWith("/user/dashboard")) {
    const user = await middlewareAuth(req);

    if (!user) return NextResponse.redirect(new URL("/user/auth", url));
  }

  if (pathname.startsWith("/user/auth")) {
    const user = await middlewareAuth(req);
    if (user) return NextResponse.redirect(new URL("/", url));

  }
}

export const config = {
  matcher: ["/user/:path*"],
};
