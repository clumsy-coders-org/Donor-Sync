

// import express from "express";
// import { user_login, user_signup } from "../Control/authContro.js";


const express=require("express");
const router=express();
const control=require("../Control/authContro.js")



router.post("/signup",  control.signup_data);
router.post("/login", control.login_data);


module.exports = router
