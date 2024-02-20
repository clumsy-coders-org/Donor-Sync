


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


        return new Promise((resolve, reject) => {

            try {

                if (data) {

                    console.log("data ok")
                    resolve({flag:true})

                } else {

                   
                    resolve({flag:false})
                }

            } catch (error) {

                console.log("errr")
                reject()

            }
        })
    }



}





