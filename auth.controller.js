/**
 * i need to write the controller or logic to register the user
 */

const becrypt=require('bcryptjs');
const user_model=require('../models/user.models')
 exports.signup=async (req,res)=>{
    /**
     * logic to create the user
     */

    
    //1.read the request body

    const request_body= req.body;//return js object 
    //2.insert the data in user collection in the mongoDB

    const userObject={
        name:request_body.name,
        userId:request_body.userId,
        email:request_body.email,
        userType:request_body.userType,
        password:becrypt.hashSync(request_body.password,8)
    }

    try{
    const user_ceated= await user_model.create(userObject);
    /**
     * return this user;
     */

    const res_obj={
        name:user_ceated.name,
        userId:user_ceated.userId,
        email:user_ceated.email,
        userType:user_ceated.userType,
        createdAt:user_ceated.createdAt,
        updatedAt:user_ceated.updatedAt
    }
    res.status(201).send(res_obj);
    }catch(err){
        console.log("error while registering",err);
        res.status(500).send({
           messsage:"Some error happened while registering the user"
        })
    }
    //3.return the response back to the user


}