import React from 'react'
import { LogoutButtonProps } from '../types'


import { useRouter } from 'next/navigation'
import { signOut } from '@/auth'

const LogoutButton = ({children}:LogoutButto
    nProps) => {
        

    
  return (
    <span className='cursor-pointer' onClick={onLogout}>
      {children}
    </span>
  )
}

export default LogoutButton
