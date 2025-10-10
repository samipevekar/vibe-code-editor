import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./lib/db";
import authConfig from "./auth.config";

export const { auth, handler, signIn, signOut } = NextAuth({
  callbacks: {
    async signIn({user, account, profile}){
        if(!user || !account) return false;

        const existingUser = await db.user.findUnique({
            where:{email: user.email}
        })

        if(!existingUser){
            const newUser = await db.user.create({
                data:{}
            })
        }
    }
  },
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
