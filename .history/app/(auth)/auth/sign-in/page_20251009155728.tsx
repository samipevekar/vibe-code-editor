import Image from 'next/image'
import React from 'react'

const SignInPage = () => {
  return (
    <>
      <Image src={'/logo.svg'} alt='Logo Image' height={300} width={300} />
      <Sign/>
    </>
  )
}

export default SignInPage
