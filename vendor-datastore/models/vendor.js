import mongoose, { Schema, models } from "mongoose";

const vendorSchema= new Schema({
    creatorEmail:{
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
    bankAccountno:{
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
    zipcode:{
        type:Number,
        required:true
    },
  

},
{timestamps:true}
);

const vendorModel = models.Vendor || mongoose.model("Vendor",vendorSchema);

export default vendorModel;