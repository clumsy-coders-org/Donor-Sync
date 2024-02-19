


const bbModel = require("../Database/Models/bloodBankModel")
const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken")
// const bloodBankdata_add_fun = require("./blooddataadd")

const arrya = [
   {
      bloodgroup: "O+",
      quantity: 0,
      status: "notavilable"
   },
   {
      bloodgroup: "A+",
      quantity: 0,
      status: "notavilable"
   },
   {
      bloodgroup: "A+",
      quantity: 0,
      status: "notavilable"
   },
   {
      bloodgroup: "B+",
      quantity: 0,
      status: "notavilable"
   },
   {
      bloodgroup: "B-",
      quantity: 0,
      status: "notavilable"
   },
   {
      bloodgroup: "O-",
      quantity: 0,
      status: "notavilable"
   },
   {
      bloodgroup: "AB+",
      quantity: 0,
      status: "notavilable"
   },
   {
      bloodgroup: "AB-",
      quantity: 0,
      status: "notavilable"
   }
]



module.exports = {


   blood_bank_signup: (data) => {

      return new Promise(async (resolve, reject) => {


         const result = await bbModel.findOne({ regnumber: data.regnumber })

         if (result) {

            resolve({ exist: true })

         } else {

            data.password = await bcrypt.hash(data.password, 10);

            const final = new bbModel({

               name: data.name,
               regnumber: data.regnumber,
               password: data.password,
               district: data.district,
               city: data.city,
               mobile: data.mobile,
               blooddata: arrya


            });



            final.save().then((respo) => {

                 
               resolve({flag:true})


            }).catch(err => {


               reject({ err: true })

            })




         }



      })
   },

   blood_bank_login: (data) => {

      return new Promise(async (resolve, reject) => {

         try {

            const result = await bbModel.findOne({ regnumber: data.regnumber })

            if (!result) {

               resolve({ regnumerr: true })

            } else {

               const final = bcrypt.compare(data.password, result.password)

               if (!final) {

                  resolve({ passerr: true })

               } else {

                  resolve({ flag: true, data: result })

               }


            }


         } catch (error) {


            reject()

         }


      })


   }
}