/**
 * check if mw will check if the request body is proper check or not
 */

const user_model=require('../models/user.models')

const verifySignup=async (req,res,next)=>{
    try{

        //chack name
        if(!req.body.name){
            return res.status(400).send({
                message:"Failed! name was not provided",
            })
        }
        //check email
        if(!req.body.email){
            return res.status(400).send({
                message:"Failed! email was not provided",
            })
        }

        //check userid
        if(!req.body.userId){
            return res.status(400).send({
                message:"Failed! userId was not provided",
            })
        }

        //check if the user with the same id is alrready present
        const user= await user_model.findOne({userId:req.body.userId})

        if(user){
            return res.status(400).send({
                message:"failed user with the same id already present",
            })
        }
        next();
    }catch(err){
        console.log("error ehile validating the request object",err);
        res.status(500).send({
            massage:"errror while validating",
        })
    }
}


module.exports={
    verifySignupbody:verifySignup,
}