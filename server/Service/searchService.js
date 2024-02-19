

const userModel = require("../Database/Models/userModel") // doners data model

const bloodBank_AC_Model = require("../Database/Models/bloodBankModel")  // blood bank account data model 

// const blood_data_Model = require("../Database/Models/bloodModel");   // blood bank stock data model 



module.exports = {


    find_avilable_bloodBank: (data) => {    // find blood bank func


        return new Promise(async (resolve, reject) => {


            try {

                const result = await bloodBank_AC_Model.find({ district: data.district })

                if (result.length === 0) {

                    resolve({ empty: true })

                } else {

                    resolve({ flag: true, data: result })


                }

            } catch (error) {

                reject()

            }

        })

    },












    find_avilable_donor: (data) => {       // finding doner func 


        return new Promise(async (resolve, reject) => {


            try {

                const { bloodgroup, district } = data


                const result = userModel.find({ bloodgroup: bloodgroup, district: district })

                if (result.length <= 0) {

                    resolve({ empty: true })
                } else {

                    resolve({ flag: true, data: result })
                }



            } catch (error) {


                reject(error)


            }





        })
    }




}




