



import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

const FilterComponent = () => {

    const [arrya, setarrya] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


    return (
        <div>

            <div className='w-full h-[100px]  mt-10 sm:mt-24 flex flex-wrap justify-around ' >

                <select name="" id="" className='border-2 border-red-600 text-center  rounded-2xl   w-[150px] sm:w-[170px]  h-[40px] ' >
                    <option value="">  Blood Group </option>
                </select>


                <select name="" id="" className='border-2 border-red-600 text-center  rounded-2xl w-[150px] sm:w-[170px] h-[40px] ' >
                    <option value="">  Donor or Recepient </option>
                </select>


                <select name="" id="" className='border-2 border-red-600 rounded-2xl text-center w-[150px] mt-4 sm:mt-0   sm:w-[170px]  h-[40px] ' >
                    <option value="">  District </option>
                </select>

                <select name="" id="" className='border-2 border-red-600 rounded-2xl text-center w-[150px] mt-4 sm:mt-0  h-[40px] ' >
                    <option value="">  City </option>
                </select>

                <button className='w-[100px] h-[30px] bg-red-700 text-white flex justify-center mt-4 sm:mt-0  items-center rounded-xl'> <FaSearch /> </button>


            </div>


            <div className=' container mx-auto h-[600px]  bg-green-700 flex flex-wrap gap-5 justify-center pt-7  '>

                
                    {

                        arrya.map((obj) => (

                            <div className='w-[250px] h-[150px] bg-gray-500 rounded-3xl  '>


                            </div>

                        ))
                    }


              





            </div>



        </div>
    )
}

export default FilterComponent

