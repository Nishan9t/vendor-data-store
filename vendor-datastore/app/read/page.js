'use client'

import AllVendors from '@/components/AllVendors'
import { useSession } from 'next-auth/react'
import Image from 'next/image'


export default function Read() {

  const { data: session, status } = useSession()

  if (status === "loading") {
    return <Image className='text-center mx-auto m-8' src='/spinner.gif.gif'
    height={60}
    width={60}
    alt="loading.."
/>
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }


  return (
   <div className="h-screen ">
    <AllVendors/>
   </div>
  )
}
