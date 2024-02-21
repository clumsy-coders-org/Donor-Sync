

const service=require("../Service/bloodbankService")




module.exports={

     
      blood_bank_auth:(req,res)=>{


        service.blood_bank_auth(req.body)

           
      }
}
