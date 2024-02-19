

const express=require("express")
const rounter=express()
const control=require("../Control/bloodbankauthcontro")




rounter.post("/signup",control.blood_bank_signup)
rounter.post("/login",control.blood_bank_login)





module.exports=rounter

