


const service = require("../Service/searchService");




module.exports = {


     find_blood: (req, res) => {

          const { bloodgroup, type, district } = req.params
          
          if (type === 'Donor') {
               
               service.find_avilable_donor({ bloodgroup, district }).then((respo) =>{

                    if (respo.empty) {

                         res.json({ empty: true })
                        
                         return

                    
                    } else if (respo.flag) {

                         res.json({ flag: true, data: respo.data })
                         
                         return
                    }
               }).catch(err => {

                    
                    res.json({ err: true, errmsg: err })
               
               })
          
          } else {
               
               
               service.find_avilable_bloodBank(req.body).then((respo) => {

                    if (respo.empty) {

                         res.json({ empty: true })
                         return

                    } else if (respo.flag) {

                         res.json({ flag: true, data: respo.data })
                         return
                    }


               }).catch(err => {

                    res.json({ err: true })

                    return
               })




          }

     }

}
