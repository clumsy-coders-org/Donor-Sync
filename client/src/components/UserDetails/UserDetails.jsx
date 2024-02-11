import React from 'react'
import logo from '../../assets/logo.png'
import validation from './validation'
import { useState } from 'react'

function UserDetails() {

    const [values, setValues] = useState({
        name: '',
        age: '',
        email: '',
        mobile: '',
        bloodgroup: '',
        district: '',
        city: '' 
    })

    const [errors, setErrors] = useState({})

    function handleInput(event){
     const newObj = {...values, [event.target.name]: event.target.value}
     setValues(newObj)
    }

     function handleValidation(event){
       event.preventDefault();
       setErrors(validation(values));
     }



  return (
    
     <div className ="min-h-screen py-12 " style={{backgroundImage:'linear-gradient(#F01F1F, #FFFAFA  )'}}>
      <div className='container mx-auto'>
       <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
         <div className="w-full lg:w-1/2 bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${logo})`}}>
         </div>
         <div className="w-full lg:w-1/2 py-16 px-2">
          <h2 className='text-3xl mb-4 text-center font-bold'>User Details</h2>
           <form action='#' onSubmit={handleValidation}>
            <div className='grid grid-cols-2 gap-6'>
              <div>
              <input type="text" placeholder='User Name' name='name' 
              className='border border-red-500 py-1 px-1 rounded-full'onChange={handleInput}/>
              {errors.name && <p className='text-red-500'>{errors.name}</p>}
              </div>
              <div>
              <input type="number"   placeholder='Age' name='age' 
              className='border border-red-500 py-1 px-1 rounded-full'onChange={handleInput}/>
              {errors.age && <p className='text-red-500'>{errors.age}</p>}
              </div>
              <div>
              <input type="email" placeholder='Email Id' name='email' 
              className='border border-red-500 py-1 px-1 rounded-full'onChange={handleInput}/>
              {errors.email && <p className='text-red-500'>{errors.email}</p>}
              </div>
              <div>
              <input type="number" placeholder='Mobile No' name='mobile' 
              className='border border-red-500 py-1 px-1 rounded-full'onChange={handleInput}/>
              {errors.mobile && <p className='text-red-500'>{errors.mobile}</p>}
              </div>
              <div>
              <input type="text" placeholder='Blood Group' name='bloodgroup' 
              className='border border-red-500 py-1 px-1 rounded-full'onChange={handleInput}/>
              {errors.bloodgroup && <p className='text-red-500'>{errors.bloodgroup}</p>}
              </div>
              <div>
              <input type="text" placeholder='District' name='district' 
              className='border border-red-500 py-1 px-1 rounded-full'onChange={handleInput}/>
              {errors.district && <p className='text-red-500'>{errors.district}</p>}
              </div>
            </div>
            <div className='mt-5'>
            <input type="text" placeholder='City' name='city' 
            className='border border-red-500 py-1 px-1 w-full rounded-full'onChange={handleInput}/>
            {errors.city && <p className='text-red-500'>{errors.city}</p>}
            </div>
            <div className='mt-5 px-8'>
               <label htmlFor="" className='ml-[50px] font-bold  ' > Doner </label> <input name='type' type="Radio" onChange={(e) => { setValues({ ...values, type: e.target.value }) }} />  <label htmlFor="" className='ml-[20px] font-bold'>Recepient</label> <input name='type' type="Radio" onChange={(e) => { setValues({ ...values, type: e.target.value }) }} /> 
            </div>

            <div className='mt-5 grid grid-cols-2 gap-6 '>
              <button className='bg-red-500 py-1 px-1 text-center text-white font-bold rounded-full hover:bg-red-600'>Save</button>
              <button className='bg-red-500 py-1 px-1 text-center text-white font-bold rounded-full hover:bg-red-600'>Log Out</button>
            </div>
           </form>
         </div>
       </div>
      </div>
    </div>
  )
}

export default UserDetails
