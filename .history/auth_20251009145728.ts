import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./lib/db";

export const { auth, handler, signIn, signOut } = NextAuth({
    callbacks:{

    },
    secret: process.env.AUTH_SECRET,
    adapter: PrismaAdapter(db)
});
