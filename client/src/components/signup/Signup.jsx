
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

      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-yellow-300 ' >

        <div className='w-[500px] h-[600px] bg-green-300  flex  justify-center  items-center sm:w-[800px] sm:h-[500px] sm:border-solid sm:border-2 sm: border-red-600 sm:rounded-[60px]  '  >

          <div className='w-[400px] h-[300px] hidden sm:block' >

            <h1 className='text-center text-[30px] font-bold text-red-600' > Welcome  </h1>

            <img className='hidden sm:block w-[200px] h-[200px] mt-[50px] ml-[50px] ' src={signupimg} alt="" />




          </div>



          <div className='h-[100%] w-full'>


            <div className='w-[50%] h-[40px]  bg-white ml-8 mt-7 text-center'  >

              <h1 className='text-4xl font-bold text-red-600' > Sign Up </h1>

              <div className='w-[400px] ml-11 mt-3 h-9 flex justify-center items-center' >

              {

                errflag ? <> <IoWarning className='text-red-600 w-5 h-5' /> <span> {errmsg} </span> </>

                : null

              }  

              </div>

            </div>

            {
              mobNext ?

                <div className='w-[100%] h-[400px] pt-10 pl-[130px] mt-8 hidden sm:block '>



                  <input type="text" placeholder='Enter Your Full Name' className='w-[300px] h-10 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600'

                    onChange={(e) => { setinputValus({ ...inputValus, name: e.target.value }) }}

                  />  <br />

                  <input type="text" placeholder='Enter Your Age' className='w-[300px] h-10 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600'

                    onChange={(e) => { setinputValus({ ...inputValus, age: e.target.value }) }}

                  /><br />

                  <input type="text" placeholder='Enter Your Email Id' className='w-[300px] h-10 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600'

                    onChange={(e) => { setinputValus({ ...inputValus, email: e.target.value }) }}

                  /><br />

                  <input type="text" placeholder='Enter Your Password' className='w-[300px] h-10 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600'

                    onChange={(e) => { setinputValus({ ...inputValus, password: e.target.value }) }}

                  /><br />




                  <button onClick={() => { firstFormValid(inputValus,seterrmsg , seterrflag,setmobNext ) }} className='ml-[75px] w-[150px] h-10 rounded-lg mt-[10px] font-bold border-solid border-2 border-red-600 text-[20px] 
                                 
                                 hover:bg-red-600 hover:text-white' >

                    next </button>


                </div>

                :


                <div className='w-[100%] h-[400px] pt-10 pl-[130px] mt-8  hidden sm:block '>

                 
                  <select onChange={(e)=>{setinputValus({...inputValus,district:e.target.value})}} type="text" placeholder='Enter Your Password' className='w-[300px] h-10 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600'>
                    
                    <option value={null}> Select Your District </option>
                    <option value={"palakkad"}> Palakkad </option>
                    
                    </select> <br />

                    <select onChange={(e)=>{setinputValus({...inputValus,city:e.target.value})}}  type="text" placeholder='Enter Your Password' className='w-[300px] h-10 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600'>
                    
                    <option value={null}> Select Your City </option>
                    <option value={"pattambi"}> pattambi </option>
                    
                    </select> <br />


                    <select onChange={(e)=>{setinputValus({...inputValus,bloodgroup:e.target.value})}} type="text" placeholder='Enter Your Password' className='w-[300px] h-10 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600'>
                    
                    <option value={null}> Select Your Blood Group </option>
                    <option value="O+"> O+ </option>
                    
                    </select> <br />


                    <label htmlFor="" className='font-bold  ml-12' > Donar ?   </label> <input name='type' type="Radio" onChange={(e)=>{setinputValus({...inputValus,type:e.target.value})}}  /> 

                    <label htmlFor="" className='font-bold ml-5 ' > Resepient ?   </label> <input name='type' type="Radio" onChange={(e)=>{setinputValus({...inputValus,type:e.target.value})}} /> <br/>

                    <button onClick={() => { secondValidation (inputValus,seterrmsg , seterrflag,formSubmit) }}    className='ml-[75px] w-[150px] h-10 rounded-lg mt-[50px] font-bold border-solid border-2 border-red-600 text-[20px] 
                                  hover:bg-red-600 hover:text-white' >

                    Signup  </button>







                </div>


            }





            {/* mobile view */}

            {

              mobNext ?

                <div className='w-[300px] h-[400px] pt-[80px] pl-[20px] bg-red-600  sm:hidden '>


                  <input type="text" placeholder='Full Name' className='w-[300px] h-12 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600' />


                  <input type="text" placeholder='Age' className='w-[300px] h-12 rounded-[10px] mb-8 border-solid border-2 border-red-600 ' /> <br />

                  <input type="text" placeholder='Mobile Number' className='w-[300px] h-12 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600 ' />

                  <input type="text" placeholder='Email Id' className='w-[300px] h-12 rounded-[10px] mb-8 border-solid border-2 border-red-600  ' /><br />

                  <button onClick={() => { setmobNext(false) }} className='ml-[80px] w-[150px] h-10 rounded-lg font-bold border-solid border-2 border-red-600 text-[20px] ' > Next  </button>


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
                  </select> <br />

                  <label htmlFor="" className='ml-[50px] font-bold  ' > Doner ?  </label> <input type="Radio" />  <label htmlFor="" className='ml-[20px] font-bold'>Recepient ?  </label> <input type="Radio" />



                  <button onClick={() => { setmobNext(false) }} className='ml-[80px] w-[150px] h-10 rounded-lg mt-[50px] font-bold border-solid border-2 border-red-600 text-[20px] ' > Sign Up </button>


                </div>



            }















          </div>





        </div>



      </div>




    </div>
  )
}

export default Signup
