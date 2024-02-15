



const express = require("express");
const app = express()
const DB = require("./Database/connect")
const authRoute = require("./Routers/authRout")
const searchRout=require("./Routers/searchRout")

const cors = require("cors")
const bodyparser= require("body-parser")
const cookieparser=require("cookie-parser");
require('dotenv').config();
const PORT=process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))
app.use(cookieparser());






app.use(cors({
      origin : "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true
  }));

app.use(`/auth`, authRoute); //auth/register

DB.DBConnect();  // Database connecting func










app.listen(PORT,()=>{

      console.log( `server started ${PORT}`)
})















