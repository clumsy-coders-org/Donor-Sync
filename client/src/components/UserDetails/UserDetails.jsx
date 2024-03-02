import React from 'react'
import logo from '../../assets/logo.png'
import validation from './validation'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { UserdataContext } from "../../contextapi/accountdata"

function UserDetails() {


  const { accdata } = useContext(UserdataContext)
  const [checkbox, setcheckbox] = useState(false)

  const [values, setValues] = useState({
    name: '',
    age: '',
    email: '',
    mobile: '',
    bloodgroup: '',
    district: '',
    city: '',
    type: ''
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {

   

    if (accdata.type === "Donor") {

      setcheckbox(true)

    }


    setValues((obj) => ({


      name: accdata.name,
      age: accdata.age,
      bloodgroup: accdata.bloodgroup,
      city: accdata.city,
      district: accdata.district,
      email: accdata.email,
      mobile: accdata.mobile,
      type: accdata.type

    }))



  }, [])


  function handleInput(event) {

    console.log(event.target.value)

    const newObj = { ...values, [event.target.name]: event.target.value }
    setValues(newObj)
  }

  function handleValidation(event) {



    setErrors(validation(values));



  }



  return (

    <div className="min-h-screen py-12 " style={{ backgroundImage: 'linear-gradient(#F01F1F, #FFFAFA  )' }}>
      <div className='container mx-auto'>
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${logo})` }}>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-2">
            <h2 className='text-3xl mb-8 text-center font-bold'>Account Details</h2>


            <form>

              <div className='flex flex-wrap gap-5 justify-center'>

                <div>

                  <input type="text" placeholder='User Name' name='name' value={values.name}
                    className='border  border-red-500 py-1 px-1 rounded-xl' onChange={handleInput} />
                  {errors.name && <p className='text-red-500'>{errors.name}</p>}
                </div>

                <div>
                  <input type="number" placeholder='Age' name='age' value={values.age}
                    className='  border border-red-500 py-1 px-1 rounded-xl' onChange={handleInput} />
                  {errors.age && <p className='text-red-500'>{errors.age}</p>}
                </div>

                <div>
                  <input type="email" placeholder='Email Id' name='email' value={values.email}
                    className='border border-red-500 py-1 px-1 rounded-xl' onChange={handleInput} />
                  {errors.email && <p className='text-red-500'>{errors.email}</p>}
                </div>

                <div>
                  <input type="number" placeholder='Mobile No' name='mobile' value={values.mobile}
                    className='border border-red-500 py-1 px-1 rounded-xl' onChange={handleInput} />
                  {errors.mobile && <p className='text-red-500'>{errors.mobile}</p>}
                </div>

                <div>
                  <input type="text" placeholder='Blood Group' name='bloodgroup' value={values.bloodgroup}
                    className='border border-red-500 py-1 px-1 rounded-xl' onChange={handleInput} />
                  {errors.bloodgroup && <p className='text-red-500'>{errors.bloodgroup}</p>}
                </div>

                <div>
                  <input type="text" placeholder='District' name='district' value={values.district}
                    className='border border-red-500 py-1 px-1 rounded-xl' onChange={handleInput} />
                  {errors.district && <p className='text-red-500'>{errors.district}</p>}
                </div>
              </div>

              <div className='mt-5'>
                <input type="text" placeholder='City' name='city' value={values.city}
                  className='border border-red-500 py-1 px-1 w-full rounded-xl' onChange={handleInput} />
                {errors.city && <p className='text-red-500'>{errors.city}</p>}
              </div>

              <div className='mt-5  px-8'>

                {

                  checkbox ?

                    <>

                      <label htmlFor="" className='ml-[20px] sm:ml-[100px] mr-2 font-bold '    > Doner </label>

                      <input name='type' type="Radio" checked value={"Doner"} onChange={handleInput} />

                      <label htmlFor="" className='ml-[20px] sm:ml-[100px] mr-2 font-bold ' > Recepient </label>

                      <input name='type' type="Radio" value={"Recepient"} onChange={handleInput} />

                   
                   
                    </>



                    :

                    <>

                      <label htmlFor="" className='ml-[20px] sm:ml-[100px] mr-2 font-bold '    > Doner </label>

                      <input name='type' type="Radio" value={"Doner"} onChange={handleInput} />

                      <label htmlFor="" className='ml-[20px] sm:ml-[100px] mr-2 font-bold ' > Recepient </label>

                      <input name='type'  type="Radio" value={"Recepient"} onChange={handleInput} />

                    </>

                }


              </div>


            </form>

            <div className='mt-5 grid grid-cols-2 gap-6 '>

              <button onClick={ handleValidation } className='bg-red-500 py-1 px-1 text-center text-white font-bold rounded-full hover:bg-red-600'>Save</button>

              <button onClick={() => { console.log("hiii") }} className='bg-red-500 py-1 px-1 text-center text-white font-bold rounded-full hover:bg-red-600'>Log Out</button>

            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default UserDetails
