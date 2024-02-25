

const express=require("express")
const rounter=express()
const control=require("../Control/bloodbankContro")
const bbmidil=require("../Middleware/bloodbankauthmid")




rounter.post("/signup",control.blood_bank_signup)
rounter.post("/login",control.blood_bank_login)
rounter.get("/account",bbmidil.blood_bank_auth_verifi,control.blood_bank_account)
rounter.get("/dashboard",bbmidil.blood_bank_auth_verifi,control.blood_bank_dashboard_data)
rounter.post("/dashboard/edit",bbmidil.blood_bank_auth_verifi, control.bllod_bank_dashboard_data_edit)





module.exports=rounter

