



const express = require("express");
const app = express()
const DB = require("./Database/connect")
const authRoute = require("./Routers/authRout")
const searchRout=require("./Routers/searchRout")
const bbauth=require("./Routers/bloodbankRout")

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
      origin : ["https://testdonerbloodbank-port.onrender.com","https://donor-sync-com.onrender.com"],
      methods: ["GET", "POST"],
      credentials: true
  }));



DB.DBConnect();  // Database connecting func


app.use("/auth", authRoute); //auth/register

app.use("/search",searchRout) 


app.use("/bloodbank",bbauth)  // blood bank auth  






app.listen(PORT,()=>{

      console.log( `server started ${PORT}`)
})















