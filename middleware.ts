import authConfig from "@/auth.config";
import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "@/routes";
import { getUrl } from "./lib/get-url";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return undefined;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(
        new URL(getUrl(DEFAULT_LOGIN_REDIRECT), nextUrl)
      );
    }
    return undefined;
  }
  console.log(!isLoggedIn && !isPublicRoute);
  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL(getUrl("/auth/login"), nextUrl));
  }

  return undefined;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
