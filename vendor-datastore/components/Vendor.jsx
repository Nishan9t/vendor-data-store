'use client'



import { useState } from 'react';
import SinginBtn from './SinginBtn'
import { useSession } from 'next-auth/react'
import InputData from './InputData';
import Link from 'next/link';



export default function Vendor() {

 
    const {status, data:session} = useSession();

    if(status==='authenticated')
    {
        return (
            <div className='w-full'>
                <div className='flex p-4 w-full border-2 py-4 items-center justify-center'>
                    <div className='text-center  my-auto border-2 rounded-full bg-green-700 text-xl font-bold px-3 py-1'>{session?.user?.name.charAt(0)}</div>
                    <div className='ml-4'>
                        <div className=' font-bold text-green-700'>{session?.user?.name}</div>
                        <div className=' font-bold  text-green-700'>{session?.user?.email}</div>
                    </div>
                
                </div>
                <div className='mx-auto text-center mt-16'>
               
                    <Link href="/create" className='bg-green-500 text-white px-4 py-3'>Create Vendor</Link>
                   
                    
                </div>
        </div>
        );
    }
    else
    {
        return (
            <div className='h-screen grid place-items-center -mt-24'>
                <SinginBtn/>
            </div>
          )
    }
  
}
