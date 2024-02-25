

import React from 'react'
import Nave from '../navebar/Nave'
import axios from "../../Axios/constant"
import { useState, useEffect } from 'react'
import { message } from "antd"
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom'
import Footer from '../footer/Footer'

function Home() {


  const [datas, setdatas] = useState([])

  const navigate = useNavigate()

  useEffect(() => {

    axios("/bloodbank/dashboard").then((respo) => {

      const result = respo.data;

      if (result.authfailed) {


        navigate("/login")
        return

      } else if (result.flag) {

        console.log(result.data)
        setdatas(result.data.blooddata)

      } else if (result.err) {

        message.error("server error")

      } else {

        console.log("empty account")

      }

    }).catch(err => {

      message.error("Somthing worng !")
    })



  }, [])


  const quantity_increment = (index) => {       // blood bank stock blood group quantity increment func

    const res = datas[index]


    const obj = {

      bloodgroup: res.bloodgroup,
      num: 1,
      status: true
    }

    axios.post("/bloodbank/dashboard/edit", obj).then((respo) => {

      if (respo.data.authfailed) {

        navigate("/login")
      } else if (respo.data.flag) {

        res.quantity += 1
        res.status = true
        setdatas([...datas])

      } else {

        message.error("server error")
      }


    }).catch(err => {


      message.error("somthing worng !")

    })


  }



  const quantity_decres = (index) => {  //// blood bank stock blood group quantity decrement func  

    const res = datas[index]

    if (res.quantity === 1) {



      const obj = {

        bloodgroup: res.bloodgroup,
        num: -1,
        status: false
      }



      axios.post("/bloodbank/dashboard/edit", obj).then((respo) => {


        if (respo.data.authfailed) {

          navigate("/login")

        } else if (respo.data.flag) {


          res.quantity = 0

          res.status = false

          setdatas([...datas])

        } else {

          message.error("server error")
        }

      }).catch(err => {


        message.error("somthing worng !")

      })


      return

    } else if(res.quantity > 1 ) {



      const obj = {

        bloodgroup: res.bloodgroup,
        num: -1,
        status: true
      }


      axios.post("/bloodbank/dashboard/edit", obj).then((respo) => {


        if (respo.data.authfailed) {

          navigate("/login")
        
        } else if (respo.data.flag) {

          res.quantity -= 1

          setdatas([...datas])


        } else {

          message.error("server error")
        }

      }).catch(err => {


        message.error("somthing worng !")

      })
    
    }else{

      console.log("hiii")
    }


  }



  return (
    <div>

      <Nave />

      <h5 className='text-center mt-12 font-bold text-red-700' > Your Stock Detailes </h5>

      <div className='w-full h-[500px]  pt-12  ' >


        <div className='container mx-auto flex justify-center ' >

          <Table striped bordered hover className='border-2 border-rose-600' >
            <thead  >
              <tr >

                <th >Blood Group</th>
                <th>Quantity(unit)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>

              {
                datas?.map((obj, index) => (

                  <tr className='text-center' >

                    <td>{obj.bloodgroup}</td>

                    <td> <button className='font-bold text-[20px] mr-4' onClick={() => { quantity_decres(index) }} > - </button>  <span className='text-blue-700 font-bold' > {obj.quantity}  </span>    <button className='font-bold text-[20px] ml-4' onClick={() => { quantity_increment(index) }}> + </button>          </td>

                    <td>

                      {
                        obj.status ?

                          <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-white' > Avilable   </span>

                          :

                          <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-white' > Not Avilable  </span>

                      }

                    </td>

                  </tr>
                ))
              }


            </tbody>
          </Table>



        </div>



      </div>


      <Footer />








    </div>
  )
}

export default Home
