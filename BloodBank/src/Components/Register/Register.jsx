
import React from 'react'
// import signupimg from "../../assets/logo.png"
import signupimg from "../../assets/logo-navbar.png"
import { useState } from 'react'
import { CiWarning } from "react-icons/ci";
import { IoWarning } from "react-icons/io5";
import { firstFormValid, secondValidation } from "./Formvalid.js"
import { Navigate, useNavigate } from "react-router-dom"
import { Oval } from 'react-loader-spinner'
import axios from "../../Axios/constant.js"
import {message} from "antd"




function Signup() {

  const [mobNext, setmobNext] = useState(true);
  const [errmsg, seterrmsg] = useState("");
  const [errflag, seterrflag] = useState(false);
  const [spinner, setspinner] = useState(false);
  const [inputValus, setinputValus] = useState({

    name: "",
    age: "",
    mobile: "",
    regnumber: "",
    password: "",
    district: "",
    city: "",
  });

  // axios.defaults.withCredentials = true;

  const navigate = useNavigate();


  const formSubmit = (e) => {

    setspinner(true);
    console.log(inputValus);
    axios.post("/auth/signup",inputValus).then((respo)=>{

      if(respo.data.exist){

            message.error("This email already exists, try another one.")
     
          }else if(respo.data.flag){
            message.success("Account created")
            navigate("/login")

      }else{

           message.error("Server Error")
      }

        
  }).catch(err=>{

       message.error("Something wrong ! ")
       console.log(err)
       console.log("errrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
        
  })
    
  }







  return (

    <div>

      <div className='w-full h-screen   flex flex-wrap justify-center items-center' >

        <div className='w-[350px] h-[600px] bg-white flex justify-center items-center sm:w-[800px] sm:h-[550px] sm:border-solid sm:border-2  sm:border-red-600 sm:rounded-[50px]    '  >

          <div className='w-[400px] h-[300px] hidden sm:block' >

            <h1 className='text-center text-[30px] font-bold text-red-600' >  Welcome  </h1>

            <img className='hidden sm:block w-[200px] h-[200px] mt-[50px] ml-[50px] ' src={signupimg} alt="" />


          </div>




          <div className='h-[100%] w-full'>

            <img src={signupimg} className='w-[70px] h-[70px] ml-[130px] sm:hidden ' alt="" />

            <div className='w-[100%] h-[30px]  mt-5 text-center rounded-[100px] '  >

              <h1 className='text-3xl sm:text-4xl font-bold text-red-600' > Register as Blood Bank </h1>



            </div>


            {

              errflag ?

                <div className='flex mt-16 sm:mt-4 ml-[100px] sm:ml-[200px]' >    <IoWarning className='text-red-600 w-5 h-5' /> <span> {errmsg} </span> </div>

                : null


            }


            {
              mobNext ?

                <div className='w-[100%] h-[350px] pt-[32px] pl-[130px] hidden sm:block '>



                  <input type="text" placeholder='Enter Your Full Name' className='w-[300px] h-10 rounded-[10px] mb-4 mr-5 border-solid border-2 border-red-600'

                    onChange={(e) => { setinputValus({ ...inputValus, name: e.target.value }) }}

                  /><br />

                  <input type="text" placeholder='Enter Your Register Number' className='w-[300px] h-10 rounded-[10px] mb-4 border-solid border-2 border-red-600 '

                    onChange={(e) => { setinputValus({ ...inputValus, regnumber: e.target.value }) }}


                  /> <br />

                  <input type="text" placeholder='Enter Your Mobile Number' className='w-[300px] h-10 rounded-[10px] mb-4 mr-5 border-solid border-2 border-red-600 '

                    onChange={(e) => { setinputValus({ ...inputValus, mobile: e.target.value }) }}



                  /><br />

                  <input type="password" placeholder='Enter Your Password' className='w-[300px] h-10 rounded-[10px] mb-4 border-solid border-2 border-red-600  '

                    onChange={(e) => { setinputValus({ ...inputValus, password: e.target.value }) }}
                  /><br />

                    <select onChange={(e) => { setinputValus({ ...inputValus, district: e.target.value }) }} type="text" placeholder='District' className='w-[300px] h-10 rounded-[10px]    mb-4 mr-5 border-solid border-2 border-red-600 '>

                    <option value={null}> Select Your District </option>
                    <option value={"palakkad"}> Palakkad </option>


                    </select>   <br />

                    
                  <input type="text" placeholder='Enter Your City' className='w-[300px] h-10 rounded-[10px] mb-4 border-solid border-2 border-red-600  '

                  onChange={(e) => { setinputValus({ ...inputValus, city: e.target.value }) }}


                    /><br />


                  <button onClick={() => { firstFormValid(inputValus, seterrmsg, seterrflag, setmobNext, formSubmit) }} className='ml-[80px] w-[150px] h-10 rounded-lg mt-[10px] font-bold border-solid border-2 border-red-600 text-[20px] ' >
                    {
                      spinner ?

                        <div className='ml-[52px]' >

                          <Oval
                            visible={true}
                            height="30"
                            width="30"
                            color="#7D0A0A"
                            ariaLabel="oval-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                          />

                        </div>



                        :
                        <span> Sign Up </span>

                    }  </button><br />

                  <span className=' ml-[50px] mt-4 hidden sm:block   ' > Already have an Account ? <span className='text-blue-600  cursor-pointer' onClick={() => { navigate("/login") }} > Log in </span> </span> 


                </div>

                :

                <div className='w-[100%] h-[400px] pt-10 pl-[130px] hidden sm:block '>





                  

                 




                  







                </div>





            }




            {/* mobile view */}

            {

              mobNext ?

                <div className='w-[100%] h-[400px] pt-[50px] pl-[20px]  sm:hidden '>


                  <input type="text" placeholder='Enter Your Full Name' className='w-[300px] h-12 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600'

                    onChange={(e) => { setinputValus({ ...inputValus, name: e.target.value }) }}

                  />


                  <input type="text" placeholder='Enter Your Regsiter Number' className='w-[300px] h-12 rounded-[10px] mb-8 border-solid border-2 border-red-600 '

                    onChange={(e) => { setinputValus({ ...inputValus, regnumber: e.target.value }) }}


                  /> <br />

                  <input type="text" placeholder=' Enter Your Mobile Number ' className='w-[300px] h-12 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600 '

                    onChange={(e) => { setinputValus({ ...inputValus, mobile: e.target.value }) }}


                  />

                  <input type="password" placeholder='Enter Your Password' className='w-[300px] h-12 rounded-[10px] mb-8 border-solid border-2 border-red-600  '

                    onChange={(e) => { setinputValus({ ...inputValus, password: e.target.value }) }}


                  /><br />


                    <select onChange={(e) => { setinputValus({ ...inputValus, district: e.target.value }) }} type="text" placeholder='District' className='w-[300px] h-12 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600' >
                    <option value={null}> Select Your District </option>
                    <option value={"palakkad"}> Palakkad </option>

                  </select><br />

                  <input type="text" placeholder='Enter Your City' className='w-[300px] h-10 rounded-[10px] mb-8 border-solid border-2 border-red-600  '

                    onChange={(e) => { setinputValus({ ...inputValus, city: e.target.value }) }}


                  /><br />

                  <button onClick={() => { firstFormValid(inputValus, seterrmsg, seterrflag, setmobNext, formSubmit)}} className='ml-[80px] w-[150px] h-10 rounded-lg font-bold border-solid border-2 border-red-600 text-[20px] ' > {
                      spinner ?

                        <div className='ml-[52px]' >

                          <Oval
                            visible={true}
                            height="30"
                            width="30"
                            color="#7D0A0A"
                            ariaLabel="oval-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                          />

                        </div>



                        :
                        <span> Sign Up </span>

                    }   </button><br/>
                    <br/>

                  {/* <span className=' ml-[200px]px] mt-4   ' > Already a Account ? <span className='text-blue-600 font-bold cursor-pointer' onClick={() => { navigate("/login") }} > Log in </span> </span>  */}

                  <span className='ml-8 ' > Already have an Account ? <span className='text-blue-700 cursor-pointer ' onClick={() => { navigate("/login") }}> Login </span> </span>

                </div>

                :

                <div className='w-[100%] h-[400px] pt-[80px] pl-[20px]  sm:hidden '>


                  



                  
                  

                 

                 

                  

                </div>



            }




          </div>





        </div>



      </div>




    </div>

  )
}

export default Signup