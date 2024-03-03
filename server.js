/**
 * this will be the starting file of project
 */

const express=require('express');

const mongoose=require('mongoose');

const app=express();

const server_config=require("./configs/server.configs");
const db_configs=require('./configs/db.config');

const user_model=require('./models/user.models');

const bcrypt=require("bcryptjs");
app.use(express.json());


/**
 * create an admin user at the starting of the application
 * if not already present
 */

//conenection with mongo databae;

mongoose.connect(db_configs.db_url);
const db=mongoose.connection;

db.on("error",()=>{
    console.log("error while connecting");
})

db.once("open",()=>{
    console.log("connected to mongodb");

    init();
});

 async function init(){

    try{
        let user= await user_model.findOne({userId:"admin"})

    if(user){
        console.log("admin is already present");
        return;
    }

    try{
        user=await user_model.create({
            name:"shakir",
            userId:"admin",
            password:bcrypt.hashSync("S1234h$%",8),
            email:"shakir2203@gmail.com",
            userType:"ADMIN"

        })

        console.log("admin has created ",user);
    

    }catch(err){
        console.log("error while creating",err);
    }
    }catch(err){
        console.log("error while reading the data",err);
    }
    



    }

/**
 * stich the routes to the server
 */
require('./routes/auth.routes')(app);


/**
 * start the server
 */

app.listen(server_config.PORT,()=>{
    console.log("server has started at port number: ",server_config.PORT);
})