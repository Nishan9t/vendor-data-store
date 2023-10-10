
import Link from "next/link";
import {FaRegEdit} from 'react-icons/fa'
import {RiDeleteBin6Line} from 'react-icons/ri'


const fetchAllVendors=async()=>{
    try{
      const response=await fetch("http://localhost:3000/api/post/read",{
        cache:"no-store",
      });
  
      if(!response.ok)
      {
        throw new Error("Failed to fetch vendors")
      }
  
      return response.json();
  
     
    
    }
    catch(error)
    {
      console.log(error)
    }
 }


export default async function AllVendors(){

    const {vendors} = await fetchAllVendors()

    return(
        <div className="">
        <div className="w-full mx-auto mt-16 text-center">
          <Link href="/create" ><button className='bg-green-500 text-white px-4 py-3'>Create Vendor</button>
          </Link>
        </div>

        <div className=" my-16 flex-wrap">
        {
            vendors.map(vendor =>{
                return(
                  
                      <div className="p-4 border-2 w-full shadow-md mb-4 rounded-md flex justify-between">
                        <div>
                        <h1 className="text-lg font-bold ">Name : {vendor.vendorName}  </h1>
                        <h1 className="text-lg font-bold ">Bank Account Number : {vendor.bankAccountno} </h1>
                        <h1 className="text-lg font-bold ">Bank Name : {vendor.bankName}</h1>
                        <h1 className="text-lg font-bold ">AddressLine 1 : {vendor.addressLine1}</h1>
                        <h1 className="text-lg font-bold ">AddressLine 2 : {vendor.addressLine2}</h1>
                        <h1 className="text-lg font-bold ">City : {vendor.city} </h1>
                        <h1 className="text-lg font-bold ">Country :{vendor.country} </h1>
                        <h1 className="text-lg font-bold ">Zip Code : {vendor.zipcode}</h1>
                        <p className="text-gray-500 text-sm ">Created By: {vendor.creatorName} </p>
                        </div>

                        <div className="flex flex-col">
                        <Link href={`/edit/${vendor._id}`}><button className=" text-blue-700 text-xl"><FaRegEdit/></button></Link>
                        <Link href={'/'}><button className="text-red-700 text-xl"><RiDeleteBin6Line/></button></Link>
                        </div>
                      
                      </div>

                     

                )
            })
        }
          
       
        </div>

      </div>
     
    )
}