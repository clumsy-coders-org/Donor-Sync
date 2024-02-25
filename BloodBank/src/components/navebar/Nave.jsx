

import React from 'react'
import logo from "../../Assets/logo.png"
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "../../Axios/constant"
import { message } from 'antd';


function Nave() {

  const [name, setname] = useState('')
  const [drop, setdrop] = useState(false)
  const [flag, setflag] = useState(false)

  
  useEffect(() => {

    axios("/bloodbank/account").then((respo) => {

      if (respo.data.authfailed) {

        setname("")
        return
      } else if (respo.data.flag) {

        const result = respo.data.data

        setname(result.name)
        setflag(true)
        console.log(respo.data)
        return
      } else if (respo.data.err) {

        message.error("server error")
      }

    }).catch(err => {

      message.error("somthing worng ")
    })


  }, [])

  const navigate = useNavigate()

  return (
    <div>

      <div className='w-full h-[70px] bg-gray-200 flex  ' >

        <div className='w-[50%] h-full flex items-center pl-10 gap-10 ' >
          <img src={logo} className='w-[80px] h-[80px]' alt="" />

          <span className='cursor-pointer text-red-700 font-bold hover:text-black' onClick={() => { navigate("/home") }} > Home </span>

          <span className='cursor-pointer text-red-700 font-bold hover:text-black' > About </span>

          <span className='cursor-pointer text-red-700 font-bold hover:text-black' > Contact </span>

        </div>

        <div className='w-[50%] h-full flex justify-center items-center ' >

          <span className='font-bold '> {name} </span>




          <BsFillPersonFill className='ml-20 text-[25px] hover:text-red-700' onClick={() => { setdrop(!drop) }} />

          {
            drop ?

              <div className='w-[100px] h-[100px] mt-[120px] ml-[200px] bg-slate-300 pt-2  rounded-2xl absolute '>


                {

                  flag ?


                    <>

                      <p className='text-center cursor-pointer ' > Account  </p>

                      <p className='text-center cursor-pointer'  > Logout  </p>

                    </>

                    :

                    <>

                      <p className='text-center cursor-pointer' onClick={()=>{navigate("/signup")}}   > Signup   </p>

                      <p className='text-center cursor-pointer' onClick={()=>{navigate("/login")}}>  Login  </p>

                    </>
                    
                    }

               

              </div>

              : null



          }




















        </div>




      </div>



    </div>
  )
}

export default Nave
