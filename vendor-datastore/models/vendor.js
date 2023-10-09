import mongoose, { Schema, models } from "mongoose";

const vendorSchema= new Schema({
    email:{
        type:String,
        required:true
    },
    creatorName:{
        type:String,
        required:true
    },
   vendorName:{
        type:String,
        required:true
    },
    bankAccountNo:{
        type:Number,
        required:true
    },
    bankName:{
        type:String,
        required:true
    },
    addressLine1:{
        type:String,
        required:true
    },
    addressLine2:{
        type:String,
        
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    zipCode:{
        type:Number,
        required:true
    },
  

},
{timestamps:true}
);

const Vendor = models.Vendor || mongoose.model("Vendor",vendorSchema);

export default Vendor;