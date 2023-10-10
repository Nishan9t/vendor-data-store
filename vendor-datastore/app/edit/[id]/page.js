import EditData from "@/components/EditData";

const getVendorById=async(id)=>{
  'use client'
  try{
    const res = await fetch(`https://vendor-data-store.vercel.app/api/post/${id}`,
    {
      cache:'no-store',
    });

    if(!res.ok)
    {
      throw new Error('failed to fetch vendor')
    }
  
    return res.json();


  }
  catch(error)
  {
    console.log(error);
  }
}


export default async function Edit({params}) {

  const {id}=params;
  // console.log(id);

  const {vendor}=await getVendorById(id)
  // const {vendorName,bankAccountno,bankName,addressLine1,addressLine2,city,country,zipcode,creatorEmail,creatorName}= vendor;
  // console.log(vendorName);
  // console.log(vendor);
  return (
   <EditData id={id} vendor={vendor} />
  )
}
