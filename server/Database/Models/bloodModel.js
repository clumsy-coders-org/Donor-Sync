




const mongoose=require("mongoose");



const blood_data=new mongoose.Schema({

      
       bankid:{

          type:String,
          require:true
       },

       blood:{
         
          type:Array,
          require:true
       }
})


const blood_data_schema=mongoose.model("blood_data",blood_data);

module.exports=blood_data_schema;