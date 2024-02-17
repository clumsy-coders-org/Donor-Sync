


const bbModel=require("../Database/Models/bloodBankModel")
const bycript=require("")





module.exports={

     
      blood_bank_auth:(data)=>{

          return new Promise( async (resolve,reject)=>{


               const result=await bbModel.findOne({regnumber:data.regnumber})

               if(result){

                  resolve({exist:true})
               
                }else{

                   


               }

              
                 
          })
      }
}