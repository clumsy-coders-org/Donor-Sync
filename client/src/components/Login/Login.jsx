import React from 'react'
import loginImg from '../../assets/young.jpg'
import logo from '../../assets/logo.png'

export default function Login() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
    <div className='grid grid-cols-1 sm:grid-cols-2 w-full max-w-[1200px] p-4 rounded-lg border-2 border-rose-400'>
      <div className='flex flex-col justify-center'>
        <form className='max-w-[400px] mx-auto p-8 px-8 rounded-lg'>
          <div>
            <img className='h-1/2 min-h-0 object-cover place-items-center ' src={logo} alt="" />
          </div>
          <h2 className='text-2xl dark:text-red-600 font-bold text-left'>Become a blood donor today!</h2>
          <div className='flex flex-col text-black-400 py-2'>
            <input
              type="text"
              placeholder='Username'
              className='dark:text-gray-600 font-thin rounded-lg mt-2 p-2 focus:border-red-500 focus:outline-none border-2 border-rose-400 '
            />
          </div>
          <div className='flex flex-col text-black-400 py-2'>
            <input
              type="password"
              placeholder='Password'
              className='dark:text-gray-600 font-thin rounded-lg mt-2 p-2 focus:border-red-500 focus:outline-none border-2 border-rose-400'
            />
          </div>
          <div className='flex justify-between text-gray-400 py-2'>
            <p className='flex items-center'><input className="mr-2" type="checkbox" />Remember Me</p>
            <p>Forgot Password</p>
          </div>
          <button className='w-full my-5 py-2 bg-red-600 rounded hover:shadow-black'>Login</button>
        </form>
      </div>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImg} alt="" />
      </div>
    </div>
  </div>
  )
}