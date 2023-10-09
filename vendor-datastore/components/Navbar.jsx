"use client";

import React from 'react'
import {signIn,signOut, useSession } from 'next-auth/react';
import Link from 'next/link';


export default function Navbar() {
  const {status}=useSession();
  return (
    <div className='p-4 flex justify-between items-center shadow-md'>
    <button className='font-bold text-lg text-blue-700'><Link href='/'>Vendor store data</Link></button>
    {status==='authenticated'
    ?
    <button onClick={()=>signOut()} className='bg-slate-900 text-white px-6 py-2 rounded-md'>Sign Out</button>
    :
    <button onClick={()=>signIn("google")} className='bg-slate-900 text-white px-6 py-2 rounded-md'>Sign In</button>
    }
    
    </div>
  );
}
