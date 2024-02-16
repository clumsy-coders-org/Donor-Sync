




const express=require("express");
const router=express();
const control=require("../control/authContro.js")



router.post("/signup",  control.signup_data);
router.post("/login", control.login_data);


module.exports = router
