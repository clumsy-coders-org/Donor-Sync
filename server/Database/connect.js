

const moongoose=require("mongoose");
require('dotenv').config()




module.exports.DBConnect=()=>{

    moongoose.connect(process.env.DB_URL).then(()=>{

          console.log("DB connected")
    
      
      }).catch(err=>{

         
            console.log("DB connecting failed",err)
   
      })

       
}




