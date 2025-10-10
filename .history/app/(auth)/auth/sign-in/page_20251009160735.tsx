import SignInFormClient from '@/features/auth/components/SignInFormClient'
import Image from 'next/image'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='space'>
      <Image src={'/logo.svg'} alt='Logo Image' height={300} width={300} />
      <SignInFormClient/>
    </div>
  )
}

export default SignInPage
