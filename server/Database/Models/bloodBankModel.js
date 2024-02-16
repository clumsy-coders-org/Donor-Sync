

const mongoose=require("mongoose");



// blood bank account schema


const bloodBank= new mongoose.Schema({


        name:{

            type:String,
            require:true
        },

        regnumber:{

             type:String,
             require:true
        },

        district:{

             type:String,
             require:true
        },

        city:{

             type:String,
             require:true
        }

    
    
    })

    const bloodBank_accountSchema=mongoose.model("blood_bank_AC",bloodBank);

    module.exports=bloodBank_accountSchema