

import React from 'react'
import logo from "../../assets/logo.png"
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <div>

        <div className='w-full h-[250px] bg-slate-300 pt-3 '>

            
           <div className='w-full h-[50px]  flex justify-center items-center gap-3 '>  

           < IoMail className='text-[20px]' />

           < FaPhoneAlt className='text-[18px]' /> 7592831937
           
           
           </div>

          <img src={logo} alt="" className='w-[70px] h-[70px] ml-10' />
          <p className='ml-10' > Donor <span className='text-red-500' >  Sync </span> </p>

          

          
          <p className='text-center text-gray-500 ' > Created & All Rights Reserved By  <a href=""> <span className='text-black font-bold' > Clumsy  </span> <span className='text-red-700 font-bold' > Coders </span>    </a>      </p>

         
        <p className='text-center text-gray-500' > @2024 </p>

        



        </div>
      
    </div>
  )
}

export default Footer 
