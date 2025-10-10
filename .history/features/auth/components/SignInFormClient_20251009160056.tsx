import React from 'react'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardFooter,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { Chrome, Github } from 'lucide-react'

const SignInFormClient = () => {
  return (
    <Card className='w-full max-w-md '>
        <CardHeader className='space-y-1' >
            <CardTitle className='text-2xl font-bold text-center'>Sign In</CardTitle>
            <CardDescription className='text-center'>
                Choose your preferred 
            </CardDescription>
        </CardHeader>
    </Card>
  )
}

export default SignInFormClient
