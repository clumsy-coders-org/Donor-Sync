
import React from 'react'
import signupimg from "../../assets/logo-final-1.png"
import { useState } from 'react'


function Signup() {

  const [mobNext,setmobNext]=useState(true)


  return (
    <div>

      <div className='w-full h-screen   flex flex-wrap justify-center items-center' >

        <div className='w-[350px] h-[600px] border-solid border-2 border-red-600 bg-white flex justify-center rounded-[50px] items-center sm:w-[800px] sm:h-[500px]'  >

         <div className='w-[400px] h-[300px] hidden sm:block' >

          <h1 className='text-center text-[30px] font-bold text-red-600' > Welcome  </h1>

         <img className='hidden sm:block w-[200px] h-[200px] mt-[50px] ml-[50px] ' src={signupimg} alt="" />


         </div>

          

          <div className='h-[100%] w-full'>

            <div className='w-[100%] h-[50px]  bg-white mt-10 text-center'  >

              <h1 className='text-4xl font-bold text-red-600' > Sign Up </h1>

            </div>

            <div className='w-[100%] h-[400px] pt-10 pl-[60px] hidden sm:block '>



              <input type="text" placeholder='Full Name' className='w-[200px] h-10 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600' />

              <input type="text" placeholder='Age' className='w-[200px] h-10 rounded-[10px] mb-8 border-solid border-2 border-red-600 ' /> <br />

              <input type="text" placeholder='Mobile Number' className='w-[200px] h-10 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600 ' />

              <input type="text" placeholder='Email Id' className='w-[200px] h-10 rounded-[10px] mb-8 border-solid border-2 border-red-600  ' /><br />


              <input type="text" placeholder='District' className='w-[200px] h-10 rounded-[10px]    mb-8 mr-5 border-solid border-2 border-red-600 ' />

              <input type="text" placeholder='City' className='w-[200px] h-10 rounded-[10px]  mb-8 border-solid border-2 border-red-600 ' /> <br />

              <input type="text" placeholder='Bllod Group' className='w-[200px]   h-10 rounded-[10px] mb-8 border-solid border-2 border-red-600 ' />

              <label htmlFor="" className='ml-[20px] font-bold  ' > Doner ?  </label> <input type="Radio" />  <label htmlFor="" className='ml-[20px] font-bold'>Recepient ?  </label> <input type="Radio" />


             <button  className='ml-[120px] w-[150px] h-10 rounded-lg mt-[10px] font-bold border-solid border-2 border-red-600 text-[20px] ' > Sign Up </button>             
 

            </div>


              {/* mobile view */}

              {

                mobNext ? 

                <div className='w-[100%] h-[400px] pt-[80px] pl-[20px]  sm:hidden '>

             
                <input type="text" placeholder='Full Name' className='w-[300px] h-12 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600' />
                   
                   
                <input type="text" placeholder='Age' className='w-[300px] h-12 rounded-[10px] mb-8 border-solid border-2 border-red-600 ' /> <br />
                
                <input type="text" placeholder='Mobile Number' className='w-[300px] h-12 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600 ' />
  
                <input type="text" placeholder='Email Id' className='w-[300px] h-12 rounded-[10px] mb-8 border-solid border-2 border-red-600  ' /><br />
  
                <button onClick={()=>{setmobNext(false)}} className='ml-[80px] w-[150px] h-10 rounded-lg font-bold border-solid border-2 border-red-600 text-[20px] ' > Next  </button>
  
  
             </div>

             :  

             <div className='w-[100%] h-[400px] pt-[80px] pl-[20px]  sm:hidden '>

             
                <select type="text" placeholder='District' className='w-[300px] h-12 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600' >
                  <option value=""> Select Your Destrict </option>
                  
                   </select>
                   
                <select type="text" placeholder='City' className='w-[300px] h-12 rounded-[10px] mb-8 border-solid border-2 border-red-600 '>
                  <option value=""> Select Your City </option>
                  </select> <br />
                
                <select type="text" placeholder='Blood Group' className='w-[300px] h-12 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600 '>
                   <option value=""> Select Your Blood Group </option>
                  </select> <br/>

                <label htmlFor="" className='ml-[50px] font-bold  ' > Doner ?  </label> <input type="Radio" />  <label htmlFor="" className='ml-[20px] font-bold'>Recepient ?  </label> <input type="Radio" />
  
               
  
                <button onClick={()=>{setmobNext(false)}} className='ml-[80px] w-[150px] h-10 rounded-lg mt-[50px] font-bold border-solid border-2 border-red-600 text-[20px] ' > Sign Up </button>
  
  
             </div>



              }

            
            












          </div>





        </div>



      </div>




    </div>
  )
}

export default Signup
