

import React from 'react'
import logo from "../../assets/logo.png"


function Nave() {
  
    return (
    <div>
        <div className='w-full h-[100px] bg-gray-300 flex '>

            <div className='w-[50%] h-full pl-10 flex items-center '>
                
                <img src={logo} alt="" className='w-[80px] h-[80px]  ' />


            </div>

            <div className='w-[50%] h-full'>


            </div>

          
              

        </div>


      
    </div>
  )
}

export default Nave
