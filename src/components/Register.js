import React, { useState } from 'react'
import './Register.css'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import {FaFacebookSquare} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'


export default function Regitser() {
  const navigate = useNavigate()
    const [inputs,setInputs]=useState({})
 const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
   await axios.post("http://localhost:5000/api/auth/register",inputs).then((res)=>{
    console.log(res.data)
    if(res.status== 200){
        alert("Registered sucessfully check your mail for verifcation number")
        navigate("/log")
    }
   })
    console.log(inputs)
  }
  return (
  <div className="totalREgi">
    <div className='Register'>

        <div className="formcontainer">
                        <h1>Registration</h1>
                        <p className='para1'>Please register down below</p>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Username</label>
            <input type="text" name="userName"   onChange={handleChange} required placeholder='Enter username' />
            <label htmlFor="">Email</label>
            <input type="text" required name="userEmail"  onChange={handleChange} placeholder='Enter email'/>
            <label htmlFor="">Phone Number</label>
            <input type="Number" name="PhoneNumber"    onChange={handleChange} placeholder='Enter mobile number' />
            <label htmlFor="">Password</label>
            <input type="password" name="Password"    onChange={handleChange} placeholder='Enter password'/>
            <button className="butt" type='Submit'>REGISTER</button>
        </form>
        </div>
        <div className="secondformconatainet">
            <div className="buttoncontainer">
                <button><FaFacebookSquare className='icon'/> FaceBook</button>
                <button><FcGoogle className='icon'/> Google</button>
            </div>
            <div className="extrainfo">
              <div className="info1">  <p>By registration up with you accept the <span>Terms of service</span>and <span>Privacy policy</span></p> </div>
              <div className="info2">
                <p>Already have an account ? <span>Login</span></p>
              </div>

            </div>
        </div>

    </div>
    </div>
  )
}
