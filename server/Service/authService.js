


const bcrypt = require("bcrypt")
import Users from "../Database/Models/userModel"
module.exports={

    user_signup:(data)=>{                           //user signup Database query
        return new Promise (async(resolve,reject)=>{
            const userdata = await Users.findOne({email:data.email})

            if(userdata){
                resolve({exist:true})
            }else{
                const salt = await bcrypt.genSalt(10);
                data.password = await bcrypt.hash(data.password, salt)

                const final = new Users(data)

                final.save().then(()=>{
                    resolve({flag:true})
                }).catch({err:err})

                }
            })
        }

       
    }    



    module.exports={

        user_login:(data)=>{                           //user login Database query
            return new Promise (async(resolve,reject)=>{
                try{
                const userdata = await Users.findOne({email:data.email})
    
                if(!userdata){
                    resolve({emailerr:true})
                }else{
    
                    const final = await bcrypt.compare(data.password, userdata.password)

                        if(!final){
                        resolve({flag:false})
                    }else{
                        resolve({flag:true, data:userdata})
                    }
                }
                }catch(error){
                    reject({err:error})
                }
            })
    
          }
        }    

    



