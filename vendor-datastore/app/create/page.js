"use client"

import InputData from "@/components/InputData"
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation"



export default function Create() {


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
    <div className="h-screen">
      <InputData/>
    </div>
  )
}
