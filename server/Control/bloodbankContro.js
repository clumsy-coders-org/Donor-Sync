

const service = require("../Service/bloodbankService");
const JWT = require("jsonwebtoken")




module.exports = {


    blood_bank_signup: (req, res) => {

       
        service.blood_bank_signup(req.body).then((respo) => {

            if (respo.exist) {

                res.json({ exist: true })
                return

            } else if (respo.flag) {

                res.json({ flag: true })
                return
            }

        }).catch(err => {

            res.json({ err: true })
            return
        })

    },




    blood_bank_login: (req, res) => {


        service.blood_bank_login(req.body).then((respo) => {


            if (respo.regerr) {

                res.json({ regerr: true })
                return

            } else if (respo.passerr) {

                res.json({ passerr: true })
                return

            } else if (respo.flag) {

                const { _id, name } = respo.data

                const token = JWT.sign({ name: name, id: _id }, process.env.JWT_BB_SECRET_KEY);


                res.cookie("donor_sync_blood_bank", token, {
                    maxAge: 360000,
                    sameSite: "none",
                    secure: true,
                    httpOnly: true

                })


                res.json({ flag: true })


            }
        }).catch(err => {

            res.json({ err: true })
        })

    },



    blood_bank_dashboard_data: (req, res) => {

        const id = "65d38bc7d4f42a5624707f22"


        service.blood_bank_dashboard_data(id).then((respo) => {


            if (respo.flag) {

                res.json({ flag: true, data: respo.data })
                return

            } else {

                res.json({ flag: false })
                return

            }
        }).catch(err => {

            res.json({ err: true })
            return
        })



    },


    bllod_bank_dashboard_data_edit: (req, res) => {      // blood bank stock blood group quantity changes fun 


        // const token = req.cookie.donor_sync_blood_bank

        // JWT.verify(token, process.env.JWT_BB_SECRET_KEY, (err, result) => {

        //     if (result) {

        //         const { id } = result


        //     }
        // })

        const obj = {

            id: "65d38bc7d4f42a5624707f22",
            bloodgroup: req.body.bloodgroup,
            num: req.body.num,
            status:req.body.status

        }

      

       
          service.blood_bank_dashboard_data_edit(obj).then((respo)=>{

                     res.json({flag:true})
          
            }).catch(err=>{

               res.json({flag:false})
          })


    }







}
