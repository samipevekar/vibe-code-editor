import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

import type { NextAuthConfig } from 'next-auth'

export default {
    providers:[
        Github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ]
}