



const bbModel = require("../Database/Models/bloodBankModel")
const userModel = require("../Database/Models/userModel")
const nodemailer = require("nodemailer")
const mailgen = require('mailgen');
require("dotenv").config()


// blood bank stock out time  sent mail to user




module.exports = {


    sent_mail: async (data) => {


        const details = await bbModel.findOne({ _id: data.id })   // blood bank district find


        if (details) {


            const usersdata = await userModel.find({ district: details.district, bloodgroup: data.bloodgroup })  // blood bank district matching users find

            if (usersdata) {

                usersdata.forEach((obj) => {

                    const transporter = nodemailer.createTransport({
                        service: 'Gmail',
                        auth: {
                            user: process.env.EMAIL,
                            pass:process.env.EMAIL_PASS,
                        }
                    });

                    let mailGenarator = new mailgen({

                        theme: "default",
                        product: {
                            name: "Doner Sync",
                            link: "https://mailgen.js/"
                        }

                    });

                    let responces = {
                        body: {
                            name:obj.name,

                            intro: `

                            We hope this message finds you well. your District Blood Bank  <b>${details.name} </b>  <span></span>  <b> ${data.bloodgroup} </b> blood
                            reach stock out. would you like to donate blood. please contact to blood bank.<br/><br/>

                              <b>  ${details.name}  </b> <br/>
                               ${details.district} <br/>
                               ${details.city} <br/>
                               ${details.mobile}
                            
                            
                            `
                        
                        
                        }
                    
                    
                    }

                    let mail = mailGenarator.generate(responces);

                    let message = {

                        from: "  'Donor Sync' <sarathsarath93366@gmail.com> ",
                        to: `${obj.email}`,
                        subject: "Donor Sync ",
                        html: mail
                    };

                    transporter.sendMail(message).then(() => {

                        

                        console.log("mailsent sucssfully");

                    }).catch(err => {

                        

                        console.log(" mail sent filled",err)

                    });

                })



            } else {


                console.log("user not found")
            }



        }




    }
}