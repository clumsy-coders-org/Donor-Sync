import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import loginImg from '../../Assets/young.webp';
import logo from '../../Assets/logo.png';
import axios from "../../Axios/constant"
import { useNavigate } from "react-router-dom"
import { message } from "antd"
import Nave from '../navebar/Nave';



export default function Login() {
  const [formData, setFormData] = useState({
    regnumber: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    regnumber: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();




    //     // Check for empty fields
    let newErrors = {};
    if (!formData.regnumber.trim()) {
      newErrors = { ...newErrors, regnumber: 'Register Number is required' };
    }
    if (!formData.password.trim()) {
      newErrors = { ...newErrors, password: 'Password is required' };
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Perform login logic
      axios.defaults.withCredentials = true;


      axios.post("/bloodbank/login", formData).then((respo) => {



        if (respo.data.regerr) {

          message.error("This Regester is invalid")

        } else if (respo.data.flag) {

         navigate("/home")



        } else if (respo.data.passerr) {

          message.error(" password and regester number not match ")
        }
      }).catch(err => {

        message.error("something wrong")
      })



    }



  };

  return (

    <div>
      <Nave />

    <div className=" flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col md:flex-row w-full max-w-4xl mx-4">
        {/* Left Column (Form, Logo, and Headline) */}
        <div className="w-full md:w-1/2 flex flex-col text-center md:text-left mx-auto md:mx-0 md:mr-4">
          {/* Logo at the center */}
          <img src={logo} alt="Logo" className="mb-4 w-20 mx-auto md:mx-0" />

          {/* Headline */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">
              Blood Bank Login
            </h2>
          </div>

          {/* Login Form */}
          <form className="flex-grow flex flex-col justify-between" onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                id="regnumber"
                name="regnumber"
                className={`w-full border rounded-md p-3 text-lg ${errors.regnumber && 'border-red-500'}`}
                placeholder="Register Number"
                value={formData.regnumber}
                onChange={handleInputChange}
              />
              {errors.regnumber && <p className="text-red-500 text-sm">{errors.regnumber}</p>}
            </div>

            <div className="mb-6">
              <input
                type="password"
                id="password"
                name="password"
                className={`w-full border rounded-md p-3 text-lg ${errors.password && 'border-red-500'}`}
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            {/* Links for Forgot Password and Signup */}
            <div className="flex justify-between mb-4 text-sm">
              <Link to="/forgot-password" className="text-blue-500 hover:underline">
                Forgot Password?
              </Link>
              <Link to="/signup" className="text-blue-500 hover:underline">
                Signup
              </Link>
            </div>

            {/* Login Button at the Bottom Center */}
            <div className="mt-auto">
              <button type="submit" className="w-full py-2 text-white bg-red-600 rounded hover:bg-black">
                Login
              </button>
            </div>
          </form>
        </div>

        {/* Right Column (Image) - Hidden on Mobile */}
        <div className="w-full md:w-1/2 md:h-96 hidden md:block">
          <img src={loginImg} alt="Illustration" className="w-full h-full  object-contain" />
        </div>
      </div>
    </div>

    </div>
  );
}
