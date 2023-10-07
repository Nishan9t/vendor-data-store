"use client";

import React from 'react'
import {signIn,signOut, useSession } from 'next-auth/react';


export default function Navbar() {
  const {status}=useSession();
  return (
    <div className='p-4 flex justify-between items-center shadow-md'>
    <h1 className='font-bold text-lg text-blue-700'>Vendor store data</h1>
    {status==='authenticated'
    ?
    <button onClick={()=>signOut()} className='bg-slate-900 text-white px-6 py-2 rounded-md'>Sign Out</button>
    :
    <button onClick={()=>signIn("google")} className='bg-slate-900 text-white px-6 py-2 rounded-md'>Sign In</button>
    }
    
    </div>
  );
}
