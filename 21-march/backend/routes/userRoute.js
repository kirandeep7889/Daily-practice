const express=require("express");
const userSignup = require("../handlers/UserSignup");
const UserLogin = require("../handlers/UserLogin");
const userRouter=express.Router();

userRouter.post("/Signup",userSignup);
userRouter.post("/Login",UserLogin)


module.exports=userRouter;