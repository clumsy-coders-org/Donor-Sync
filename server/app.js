
const express=require("express");
const app=express();
 require('dotenv').config();
const DB=require("./Database/connect")
const searchRout=require("./Routers/searchRout")

const PORT=process.env.PORT || 3001




app.use(express.json());
app.use(express.urlencoded({extended:true}));




DB.DBConnect();  // Database connecting func



app.use("/search",searchRout)






app.listen(PORT,()=>{

      console.log( `server started ${PORT}`)
})















