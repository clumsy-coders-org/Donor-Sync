


const bcrypt = require("bcrypt")
const users = require("../Database/Models/userModel")



// module.exports={

//     user_signup:(data)=>{                           //user signup Database query
//         return new Promise (async(resolve,reject)=>{
//             const userdata = await users.findOne({email:data.email})

//             if(userdata){
//                 resolve({exist:true})
//             }else{
//                 const salt = await bcrypt.genSalt(10);
//                 data.password = await bcrypt.hash(data.password, salt)

//                 const final = new users(data)

//                 final.save().then(()=>{
//                     resolve({flag:true})
//                 }).catch({err:err})

//                 }
//             })
//         }

       
//     }    



    module.exports={



        user_signup:(data)=>{                           //user signup Database query
           
    
            console.log(data)
           
            return new Promise (async(resolve,reject)=>{
                const userdata = await users.findOne({email:data.email})
    
                if(userdata){
                    resolve({exist:true})
                }else{
                    // const salt = await bcrypt.genSalt(10);
                    data.password = await bcrypt.hash(data.password, 10)
    
                    const final = new users(data)
    
                    final.save().then(()=>{
                        console.log("DB CONNECT");
                        resolve({flag:true})
                   
                    }).catch(err =>{

                        reject({err:err})
                        console.log(err);
                    })
    
                    }
                })
            },



      user_login:(data)=>{                           //user login Database query
            return new Promise (async(resolve,reject)=>{
                try{
                const userdata = await users.findOne({email:data.username})
                    console.log(userdata);
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

    



