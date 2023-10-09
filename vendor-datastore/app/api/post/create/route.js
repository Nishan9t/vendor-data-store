
import { connectMongoDB } from "@/lib/mongodb";
import vendorModel from "@/models/vendor";

import { NextResponse } from "next/server";

export async function POST(request){
    const {vendorName,bankAccountno,bankName,addressLine1,addressLine2,city,country,zipcode,creatorEmail,creatorName}= await request.json();
    // console.log(creatorName)
    // console.log(creatorEmail)
    // console.log(vendorName)
    // console.log(bankName)
   
    await connectMongoDB();
    await vendorModel.create({creatorEmail,creatorName,vendorName,bankAccountno,bankName,addressLine1,addressLine2,city,country,zipcode});
     return NextResponse.json({message:"Vendor Created"},{status:201});
}