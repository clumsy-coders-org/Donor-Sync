


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

    login_data: (req, res) => {   // login postt contro fun

        console.log("login")
        authservice.user_login(req.body).then((respo) => {

            if (respo.emailerr) {

                res.json({ emailerr: true })
                return

            } else if (respo.flag) {

                

                // jwt setup 

                const { _id, username } = respo.data     // login time user data get

             const token= JWT.sign({name:username,id:_id},process.env.JWT_SECRET_KEY);

             console.log(token)

             res.cookie("donor_sync", token, {
                maxAge: 360000,
                sameSite:"none",
                secure:true,
                httpOnly:true
                
             })
             
             res.json({ flag: true,token:token })
             
             return


            } else {

                res.json({ msg: "password err" })
                return
            }
        }).catch(err => {

            res.json({ msg: "server " })
            return
        })



    }}
