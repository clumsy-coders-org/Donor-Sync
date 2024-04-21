

import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../../assets/logo.png"
import { IoMdClose } from "react-icons/io";
import { useRef } from 'react';
import { Oval } from 'react-loader-spinner'


function Model() {


    const navigate = useNavigate()

    const modelRef = useRef()


    // const modelClose = (e) => {

       
    //     if (modelRef.current === e.target) {

    //         props.closefunc(false)
    //         console.log(e.target)

    //     }
    // }








    return (
        <div>

            <div className=' fixed inset-0 bg-black bg-opacity-30 backdrop-blur-[1px] flex justify-center items-center'  >

                <div ref={modelRef}  className='w-full h-[650px] flex justify-center items-center ' >

                    {/* <div className='w-[300px] sm:w-[400px] h-[300px] sm:h-[250px] bg-red-500  absolute rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_5px_8px] ' >

         <div className='w-full h-[10px] bg-white flex justify-end pr-5 pt-5 ' > 
        
        <IoMdClose className='cursor-pointer font-semibold' onClick={() => { props.closefunc(false) }} />
        
         </div> 


        <div className='w-full h-[80px] bg-white flex justify-center pt-5  ' >

            <img src={logo} className='w-[70px] h-[70px]' />

        </div>

        <p className='text-center text-wrap mt-8 text-white font-semibold text-[18px]' > Create an Account and Part of Donor Sync </p>

        <div className='w-full flex justify-center mt-5'>

            <button onClick={() => { navigate("/signup") }} className='w-[100px] h-[35px] bg-white rounded-2xl hover:shadow-[rgba(0,_0,_0,_0.24)_0px_5px_8px]' > Register </button>

        </div>

        <p className='text-center text-[13px] mt-3 cursor-pointer'  > Skip </p>




    </div> */}

                    <div className='w-[250px] h-[70px] bg-white flex justify-center items-center gap-3' >

                        <p> your data is updating  </p>

                        <Oval
                            visible={true}
                            height="30"
                            width="30"
                            color="#A94438"
                            ariaLabel="oval-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />


                    </div>





                </div>



            </div>

        </div>
    )
}

export default Model
