



import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ReactPaginate from "react-paginate"
import "./styile.css"

const FilterComponent = () => {

    const [arrya, setarrya] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [show,setshow]=useState(true)
    const [spinner,setspinner]=useState(true)
    // const [donoe,setdonor]=useState(true)
    const [donor,setdonor]=useState(true)


  // pagination code start

    const [pageNumber, setPageNumber] = useState(0);

    const userPrePage = 10;
    const pageVisited = pageNumber * userPrePage;

    const pageCount = Math.ceil(arrya.length / userPrePage);

    const changePage = ({ selected }) => {

        setPageNumber(selected);

    }

    const displyaData = arrya.slice(pageVisited, pageVisited + userPrePage)
        .map((obj, index) =>

        (

            donor ?


            <div className='w-[250px] h-[160px] rounded-3xl bg-gray-300 shadow-xl pl-8    '  >

                <div className='flex'  > < BsFillPersonFill className='text-blue-800 text-[18px] mr-3  ' /> <span> krishna kumar </span>  </div>

                <div className='flex mt-2'  > <  FaPhone className='text-blue-800 text-[18px] mr-3  ' />    <span> 7592831937 </span>  </div>


                <div className='flex mt-2'  > <span className='text-blue-800 mr-3 '  > Blood Group :  </span>   <span> O+ </span>  </div>

               <div className='flex mt-2'  > < MdEmail className='text-blue-800 text-[18px] mr-3 ' />    <span> sarath@gmail.com </span>  </div>

               <div className='flex mt-2'  > <span className='text-blue-800 mr-3 '  > Unit :  </span>   <span> 4 </span>  </div>

               
               </div>






            :





            <div className='w-[250px] h-[150px] rounded-3xl bg-gray-300 shadow-xl pl-8 pt-6   '  >

                <div className='flex'  > < BsFillPersonFill className='text-blue-800 text-[18px] mr-3  ' /> <span> krishna kumar </span>  </div>

                <div className='flex mt-2'  > <  FaPhone className='text-blue-800 text-[18px] mr-3  ' />    <span> 7592831937 </span>  </div>


                <div className='flex mt-2'  > <span className='text-blue-800 mr-3 '  > Blood Group :  </span>   <span> O+ </span>  </div>

                <div className='flex mt-2'  > < MdEmail className='text-blue-800 text-[18px] mr-3 ' />    <span> sarath@gmail.com </span>  </div>

               </div>



        ))

         // pagination code end



         const formsubmit=()=>{

                 setshow(false)

                 setTimeout(()=>{

                    setspinner(false)

                 },3000)
         }










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

                <button onClick={formsubmit}  className='w-[150px] h-[40px] bg-red-700 text-white flex justify-center mt-4 sm:mt-0  items-center rounded-xl'> <FaSearch /> </button>


            </div>


            <div className=' w-full  min-h-[400px] mt-24  sm:mt-0 flex flex-wrap gap-5 justify-center ' >

                {

                    show ?
                    
                    <div className='w-full h-[400px] pl-8  flex justify-center items-center' >

                        <h1 className='font-bold text-[25px]' > Find Your Donor or Blood Bank </h1>


                    </div>
                    

                    :

                   spinner ?

                   <div className='w-full h-[400px] pl-8  flex justify-center items-center' >

                   <h1 className='font-bold text-[25px]' > spinner </h1>


               </div>

               :

                   

                    displyaData
               
               
               
               }




            </div>

            <div className='mt-8 sm:mt-0  mb-10 flex justify-center ' >

                {

                     show ?

                     null

                     :


                     spinner ?

                     null

                     :

                     <ReactPaginate

                     previousLabel={"previous"}
 
                     nextLabel={"next"}
 
                     pageCount={pageCount}
 
                     onPageChange={changePage}
 
                     containerClassName={"paginationBttns"}
                     pageLinkClassName={"previousBttn"}
                     nextLinkClassName={"nextBttn"}
                     disabledClassName={"paginationDisabled"}
                     activeClassName={"paginationActive"}
                 />
 


                }


               



            </div>










        </div>
    )
}

export default FilterComponent

