
import { connectMongoDB } from "@/lib/mongodb";
import vendorModel from "@/models/vendor";

import { NextResponse } from "next/server";

export async function GET(){
  
   
    await connectMongoDB();
    const vendors=await vendorModel.find();
    // console.log(data)
     return NextResponse.json({vendors});
}