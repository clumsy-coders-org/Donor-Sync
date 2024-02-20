









const express=require("express");
const router=express();
const control=require("../Control/authContro")



router.post("/signup",  control.signup_data);
router.post("/login",control.login_user);


module.exports = router

