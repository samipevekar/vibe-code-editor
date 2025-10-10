import React from 'react'
import { LogoutButtonProps } from '../types'


import { useRouter } from 'next/navigation'
import { signOut } from '@/auth'

const LogoutButton = ({children}:LogoutButtonProps) => {
  return (
    <span onClick={onLo}>
      {children}
    </span>
  )
}

export default LogoutButton
