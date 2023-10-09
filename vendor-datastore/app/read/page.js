"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function page() {
    const {status, data:session} = useSession();
    const router=useRouter();

    if(status !=='authenticated')
    {
      router.push('/')
      return null;
    }
  return (
    <div>read all vendors data</div>
  )
}
