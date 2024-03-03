
const mongoose=require('mongoose');

/**
 * user name
 * user password
 * user email
 * user id
 * user type
 */

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    userId:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        minLength:10,
        unique:true
    },
    userType:{
        type:String,
        default:"CUSTOMER",
        enum:["CUSTOMER","ADMIN"]
    }
},{timestamps:true,versionKey:false});

//for make user model


module.exports=mongoose.model("User",userSchema);//create a collection named user