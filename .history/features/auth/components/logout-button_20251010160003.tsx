import React from 'react'
import { LogoutButtonProps } from '../types'


import { useRouter } from 'next/navigation'
import { signOut } from '@/auth'

const LogoutButton = ({children}:LogoutButtonProps) => {

    const router = useRouter()

    const onLogout = async() => {
        await signOut()
        r0
    }

    
  return (
    <span className='cursor-pointer' onClick={onLogout}>
      {children}
    </span>
  )
}

export default LogoutButton
