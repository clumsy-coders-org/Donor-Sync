

import React from 'react'
import logo from "../../assets/logo.png"
import { Oval } from 'react-loader-spinner'
import { useState, useEffect } from 'react'
import { MdOutlineSignalWifiStatusbarConnectedNoInternet4 } from "react-icons/md";
import axios from "../../axios/instance"
import { useNavigate } from 'react-router-dom';


function Welcome() {

    const [flag, setflag] = useState(true)
    const navigate=useNavigate()

    useEffect(()=>{

        axios("/auth/connecting").then((respo)=>{

                  if(respo.data.flag){

                    navigate("/home")
                       
                  }else{

                       setflag(false)
                  }
        }).catch(err=>{

              setflag(false)
        })

         
    },[])





    return (
        <div>

            <div className='w-full h-[600px]' >

                <div className='w-full h-[300px]  flex justify-center items-center ' >

                    <img src={logo} alt="" className='w-[120px] h-[120px]' />


                </div>

                <div className='w-full h-[300px]   flex justify-center'  >

                    {

                        flag ?

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

                            <div className='w-[270px] h-[60px] bg-white flex items-center  pl-5 shadow-[rgba(0,_0,_0,_0.24)_0px_5px_8px] gap-3' >


                                <MdOutlineSignalWifiStatusbarConnectedNoInternet4 className='text-red-700 text-[20px]' />

                                <p> Connecting Failed. Try Again </p>





                            </div>


                    }






                </div>



            </div>

        </div>
    )
}

export default Welcome
