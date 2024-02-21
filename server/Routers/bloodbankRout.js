

const express=require("express")
const rounter=express()
const control=require("../Control/bloodbankContro")




rounter.post("/signup",control.blood_bank_signup)
rounter.post("/login",control.blood_bank_login)
rounter.get("/dashboard",control.blood_bank_dashboard_data)
rounter.post("/dashboard/edit",control.bllod_bank_dashboard_data_edit)





module.exports=rounter

