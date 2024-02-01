import React from 'react'
import logo from '../assets/logo-black.png'

function UserDetails() {
  return (
    <div className ="min-h-screen py-40" style={{backgroundImage:'linear-gradient(#F01F1F, #FFFAFA  )'}}>
    <div className='container mx-auto'>
     <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
       <div className="w-full lg:w-1/2 bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${logo})`}}>
       </div>
       <div className="w-full lg:w-1/2 py-16 px-6">
        <h2 className='text-3xl mb-4 text-center font-bold'>User Details</h2>
         <form action='#'>
          <div className='grid grid-cols-2 gap-5'>
            <input type="text" placeholder='User Name' className='border border-red-500 py-1 px-1 '/>
            <input type="number" placeholder='Age' className='border border-red-500 py-1 px-1 '/>
            <input type="email" placeholder='Email Id' className='border border-red-500 py-1 px-1 '/>
            <input type="number" placeholder='Mobile No' className='border border-red-500 py-1 px-1 '/>
            <input type="text" placeholder='Blood Group' className='border border-red-500 py-1 px-1 '/>
            <input type="text" placeholder='District' className='border border-red-500 py-1 px-1 '/>
          </div>
          <div className='mt-5'>
          <input type="text" placeholder='City' className='border border-red-500 py-1 px-1 w-full '/>
          </div>
          <div className='mt-5 px-8'>
             <input type='checkbox' className='border border-red-500 '/>
             <span className='px-2'>
              Donnor
             </span>
             <input type='checkbox' className='border border-red-500 '/>
             <span className='px-2'>
              Recipient
             </span>
          </div>
          <div className='mt-5 grid grid-cols-2 gap-5 '>
            <button className='bg-red-500 py-1 px-1 text-center text-white'>Edit</button>
            <button className='bg-red-500 py-1 px-1 text-center text-white'>Save</button>
          </div>
         </form>
       </div>
     </div>
    </div>
  </div>
  )
}

export default UserDetails
