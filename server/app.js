
const express=require("express");
const app=express();
require('dotenv').config();
const DB=require("./Database/connect")
// import authRoute from "./Routers/authRout.js";
const cors = require("cors")


const PORT=process.env.PORT || 3001




app.use(express.json());
app.use(express.urlencoded({extended:true}));

DB.DBConnect();

app.use(cors({
      origin : "http://localhost:3000"
  }));

// app.use(`/auth`, authRoute); //auth/register









app.listen(PORT,()=>{

      console.log( `server started ${PORT}`)
})















