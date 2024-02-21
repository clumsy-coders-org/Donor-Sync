

const express=require("express")
const rounter=express()
const control=require("../Control/bloodbankauthcontro")




rounter.post("/signup",control.blood_bank_auth)





module.exports=rounter

