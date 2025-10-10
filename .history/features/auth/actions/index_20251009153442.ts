"use server"
import { auth } from "@/auth"
import { db } from "@/lib/db"

export const getUserById = async (id:string) => {
    try {
        const user = await db.user.findUnique({
            where: {id},
            include: {accounts:true}
        })
        
        return user
    } catch (error) {
        console.error(error)
        return null
    }
}

