import React from 'react'
import home from "../assets/home-page-image.jpg"
import donation from '../assets/donation.jpg'
import blooddonation from '../assets/blooddonation.jpg'


function Home() {
  return (
    <div>
    <div class="h-auto w-auto relative">
      <img className='' src={home} alt="Home page" />
      <div class="absolute top-8 md:top-32 lg:top-55 px-5 py-2 w-3/4 md:1/2 lg:w-3/4   ">
      <h1 class=" text-red-500 font-bold text-lg md:text-4xl lg:text-5xl "> DONATE BLOOD !</h1>
      <p class="text-gray-900 text-sm md:text-2xl lg:text-3xl  py-4 font-semibold">
        A single "drop of your blood" could be a "drop of life" for someone else...
      </p>
      <p class="text-red-700 text-lg md:text-3xl lg:text-4xl pt-1 md:mt-10 font-semibold">"Donate Blood, Save Lives"</p>
      <button type="submit" class="focus:outline-none  text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-3xl text-xs md:text-lg lg:text-xl px-2 md:px-4  py-1.5 md:py-2.5 md:mt-2 md:mb-2 ms-2 me-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Search BloodBanks</button>
 
    </div>
    </div>
    <div>
    <div className='flex justify-center items-center min-h-screen'>
    <div className='grid grid-cols-1 sm:grid-cols-2 w-full max-w-[1200px] p-4 rounded-lg '>
      <div className='flex flex-col justify-center'>
        <img src={donation} alt="" />
      </div>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-contain' src={blooddonation} alt="" />
      </div>
    </div>
  </div>
    </div>
    </div>
  )
}

export default Home

