import NextAuth from "next-auth";

import authConfig from "./auth.config";

const {auth} = NextAuth(authConfig)

export default auth((req)=>{
    const {nextUrl} = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith('/')
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}