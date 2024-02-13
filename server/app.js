
import express, { json, urlencoded } from "express";
const app=express();
// require('dotenv').config();
import { DBConnect } from "../server/Database/connect.js";
import dotenv from "dotenv"
dotenv.config();
import authRoute from "./Routers/authRout.js";
import cors from "cors";


const PORT=process.env.PORT || 3001




app.use(json());
app.use(urlencoded({extended:true}));

DBConnect();

app.use(cors({
      origin : "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true
  }));

app.use(`/auth`, authRoute); //auth/register









app.listen(PORT,()=>{

      console.log( `server started ${PORT}`)
})















