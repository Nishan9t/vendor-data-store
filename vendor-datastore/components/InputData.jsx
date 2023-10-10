'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function InputData() {

  const {data:session}=useSession();

  const router = useRouter();
  const [formData, setFormData] = useState({
    creatorEmail:session?.user?.email,
    creatorName:session?.user?.name,
    vendorName: '',
    bankAccountno: '',
    bankName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    country: '',
    zipcode: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here

  
    
    console.log(JSON.stringify(formData));

    try{
      const res=await fetch("https://vendor-data-store.vercel.app/api/post/create",{
      method:"POST",
      headers:{
          "Content-type":"application/json",
      },
      body: JSON.stringify(formData)
    });

      if(res.ok){
          // return user;
          router.refresh();
          router.push("/read")

      }
    }
    catch(error)
    {
      console.log(error)
    }
    
    
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Vendor Information</h2>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Vendor Name</label>
          <input
            type="text"
            name="vendorName"
            value={formData.vendorName}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />


          <label className="block text-sm font-medium text-gray-600">Bank Account Number</label>
          <input
            type="number"
            name="bankAccountno"
            value={formData.bankAccountno}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />


           <label className="block text-sm font-medium text-gray-600">Bank Name</label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />


          <label className="block text-sm font-medium text-gray-600">Address Line1</label>
          <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />


          <label className="block text-sm font-medium text-gray-600">Address Line2</label>
          <input
            type="text"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            
          />


          <label className="block text-sm font-medium text-gray-600">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />


          <label className="block text-sm font-medium text-gray-600">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />



          <label className="block text-sm font-medium text-gray-600">Zip Code</label>
          <input
            type="number"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        
          
        </div>
        {/* Add similar input fields for other form fields */}
        {/* ... */}
        <div className="mt-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
