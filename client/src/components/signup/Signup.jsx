
import React from 'react'
import signupimg from "../../assets/logo-final-1.png"
import { useState } from 'react'
import { CiWarning } from "react-icons/ci";
import { IoWarning } from "react-icons/io5";
import { firstFormValid ,secondValidation} from "./Formvalid"


function Signup() {

  const [mobNext, setmobNext] = useState(true)
  const [errmsg, seterrmsg] = useState("")
  const [errflag,seterrflag]=useState(false)
  const [inputValus, setinputValus] = useState({

    name: "",
    age: "",
    mobile: "",
    email: "",
    password: "",
    district: "",
    city: "",
    bloodgroup: "",
    type:""
  })


  const formSubmit=()=>{

     alert("signup ok")
  }







  return (

    <div>

      <div className='w-full h-screen   flex flex-wrap justify-center items-center' >

        <div className='w-[350px] h-[600px] bg-white flex justify-center items-center sm:w-[800px] sm:h-[550px] sm:border-solid sm:border-2  sm:border-red-600 sm:rounded-[50px]    '  >

         <div className='w-[400px] h-[300px] hidden sm:block' >

          <h1 className='text-center text-[30px] font-bold text-red-600' > Welcome  </h1>

         <img className='hidden sm:block w-[200px] h-[200px] mt-[50px] ml-[50px] ' src={signupimg} alt="" />


         </div>

         


          <div className='h-[100%] w-full'>
 
          <img src={signupimg} className='w-[70px] h-[70px] ml-[130px] sm:hidden ' alt="" />
           
            <div className='w-[100%] h-[30px]  mt-5 text-center rounded-[100px] '  >

              <h1 className='text-4xl font-bold text-red-600' > Sign Up </h1>

             

            </div>

            <p className='text-center mt-10' > Enter Your Full Name </p>

            {
              mobNext ?

              <div className='w-[100%] h-[350px] pt-[50px] pl-[130px] hidden sm:block '>



              <input type="text" placeholder='Full Name' className='w-[300px] h-10 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600' /><br/>

              <input type="text" placeholder='Age' className='w-[300px] h-10 rounded-[10px] mb-8 border-solid border-2 border-red-600 ' /> <br />

              <input type="text" placeholder='Mobile Number' className='w-[300px] h-10 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600 ' /><br/>

              <input type="text" placeholder='Email Id' className='w-[300px] h-10 rounded-[10px] mb-8 border-solid border-2 border-red-600  ' /><br />
           
              <button onClick={()=>{setmobNext(false)}}  className='ml-[80px] w-[150px] h-10 rounded-lg mt-[10px] font-bold border-solid border-2 border-red-600 text-[20px] ' > Next </button>             
 

            </div>

            :

            <div className='w-[100%] h-[400px] pt-10 pl-[130px] hidden sm:block '>



            

            <input type="text" placeholder='District' className='w-[300px] h-10 rounded-[10px]    mb-8 mr-5 border-solid border-2 border-red-600 ' /><br/>

            <input type="text" placeholder='City' className='w-[300px] h-10 rounded-[10px]  mb-8 border-solid border-2 border-red-600 ' /> <br />

            <input type="text" placeholder='Bllod Group' className='w-[300px]   h-10 rounded-[10px] mb-8 border-solid border-2 border-red-600 ' /><br/>

            <label htmlFor="" className='ml-[50px] font-bold  ' > Doner ?  </label> <input type="Radio" />  <label htmlFor="" className='ml-[20px] font-bold'>Recepient ?  </label> <input type="Radio" />


           <button  className='ml-[80px] w-[150px] h-10 rounded-lg mt-[50px] font-bold border-solid border-2 border-red-600 text-[20px] ' >  Signup </button>             


          </div>





            }

           


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
