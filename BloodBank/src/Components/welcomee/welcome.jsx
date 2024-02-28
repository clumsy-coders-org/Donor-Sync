

import React from 'react'
import Nave from '../navebar/Nave'
import logo from "../../Assets/logo.png"
import { useEffect, useState } from 'react'
import { MdOutlineSignalWifiStatusbarConnectedNoInternet4 } from "react-icons/md";
import { Oval } from 'react-loader-spinner'
import axios from "../../Axios/constant"




function Welcome() {


  const [flag, setflag] = useState(false);
  const [err, seterr] = useState(false);
  const [spinner, setspinner] = useState(true)


  useEffect(() => {

    axios("/auth/connecting").then((respo) => {

      if (respo.data.flag) {

        setflag(true)
        setspinner(false)


      } else {

        setspinner(false)
        seterr(true)
      }
    }).catch(err => {

      setspinner(false)
      seterr(true)
   
    })

  }, [])




  return (
    <div>

      {

        flag ?

          <Nave />

          :

          null

      }


      <div className='w-full h-[600px]  pt-32'>


        <div className='w-full h-[200px] flex justify-center   ' >

          <img src={logo} alt="" className='w-[200px] h-[200px]' />

        </div>

        <p className='text-center font-bold text-[40px] text-red-600' > Welcome  </p>

        <div className='w-full h-[300px] ' >

          <div className='w-full h-[300px]   flex justify-center pt-10 '  >

            {

              spinner ?

                <div className='w-[270px] h-[60px] bg-white flex items-center pl-5 shadow-[rgba(0,_0,_0,_0.24)_0px_5px_8px] gap-3' >

                  <Oval
                    visible={true}
                    height="35"
                    width="35"
                    color="#A94438"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />


                  <p> Please Wait Connecting... </p>

                </div>

                :

                err ?

                  <div className='w-[270px] h-[60px] bg-white flex items-center  pl-5 shadow-[rgba(0,_0,_0,_0.24)_0px_5px_8px] gap-3' >


                    <MdOutlineSignalWifiStatusbarConnectedNoInternet4 className='text-red-700 text-[20px]' />

                    <p> Connecting Failed. Try Again </p>





                  </div>

                  :


                  null






            }






          </div>





        </div>




      </div>


    </div>

  )

}

export default Welcome
