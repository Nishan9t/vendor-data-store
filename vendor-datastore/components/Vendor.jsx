'use client'



import SinginBtn from './SinginBtn'
import { useSession } from 'next-auth/react'


export default function Vendor() {

    const {status, data:session} = useSession();

    if(status==='authenticated')
    {
        return <div className='flex p-4 w-full border-2 py-4 items-center justify-center'>
            <div className='text-center  my-auto border-2 rounded-full bg-green-700 text-xl font-bold px-3 py-1'>{session?.user?.name.charAt(0)}</div>
            <div className='ml-4'>
                <div className=' font-bold text-green-700'>{session?.user?.name}</div>
                <div className=' font-bold  text-green-700'>{session?.user?.email}</div>
            </div>
        </div>
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
