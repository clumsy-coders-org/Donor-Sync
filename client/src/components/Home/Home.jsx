import React from 'react'
import home from "../../assets/home-page-image.jpg"
import donation from '../../assets/donation.jpg'
import blooddonation from '../../assets/blooddonation.jpg'
import blood from '../../assets/mobile-view-home-bg.jpeg'
import mobimg from "../../assets/bllod.jpg"
import { useNavigate } from "react-router-dom"
import { MdFeedback } from "react-icons/md";




function Home() {

  const navigate = useNavigate()




  return (
    <div>
      <div class="relative h-auto w-auto ">
        <div className='hidden sm:block'>
          <img className='w-full h-full' src={home} alt="Home page" />
        </div>
        <div className='md:hidden block'>
          <img className='md:hidden block w-auto h-screen ' src={mobimg} alt="" />
        </div>
        <div class="absolute top-[26rem] md:top-32 lg:top-55 px-5 py-2 w-full md:1/2 lg:w-3/4   ">


          <h1 class="text-black md:text-red-500 font-bold text-2xl md:text-4xl lg:text-5xl "> DONATE BLOOD !</h1>
          <p class="text-gray-950 text-lg md:text-2xl lg:text-3xl  py-4 font-semibold">
            A single "drop of your blood" could be a "drop of life" for someone else...
          </p>
          <p class="text-red-950 md:text-red-700 text-xl md:text-3xl lg:text-4xl pt-1 md:mt-10 font-semibold">"Donate Blood, Save Lives"</p>
          <button onClick={() => { navigate("/search") }} type="submit" class="focus:outline-none  text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-3xl text-lg md:text-lg lg:text-xl px-4 md:px-5  py-2 md:py-2.5 mt-4 md:mt-4 md:mb-2 ms-2 me-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">

            Find Blood

          </button>



        </div>

        <a href='https://wa.me/7592831937' >  <div className='w-[50px] h-[50px] bg-white rounded-full border-2 border-red-500  right-5 bottom-10 fixed flex justify-center items-center ' >


          < MdFeedback className='text-[20px]' />


        </div>

        </a>


      </div>
      <div>

      </div>
    </div>

  )
}

export default Home

