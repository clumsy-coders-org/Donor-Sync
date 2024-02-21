


const express=require("express");
const router=express();
const control=require("../Control/searchContro")




router.post("/blood",control.find_blood)







module.exports=router



