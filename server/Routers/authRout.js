









const express=require("express");
const router=express();
const control=require("../Control/authContro")
const authmid=require("../Middleware/userauthmid")



router.get("/connecting",control.connecting)
router.post("/signup",  control.signup_data);
router.post("/login",control.login_user);
router.get("/account",authmid.user_auth_verify,control.user_account_data );
router.post("/editaccount",authmid.user_auth_verify,control.edit_account)







module.exports = router

