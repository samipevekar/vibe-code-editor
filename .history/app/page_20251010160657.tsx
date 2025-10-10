import { Button } from '@/components/ui/button'
import UserButton from '@/features/auth/components/user-button'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1 className='text-4xl text-red-500'>Home</h1>
      <UserButton/>
    </div>
  )
}
