

import { connect } from "mongoose";
// require('dotenv').config()
import dotenv from "dotenv"
dotenv.config();



export function DBConnect(){

    connect(process.env.DB_URL).then(()=>{

          console.log("DB connected")
    }).catch(err=>{

          console.log("DB connecting failed",err)
    })

       
}




