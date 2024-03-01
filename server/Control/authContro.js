


const authservice = require("../Service/authService")
const JWT = require("jsonwebtoken")
require("dotenv").config()

module.exports = {



    connecting:(req,res)=>{    // app open time check server and database connecting func

   authservice.connecting().then(()=>{

            res.json({flag:true})
  
        }).catch(err=>{

         res.json({err:true})
   })


          
    },


    signup_data: (req, res) => { // user signup func

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






    login_user: (req, res) => { // user login func 


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



    },




      user_account_data:(req,res)=>{  // user account data get func

        const token = req.cookies.donor_sync_user

        console.log("account view")

        JWT.verify(token, process.env.JWT_BB_SECRET_KEY,(err,result)=>{

              
              if(err){

                  res.json({authfailed:true})
            }else{


                  const {id}=result

                    authservice.user_account_data(id).then((respo)=>{

                           if(respo.flag){

                               res.json({flag:true,data:respo.data})
                           
                            }else{

                               res.json({flag:false})
                           }
                    }).catch(err=>{


                          res.json({err:true})
                    })
            }
        })



         
      }




}
