


const express=require("express");
const router=express();
const control=require("../Control/searchContro")




router.get("/blood/:bloodgroup/:type/:district",control.find_blood)







module.exports=router



