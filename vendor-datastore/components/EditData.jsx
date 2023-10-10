"use client"
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function EditData({id,vendor}) {

  const router = useRouter()
  const {session}=useSession();

    const [formData, setFormData] = useState({
        creatorEmail:session?.user?.email,
        creatorName:session?.user?.name,
        vendorName: vendor.vendorName,
        bankAccountno: vendor.bankAccountno ,
        bankName: vendor.bankName,
        addressLine1: vendor.addressLine1,
        addressLine2: vendor.addressLine2,
        city: vendor.city,
        country: vendor.country,
        zipcode: vendor.zipcode
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleUpdate = async(e) => {
        e.preventDefault();
        try{
          const res=await fetch(`http://localhost:3000/api/post/${id}`,{
          method:"PUT",
          headers:{
              "Content-type":"application/json",
          },
          body: JSON.stringify(formData)
        });
    
          if(!res.ok)
          {
            throw new Error('failed to update vendor')
          }
          router.refresh();
          router.push("/read")
  
        }
        catch(error)
        {
          console.log(error)
        }
        
      }

  return (
     <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Vendor Information Edit</h2>
      <form className="max-w-md mx-auto" onSubmit={handleUpdate}>
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
            Update
          </button>
        </div>
      </form>
    </div>
  )
}
