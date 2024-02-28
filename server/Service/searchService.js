

const userModel = require("../Database/Models/userModel") // doners data model

const bbModel = require("../Database/Models/bloodBankModel")  // blood bank account data model 

// const blood_data_Model = require("../Database/Models/bloodModel");   // blood bank stock data model 



module.exports = {


    find_avilable_bloodBank: (data) => {    // find blood bank func



        return new Promise(async (resolve, reject) => {

            console.log(data.district)


            try {

                const result = await bbModel.find({ district: data.district })

               

                if (result.length === 0) {


                    console.log("empty")
                    resolve({empty:true})
                
                } else {


                  resolve({flag:true,data:result})


                }

            } catch (error) {

                reject()
                console.log(error)

            }

        })

    },






    find_avilable_donor: (data) => {       // finding doner func 

        return new Promise(async (resolve, reject) => {


            try {

                const result = await userModel.find({ bloodgroup: data.bloodgroup, district: data.district, type: "Donor" })

                if (result.length === 0) {


                    resolve({ empty: true })
                } else {

                    resolve({ flag: true, data: result })
                }

            } catch (error) {

                reject()

            }

        })


    }




}




