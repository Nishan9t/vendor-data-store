"use client"

import InputData from "@/components/InputData"
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";



export default function Create() {
  const {status, data:session} = useSession();
  const router=useRouter();


    if(status !=='authenticated')
    {
      router.push('/')
      return null;
    }
 

  return (
    <div className="h-screen">
      <InputData/>
    </div>
  )
}