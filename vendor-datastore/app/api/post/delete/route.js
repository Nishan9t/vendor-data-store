import { connectMongoDB } from "@/lib/mongodb";
import vendorModel from "@/models/vendor";
import { NextResponse } from "next/server";

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await vendorModel.findByIdAndDelete(id);
    return NextResponse.json({message:"vendor deleted"},{status:200});
}