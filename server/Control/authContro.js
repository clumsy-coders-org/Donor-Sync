


const authservice = require("../service/authService.js")
const JWT = require("jsonwebtoken")
require("dotenv").config()

module.exports = {




    signup_data: (req, res) => {

        //  console.log(req.body)



        // signup post req contro fun 


        authservice.user_signup(req.body).then((respo) => {

            console.log("signup")
            if (respo.exist) {

                res.json({ exist: true })
                return

            } else if (respo.flag) {

                res.json({ flag: true })
                return
            }
        }).catch(err => {

            res.status(500).json({ flag: false })
            return
        })


    },






    login_user: (req, res) => {


        authservice.user_login(req.body).then((respo) => {


            console.log("resolve")

        }).catch(err => {

            console.log("reject")
        })



    }




}
