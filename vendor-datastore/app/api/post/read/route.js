
import { connectMongoDB } from "@/lib/mongodb";
import vendorModel from "@/models/vendor";

import { NextResponse } from "next/server";

export async function GET(request){
    // const {vendorName,bankAccountno,bankName,addressLine1,addressLine2,city,country,zipcode,creatorEmail,creatorName}= await request.json();
    // console.log(creatorName)
    // console.log(creatorEmail)
    // console.log(vendorName)
    // console.log(bankName)
   
    await connectMongoDB();
    const data=await vendorModel.find({});
    console.log(data)
     return NextResponse.json({message:"Vendors data"},{status:201} ,{data:data});
}