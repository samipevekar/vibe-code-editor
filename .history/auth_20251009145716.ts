import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const { auth, handler, signIn, signOut } = NextAuth({
    callbacks:{

    },
    secret: process.env.AUTH_SECRET
});
