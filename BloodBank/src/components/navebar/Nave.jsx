

import React from 'react'
import logo from "../../Assets/logo.png"

function Nave() {
  return (
    <div>

        <div className='w-full h-[100px] bg-gray-200 flex ' >

            <div className='w-[50%] h-full flex items-center pl-10 gap-10 ' >
                <img src={logo} className='w-[80px] h-[80px]' alt="" />

                <span> Home </span>

                <span> About </span>

                <span> Contact </span>

            </div>

            <div className='w-[50%] h-full bg-green-400' >

            </div>


        </div>


      
    </div>
  )
}

export default Nave
