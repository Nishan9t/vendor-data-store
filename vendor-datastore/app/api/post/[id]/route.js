import { connectMongoDB } from "@/lib/mongodb";
import vendorModel from "@/models/vendor";
import { NextResponse } from "next/server";

// to update
export async function PUT(request,{params}){
    const {id}=params;
    const {vendorName,bankAccountno,bankName,addressLine1,addressLine2,city,country,zipcode,creatorEmail,creatorName}= await request.json();
    await connectMongoDB();
    await vendorModel.findByIdAndUpdate(id,{creatorEmail,creatorName,vendorName,bankAccountno,bankName,addressLine1,addressLine2,city,country,zipcode});
    return NextResponse.json({message:"Vendor Updated"},{status:200});
}

//to fetch by id
export async function GET(request,{params}){
    const {id} = params;
    await connectMongoDB();
    const vendor = await vendorModel.findOne({_id:id});
    return NextResponse.json({vendor},{status:200});
}
