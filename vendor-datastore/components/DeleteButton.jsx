"use client"
import { useRouter } from 'next/navigation';
import {RiDeleteBin6Line} from 'react-icons/ri'

export default function DeleteButton({id}){

    const router =useRouter();

    const removeVendor=async()=>{
        const confirmed = confirm('Are you sure?');

        if(confirmed)
        {
           const res= await fetch(`https://vendor-data-store.vercel.app/api/post/delete?id=${id}` , {
                method:"DELETE",
            });

            if(res.ok)
            {
                router.refresh();
            }

        }
    };

    return(
        <button onClick={removeVendor}  className="text-red-700 text-xl"><RiDeleteBin6Line/></button>
    )
}