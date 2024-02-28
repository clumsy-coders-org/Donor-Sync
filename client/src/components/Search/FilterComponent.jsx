



import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ReactPaginate from "react-paginate"
import "./styile.css"
import { message } from 'antd';
import axios from "../../axios/instance"
import imgs from "../../assets/nodata.png"
import { Oval } from 'react-loader-spinner'



const FilterComponent = () => {

    const [arrya, setarrya] = useState([]) // result show arrya
    const [show, setshow] = useState(true)
    const [emptyshow, setemptyshow] = useState(false)
    const [donor, setdonor] = useState(true)
    const [district, setdistrict] = useState([ // district show arrya 

        "Malappuram", "Alappuzha", "Palakkad", "Thiruvananthapuram", "Kannur", "Ernakulam", "Idukki", "Kottayam", "Kozhikode", "Thrissur", "Wayanad", "Kasaragod", "Pathanamthitta", "Kollam"
    ])
    const [values, setvalues] = useState({

        bloodgroup: "",
        type: ""
    })
    const [city, setcity] = useState(true)
    const [cityspinner, setcityspinner] = useState(true)
    const [citydata, setcitydata] = useState([])
    const [filter, setfilter] = useState('')
    const [find, setfind] = useState([])




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


                <div className='w-[250px] h-[160px] rounded-3xl bg-gray-300 shadow-xl pl-8 pt-5    '  >


                    <div className='flex'  > < BsFillPersonFill className=' text-[18px] mr-3  ' /> <span> {obj.name} </span>  </div>

                    <div className='flex mt-2'  > <  FaPhone className=' text-[18px] mr-3  ' />    <span> {obj.mobile} </span>  </div>


                    <div className='flex mt-2'  > <span className=' mr-3 '  > Blood Group :  </span>   <span> {obj.bloodgroup}</span>  </div>


                </div>






                :





                <div className='w-[250px] h-[150px] rounded-3xl bg-gray-300 shadow-xl pl-8 pt-6   '  >

                    <div className='flex'  > < BsFillPersonFill className='text-blue-800 text-[18px] mr-3  ' /> <span> {obj.name} </span>  </div>

                    <div className='flex mt-2'  > <  FaPhone className='text-blue-800 text-[18px] mr-3  ' />    <span> {obj.mobile} </span>  </div>


                    <div className='flex mt-2'  > <span className='text-blue-800 mr-3 '  > Blood Group :  </span>   <span> {obj.bloodgroup} </span>  </div>

                    <div className='flex mt-2'  > < MdEmail className='text-blue-800 text-[18px] mr-3 ' />    <span> sarath@gmail.com </span>  </div>

                </div>



        ))

    // pagination code end



    const formsubmit = () => {  // search button press time find result filiter on city base    

        setshow(false)
        setemptyshow(false)


        const result = find.filter((obj) => obj.city === filter)

        setarrya(result)


    }


    const findresult = (district) => {  // this func use to users district select time find data in database




        if (!values.bloodgroup) {

            message.error("select blood group")

        } else if (!values.type) {

            message.error("select type")

        } else {

            if (values.type === "BloodBank") {  // user select blood bank. this func find data in database

                setdonor(false)

                axios(`/search/blood/${values.bloodgroup}/${values.type}/${district}`).then((respo) => {

                    if (respo.data.empty) {

                        console.log("empty")



                    } else if (respo.data.flag) {

                        const result = respo.data.data;

                        setarrya(prevArrya => {
                            // Map over the result array and return an updated array
                            return result.map(obj => {
                                const blooddata = obj.blooddata;
                                const bloodshow = blooddata.find(res => res.bloodgroup === values.bloodgroup);

                                return {
                                    name: obj.name,
                                    mobile: obj.mobile,
                                    city: obj.city,
                                    bloodgroup: bloodshow ? bloodshow.bloodgroup : "",
                                    unit: bloodshow ? bloodshow.quantity : "",
                                    status: bloodshow ? bloodshow.status : ""
                                };
                            });
                        });




                        setshow(false)
                        console.log(result)




                    } else if (respo.data.err) {

                        console.log("server err")


                    }

                }).catch(err => {

                    console.log("net err")

                })




            } else {




                setcity(false)

                axios(`/search/blood/${values.bloodgroup}/${values.type}/${district}`).then((respo) => {

                    if (respo.data.empty) {

                        console.log("empty")
                        setshow(false)
                        setemptyshow(true)
                        setcity(true)


                    } else if (respo.data.flag) {

                        const result = respo.data.data
                        setfind(result)


                        result.forEach((obj) => {

                            setcitydata([...citydata, obj.city])
                        })

                        setcityspinner(false)


                    } else if (respo.data.err) {

                        console.log("server err")
                        setcity(true)
                        message.error("server error")

                    }

                }).catch(err => {

                    console.log("net err")
                    setcity(true)
                    message.error("somthing worng")

                })

            }


        }


    }






    return (
        <div>

            <div className='w-full h-[100px]  mt-10 sm:mt-24 flex flex-wrap justify-around ' >

                <select name="" id="" onChange={(e) => { setvalues({ ...values, bloodgroup: e.target.value }) }} className='border-2 border-red-600 text-center  rounded-2xl   w-[150px] sm:w-[170px]  h-[40px] ' >

                    <option value="">  Blood Group </option>
                    <option value="A+"> A+</option>
                    <option value="A-"> A-</option>
                    <option value="B+"> B+</option>
                    <option value="B-"> B-</option>
                    <option value="O+"> O+</option>
                    <option value="O-"> O-</option>
                    <option value="AB+"> AB+</option>
                    <option value="AB-"> AB-</option>

                </select>


                <select name="" id="" onChange={(e) => { setvalues({ ...values, type: e.target.value }) }} className='border-2 border-red-600 text-center  rounded-2xl w-[150px] sm:w-[170px] h-[40px] ' >


                    <option value=""> Select Type</option>
                    <option value="Donor"> Donor</option>
                    <option value="BloodBank"> Blood Bank </option>



                </select>


                <select name="" id="" onChange={(e) => { findresult(e.target.value) }} className='border-2 border-red-600 rounded-2xl text-center w-[150px] mt-4 sm:mt-0   sm:w-[170px]  h-[40px] ' >
                    <option value="">  District </option>

                    {
                        district.map((obj) => (

                            <option value={obj}>  {obj} </option>

                        ))
                    }

                </select>


                {

                    city ?

                        null

                        :

                        cityspinner ?


                            <Oval
                                visible={true}
                                height="40"
                                width="40"
                                color="#A94438"
                                ariaLabel="oval-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />







                            :

                            <>


                                <select onChange={(e) => { setfilter(e.target.value) }} name="" id="" className='border-2 border-red-600 rounded-2xl text-center w-[150px] mt-4 sm:mt-0  h-[40px] ' >

                                    <option value=""> Select City </option>
                                    {
                                        citydata.map((obj) => (

                                            <option value={obj}> {obj} </option>

                                        ))
                                    }

                                </select>


                                <button onClick={formsubmit} className='w-[150px] h-[40px] bg-red-700 text-white flex justify-center mt-4 sm:mt-0  items-center rounded-xl'> <FaSearch /> </button>


                            </>




                }



















            </div>














            <div className=' w-full  min-h-[400px] mt-24  sm:mt-0 flex flex-wrap gap-5 justify-center ' >

                {

                    show ?

                        <div className='w-full h-[400px] pl-8  flex justify-center items-center' >

                            <h1 className='font-bold text-[25px]' > Find Your Donor or Blood Bank </h1>


                        </div>


                        :

                        emptyshow ?

                            <div className='w-full h-[400px] pl-8  flex justify-center items-center' >

                                <img src={imgs} alt="" className='w-[100px] h-[100px]' />


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


                        emptyshow ?

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

