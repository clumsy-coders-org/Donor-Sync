


import React from 'react'
import logo from "../../Assets/logo.png"
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <div>

        <div className='w-full h-[250px] bg-slate-300 pt-3 '>

            
           <p className='text-center' > Donor <span className='text-red-500' >  Sync </span> </p>
           <div className='w-full h-[50px]  flex justify-center items-center gap-3 '>  

           < IoMail className='text-[20px]' />

           < FaPhoneAlt className='text-[18px]' /> 7592831937
           
           
           </div>

          <img src={logo} alt="" className='w-[70px] h-[70px] ml-10' />
          

          <span className='text-gray-600 ml-10'> Blood Bank Port </span>
          
          <p className='text-center ' > Created & All Rights Reserved By  <a href=""> <span className='text-black font-bold' > Clumsy  </span> <span className='text-red-700 font-bold' > Coders </span>    </a>      </p>

         
        

        



        </div>
      
    </div>
  )
}

export default Footer 
