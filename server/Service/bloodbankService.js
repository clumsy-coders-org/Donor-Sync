


const bbModel = require("../Database/Models/bloodBankModel")
const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken")
// const bloodBankdata_add_fun = require("./blooddataadd")

const arrya = [
   {
      bloodgroup: "O+",
      quantity: 0,
      status: false
   },
   {
      bloodgroup: "A+",
      quantity: 0,
      status: false
   },
   {
      bloodgroup: "A+",
      quantity: 0,
      status: false
   },
   {
      bloodgroup: "B+",
      quantity: 0,
      status: false
   },
   {
      bloodgroup: "B-",
      quantity: 0,
      status: false
   },
   {
      bloodgroup: "O-",
      quantity: 0,
      status: false
   },
   {
      bloodgroup: "AB+",
      quantity: 0,
      status: false
   },
   {
      bloodgroup: "AB-",
      quantity: 0,
      status: false
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


               resolve({ flag: true })


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


   },



   blood_bank_dashboard_data: (id) => {


      return new Promise(async (resolve, reject) => {

         try {


            const result = await bbModel.findOne({ _id: id })

            if (!result) {

               resolve({ flag: false })
            } else {

               resolve({ flag: true, data: result })
            }


         } catch (error) {

            reject()

         }

      })
   },



   blood_bank_dashboard_data_edit: (data) => {         // blood bank stock blood group quantity changes fun 

      return new Promise(async (resolve, reject) => {

          
         bbModel.updateOne({_id:data.id,"blooddata.bloodgroup":data.bloodgroup},{

              $inc:{"blooddata.$.quantity":data.num},
              $set:{"blooddata.$.status":data.status}
              
       
            }).then(()=>{


                 resolve();
          
               }).catch(err=>{

                   reject()

            })

             


      })
   }









}