


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


            if (respo.emailerr) {

                console.log("email err")
                res.json({ emailerr: true })
                return

            } else if (respo.flag) {


                console.log("login okk")

                const { _id, name } = respo.data

                const token = JWT.sign({ name: name, id: _id }, process.env.JWT_BB_SECRET_KEY);

                res.cookie("donor_sync_user", token, {

                    maxAge: 360000,
                    sameSite: "none",
                    secure: true,
                    httpOnly: true

                })

                res.json({ flag: true,token:token })
                return

            } else {

                console.log("pass errr")
                res.json({ flag: false })
                return
            }

        }).catch(err => {

            console.log("reject")
            res.json({ err: true })
        })



    }




}
