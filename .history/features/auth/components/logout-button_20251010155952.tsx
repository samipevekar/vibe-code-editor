import React from 'react'
import { LogoutButtonProps } from '../types'


import { useRouter } from 'next/navigation'
import { signOut } from '@/auth'

const LogoutButton = ({children}:LogoutButtonProps) => {

    const router = useRouter()

    const onLogout = () => {
        await 
    }

    
  return (
    <span className='cursor-pointer' onClick={onLogout}>
      {children}
    </span>
  )
}

export default LogoutButton
