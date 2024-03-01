



import React from 'react'
// import signupimg from "../../assets/logo.png"
import signupimg from "../../Assets/logo.png"
import { useState } from 'react'
import { CiWarning } from "react-icons/ci";
import { IoWarning } from "react-icons/io5";
import { firstFormValid, secondValidation } from "./Formvalid"
import { useNavigate } from "react-router-dom"
import { Oval } from 'react-loader-spinner'
import axios from "../../Axios/constant"
import { message } from "antd"
import Nave from '../navebar/Nave';




function Signup() {

  const [mobNext, setmobNext] = useState(true);
  const [errmsg, seterrmsg] = useState("");
  const [errflag, seterrflag] = useState(false);
  const [spinner, setspinner] = useState(false);
  const [district, setdistrict] = useState([

    "Malappuram", "Alappuzha", "Palakkad", "Thiruvananthapuram", "Kannur", "Ernakulam", "Idukki", "Kottayam", "Kozhikode", "Thrissur", "Wayanad", "Kasaragod", "Pathanamthitta", "Kollam"
  ])
  const [inputValus, setinputValus] = useState({

    name: "",
    mobile: "",
    regnumber: "",
    password: "",
    district: "",
    city: "",

  });

  axios.defaults.withCredentials = true;

  const navigate = useNavigate();


  const formSubmit = (e) => {



    setspinner(true);
    console.log(inputValus);
    axios.post("/bloodbank/signup", inputValus).then((respo) => {

      if (respo.data.exist) {

        message.error("This email already exists, try another one.")

      } else if (respo.data.flag) {

        navigate("/login")

      } else {

        message.error("Server Error")
      }


    }).catch(err => {

      message.error("Something wrong ! ")
      console.log(err)


    })





  }







  return (

    <div>

      <Nave />

      <div className='w-full h-screen   flex flex-wrap justify-center items-center' >

        <div className='w-[350px] h-[600px] bg-white flex justify-center items-center sm:w-[800px] sm:h-[550px] sm:border-solid sm:border-2  sm:border-red-600 sm:rounded-[50px]    '  >

          <div className='w-[400px] h-[300px] hidden sm:block' >

            <h1 className='text-center text-[30px] font-bold text-red-600' >  Welcome  </h1>

            <img className='hidden sm:block w-[200px] h-[200px] mt-[50px] ml-[50px] ' src={signupimg} alt="" />


          </div>




          <div className='h-[100%] w-full'>

            <img src={signupimg} className='w-[70px] h-[70px] ml-[130px] sm:hidden ' alt="" />

            <div className='w-[100%] h-[30px]  mt-5 text-center rounded-[100px] '  >

              <h1 className='text-4xl font-bold text-red-600' > Sign Up </h1>



            </div>


            {

              errflag ?

                <div className='flex mt-10 ml-[100px] sm:ml-[200px]' >    <IoWarning className='text-red-600 w-5 h-5' /> <span> {errmsg} </span> </div>

                : null


            }


            {
              mobNext ?

                <div className='w-[100%] h-[350px] pt-[50px] pl-[130px] hidden sm:block '>



                  <input type="text" placeholder=' Blood Bank Name' className='w-[300px] h-10 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600'

                    onChange={(e) => { setinputValus({ ...inputValus, name: e.target.value }) }}

                  /><br />

                  <input type="text" placeholder='Register Number' className='w-[300px] h-10 rounded-[10px] mb-8 border-solid border-2 border-red-600 '

                    onChange={(e) => { setinputValus({ ...inputValus, regnumber: e.target.value }) }}


                  /> <br />

                  <input type="text" placeholder=' Contact Number' className='w-[300px] h-10 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600 '

                    onChange={(e) => { setinputValus({ ...inputValus, mobile: e.target.value }) }}



                  /><br />

                  <input type="password" placeholder=' Your Password' className='w-[300px] h-10 rounded-[10px] mb-8 border-solid border-2 border-red-600  '

                    onChange={(e) => { setinputValus({ ...inputValus, password: e.target.value }) }}
                  /><br />

                  <button onClick={() => { firstFormValid(inputValus, seterrmsg, seterrflag, setmobNext) }} className='ml-[80px] w-[150px] h-10 rounded-lg mt-[10px] font-bold border-solid border-2 border-red-600 text-[20px] ' > Next </button><br />

                  <span className=' ml-[50px] mt-4 hidden sm:block   ' > Already have an Account ? <span className='text-blue-600  cursor-pointer' onClick={() => { navigate("/login") }} > Log in </span> </span>


                </div>

                :

                <div className='w-[100%] h-[300px]   pt-32 pl-[130px] hidden sm:block '>





                  <select onChange={(e) => { setinputValus({ ...inputValus, district: e.target.value }) }} type="text" placeholder='District' className='w-[300px] h-10 rounded-[10px]    mb-8 mr-5 border-solid border-2 border-red-600 '>

                    <option value={null}> Select Your District </option>
                    {
                      district.map((obj) => (

                        <option value={obj}> {obj} </option>


                      ))
                    }

                  </select>   <br />

                  <input type="text" placeholder='Enter Your City' className='w-[300px] h-10 rounded-[10px] mb-8 border-solid border-2 border-red-600  '

                    onChange={(e) => { setinputValus({ ...inputValus, city: e.target.value }) }}


                  /><br />



                  {/* <select onChange={(e)=>{setinputValus({ ...inputValus, bloodgroup: e.target.value })}} type="text" placeholder='Bllod Group' className='w-[300px]   h-10 rounded-[10px] mb-8 border-solid border-2 border-red-600 '>

                    <option value={null}> Select Your Blood Group </option>
                    <option value="O+"> O+ </option>

                  </select> <br />

                  <input type="text" placeholder='Enter Your age' className='w-[300px] h-10 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600 '

                    onChange={(e) => { setinputValus({ ...inputValus, age: e.target.value }) }}



                  /><br /> */}







                  {/* <label htmlFor="" className='ml-[50px] font-bold  ' > Donor ?  </label> <input name='type' type="Radio" value={"Donor"} onChange={(e) => { setinputValus({ ...inputValus, type: e.target.value }) }} />  <label htmlFor="" className='ml-[20px] font-bold'>Recipient ?  </label> <input name='type' type="Radio" value={"Recipient"} onChange={(e) => { setinputValus({ ...inputValus, type: e.target.value }) }} />


                  <label htmlFor="" className='ml-[50px] font-bold  ' > Donor ?  </label> <input name='type' value={"donor"} type="Radio" onChange={(e) => { setinputValus({ ...inputValus, type: e.target.value }) }} />  <label htmlFor="" className='ml-[20px] font-bold'>Recipient ?  </label> <input name='type' value={"recipient"} type="Radio" onChange={(e) => { setinputValus({ ...inputValus, type: e.target.value }) }} />

 */}


                  <button onClick={() => { secondValidation(inputValus, seterrmsg, seterrflag, formSubmit) }} className='ml-[80px] w-[150px] h-10 rounded-lg mt-[30px] font-bold border-solid border-2 border-red-600 text-[20px] ' >

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

                    }





                  </button>







                </div>





            }






            {

              mobNext ?

                <div className='w-[100%] h-[400px] pt-[80px] pl-[20px]  sm:hidden '>


                  <input type="text" placeholder='Enter Your Full Name' className='w-[300px] h-12 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600'

                    onChange={(e) => { setinputValus({ ...inputValus, name: e.target.value }) }}

                  />


                  <input type="text" placeholder='Enter Your Email Id' className='w-[300px] h-12 rounded-[10px] mb-8 border-solid border-2 border-red-600 '

                    onChange={(e) => { setinputValus({ ...inputValus, email: e.target.value }) }}


                  /> <br />

                  <input type="text" placeholder=' Enter Your Mobile Number ' className='w-[300px] h-12 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600 '

                    onChange={(e) => { setinputValus({ ...inputValus, mobile: e.target.value }) }}


                  />

                  <input type="password" placeholder='Enter Your Password' className='w-[300px] h-12 rounded-[10px] mb-8 border-solid border-2 border-red-600  '

                    onChange={(e) => { setinputValus({ ...inputValus, password: e.target.value }) }}


                  /><br />

                  <button onClick={() => { firstFormValid(inputValus, seterrmsg, seterrflag, setmobNext) }} className='ml-[80px] w-[150px] h-10 rounded-lg font-bold border-solid border-2 border-red-600 text-[20px] ' > Next  </button><br />

                  {/* <span className=' ml-[200px]px] mt-4   ' > Already a Account ? <span className='text-blue-600 font-bold cursor-pointer' onClick={() => { navigate("/login") }} > Log in </span> </span>  */}

                  <span className='ml-16' > Already have an Account ? <span className='text-blue-700 cursor-pointer ' > Login </span> </span>

                </div>

                :

                <div className='w-[100%] h-[400px] pt-[80px] pl-[20px]  sm:hidden '>


                  <select type="text" placeholder='District' className='w-[300px] h-12 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600' >
                    <option value=""> Select Your District </option>

                  </select><br />

                  <input type="text" placeholder='Enter Your City' className='w-[300px] h-10 rounded-[10px] mb-8 border-solid border-2 border-red-600  '

                    onChange={(e) => { setinputValus({ ...inputValus, city: e.target.value }) }}


                  /><br />



                  <select type="text" placeholder='Blood Group' className='w-[300px] h-12 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600 '>
                    <option value=""> Select Your Blood Group </option>

                  </select> <br />

                  <input type="text" placeholder='Enter Your age' className='w-[300px] h-10 rounded-[10px] mb-8 mr-5 border-solid border-2 border-red-600 '

                    onChange={(e) => { setinputValus({ ...inputValus, age: e.target.value }) }}



                  /><br />

                  <label htmlFor="" className='ml-[50px] font-bold  ' > Donor ?  </label> <input type="Radio" value={"Donor"} onChange={(e) => { setinputValus({ ...inputValus, type: e.target.value }) }} />  <label htmlFor="" className='ml-[20px] font-bold'>Recipient ?  </label> <input type="Radio" value={"Recipient"} onChange={(e) => { setinputValus({ ...inputValus, type: e.target.value }) }} />



                  <button onClick={() => { secondValidation(inputValus, seterrmsg, seterrflag, formSubmit) }} className='ml-[80px] w-[150px] h-10 rounded-lg mt-[50px] font-bold border-solid border-2 border-red-600 text-[20px] ' >

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

                    }




                  </button>


                </div>



            }















          </div>





        </div>



      </div>




    </div>

  )
}

export default Signup
