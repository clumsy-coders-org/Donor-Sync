

import React from 'react'
import Nave from '../navebar/Nave'
import logo from "../../Assets/logo.png"


function Welcome() {
  
    return (
    <div>
        
        <Nave />

        <div className='w-full h-[600px]  pt-32'>

           
            <div className='w-full h-[200px] flex justify-center   ' >

                <img src={logo} alt="" className='w-[200px] h-[200px]' />

              </div>

              <p className='text-center font-bold text-[40px] text-red-600' > Welcome  </p>
      
        
        
        
        </div>

      
    </div>
  )
}

export default Welcome
