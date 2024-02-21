


const bcrypt = require("bcrypt")
const users = require("../Database/Models/userModel")







module.exports = {



    user_signup: (data) => {                           //user signup Database query

        return new Promise(async (resolve, reject) => {
            const userdata = await users.findOne({ email: data.email })

            if (userdata) {
                resolve({ exist: true })
            } else {
                // const salt = await bcrypt.genSalt(10);
                data.password = await bcrypt.hash(data.password, 10)

                const final = new users(data)

                final.save().then(() => {

                    resolve({ flag: true })

                }).catch(err => {

                    reject({ err: err })
                    console.log(err);
                })

            }
        })
    },




    user_login: (data) => {


        return new Promise(async (resolve, reject) => {

            try {


                const userdata = await users.findOne({ email: data.username })

                if (userdata) {

                    const final=await bcrypt.compare(data.password,userdata.password)

                    if(final){

                          resolve({flag:true,data:userdata})
                    }else{

                         resolve({flag:false})
                    }
                   

                } else {

                    resolve({emailerr:true})

                }



            } catch (error) {

                console.log("errr")
                reject()

            }
        })
    },




    user_account_data:(userid)=>{

        return new Promise(async(resolve,reject)=>{

                try {

                     const userdata= await users.findOne({_id:userid})

                      if(userdata){

                          resolve({flag:true,data:userdata})
                          return
                      }else{

                         resolve({flag:false})
                         return
                      }
                    
                } catch (error) {

                    reject()
                    
                }
             
        })

         
    }



}





