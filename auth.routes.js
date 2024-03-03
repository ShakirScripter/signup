/**
 *POST localhost:8888/eComm/api/v1/auth/signup

 i need to intercept this
 */
const authController=require('../controllers/auth.controller');
const authMW=require('../middleware/auth.mw');


 module.exports=(app)=>{
    app.post("/eComm/api/v1/auth/signup",[authMW.verifySignupbody],authController.signup);
 }