import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import loginImg from '../../assets/young.jpg';
import logo from '../../assets/logo.png';
import axios from "../../axios/instance.js"
import { useNavigate } from "react-router-dom"
import { message } from "antd"
import { useContext } from 'react';
import {UserdataContext} from "../../contextapi/accountdata.js"



export default function Login() {
  const [formData, setFormData] = useState({
    emailid: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    emailid: '',
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

  const {setaccdata}=useContext(UserdataContext)  // user account data contextapi


  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for empty fields
    let newErrors = {};
    if (!formData.emailid.trim()) {
      newErrors = { ...newErrors, emailid: 'Email Id is required' };
    }
    if (!formData.password.trim()) {
      newErrors = { ...newErrors, password: 'Password is required' };
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Perform login logic
      axios.defaults.withCredentials = true;




      axios.post("/auth/login", formData).then((respo) => {


        if (respo.data.err) {

          message.error("server err")

          return

        } else if (respo.data.emailerr) {

          message.error("this email not valid")
          return

        } else if (respo.data.flag) {

          navigate("/home")

        } else {

          message.error("email and password not match")
        }

      }).catch(err => {

        message.error("something wrong")

      })



    }
  }




  useEffect(() => {                  // user auth checking and account data fetch func

    axios("/auth/account").then((respo) => {

      if (respo.data.authfailed) {

        navigate("/login")

      } else if (respo.data.flag) {

        setaccdata(respo.data.data)
        navigate("/userdetails")

      } else if (respo.data.err) {

        message.error("server error")
      }
    }).catch(err => {

      message.error("somthing worng")
    })


  }, [])












  return (
    <div className="bg-gray-200 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row w-full max-w-4xl mx-4">
        {/* Left Column (Form, Logo, and Headline) */}
        <div className="w-full md:w-1/2 flex flex-col text-center md:text-left mx-auto md:mx-0 md:mr-4">
          {/* Logo at the center */}
          <img src={logo} alt="Logo" className="mb-4 w-20 mx-auto md:mx-0" />

          {/* Headline */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">
              Become a Blood Donor
              <br />
              Today
            </h2>
          </div>

          {/* Login Form */}
          <form className="flex-grow flex flex-col justify-between" onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="email"
                id="emailid"
                name="emailid"
                className={`w-full border rounded-md p-3 text-lg ${errors.emailid && 'border-red-500'}`}
                placeholder="Email Id"
                value={formData.emailid}
                onChange={handleInputChange}
              />
              {errors.emailid && <p className="text-red-500 text-sm">{errors.emailid}</p>}
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
        <div className="w-full md:w-1/2 hidden md:block">
          <img src={loginImg} alt="Illustration" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
