

import React from 'react'
import logo from "../../Assets/logo.png"
import { BsFillPersonFill } from "react-icons/bs";

function Nave() {
  return (
    <div>

        <div className='w-full h-[70px] bg-gray-200 flex ' >

            <div className='w-[50%] h-full flex items-center pl-10 gap-10 ' >
                <img src={logo} className='w-[80px] h-[80px]' alt="" />

                <span className='cursor-pointer text-red-700 font-bold hover:text-black' > Home </span>

                <span className='cursor-pointer text-red-700 font-bold hover:text-black' > About </span>

                <span className='cursor-pointer text-red-700 font-bold hover:text-black' > Contact </span>

            </div>

            <div className='w-[50%] h-full flex justify-center items-center ' >

             <span className='font-bold'> Valuvanad hospital blood bank </span>

             <BsFillPersonFill className='ml-20 text-[25px] hover:text-red-700' />


            </div>


        </div>


      
    </div>
  )
}

export default Nave
