"use client";

import Image from 'next/image'
import React from 'react'
import { signIn } from 'next-auth/react';

export default function SinginBtn() {
  return (
    <div>
    <button onClick={()=> signIn('google')} className='flex items-center gap-4 shadow-xl rounded-lg pl-3'>
    <Image src='/google-image.png'
        height={30}
        width={30}
        alt="G"
    />
    <h1 className='bg-blue-500 text-white px-4 py-3'>Sign in with Google</h1>
    
    </button>
    </div>
  )
}
