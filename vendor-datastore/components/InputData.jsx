'use client'

import { useState } from "react";

export default function InputData() {
  const [formData, setFormData] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Vendor Information</h2>
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
            type="text"
            name="bankaccountno"
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
            type="text"
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
