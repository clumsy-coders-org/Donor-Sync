

const JWT = require("jsonwebtoken")
require("dotenv").config()

module.exports = {


    user_auth_verify: (req, res, next) => {

        const token = req.cookies.donor_sync_user
        console.log(token)

        if (!token) {

            console.log("no token hii")
            res.json({ authfailed: true })
            return

        } else {

            JWT.verify(token, process.env.JWT_BB_SECRET_KEY, (err, resilt) => {

                if (resilt) {

                    console.log("ok")
                    next()

                } else {

                    console.log("no token")

                    res.json({ authfailed: true })

                    return

                }
            })


        }




    },


   
}