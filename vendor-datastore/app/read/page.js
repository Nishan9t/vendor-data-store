"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function Read() {
    const {status, data:session} = useSession();
    const router=useRouter();

    const fetchAllVendors=async()=>{
      try{
        const response=await fetch("http://localhost:3000/api/post/read",{
          method:"GET",
          headers:{
            "Content-type":"application/json",
        },
          
        });
       console.log(response)
      
      }
      catch(error)
      {
        console.log(error)
      }
     
    }
    useEffect(()=>{
      fetchAllVendors();
    },[])
   
  return (
    <div className="h-screen ">
      <div className="w-full mx-auto mt-16 text-center"><Link href="/create" ><button className='bg-green-500 text-white px-4 py-3'>Create Vendor</button></Link></div>
      <div className=" my-16 flex-wrap">

        <div className="p-4 border-2 w-full shadow-md mb-4 rounded-md">
          <h1 className="text-lg font-bold ">Name : </h1>
          <h1 className="text-lg font-bold ">Bank Account Number : </h1>
          <h1 className="text-lg font-bold ">Bank Name : </h1>
          <h1 className="text-lg font-bold ">AddressLine 1 : </h1>
          <h1 className="text-lg font-bold ">AddressLine 2 : </h1>
          <h1 className="text-lg font-bold ">City : </h1>
          <h1 className="text-lg font-bold ">Country : </h1>
          <h1 className="text-lg font-bold ">Zip Code : </h1>
          <p className="text-gray-500 text-sm ">Created By: </p>
        </div>
       
      </div>
    </div>
  )
}
