import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import "./verify.css"


export default function Login() {
    const navigate = useNavigate()

const [verifiaction_token,setverifcationToken] = useState({})

  const   handlechange1 = (e) => {

   
    const { maxLength, value, name } = e.target;

    console.log(maxLength, value, name)
    const [fieldName, fieldIndex] = name.split("-");
    let fieldIntIndex = parseInt(fieldIndex, 10);
      setverifcationToken(values =>({...values,[fieldIntIndex]:value}))
    if (value.length >= maxLength) {
  
        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        );
  
        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      
    }
  };

  const submit1 = async(e)=>{
    e.preventDefault()
    const data = Object.values(verifiaction_token).join("")
    console.log(data)
    const data1 = {
        VerificationNumber:parseInt(data)
    }
    try{
        await axios.post("http://localhost:5000/api/auth/login",data1).then((res)=>{
            if(res.status == 200){
                alert("Successfully logged in")
                localStorage.setItem("username",res.data.userName)
                navigate("/home")
            }
                    })
    }catch(error){
        console.log(error)
    }
  }
  return (
    <div className='verify'>
        <div className="verifyform">
            <img src="https://th.bing.com/th/id/OIP.EKyYyjKk6CG2aLrJi6K10QHaHa?w=197&h=197&c=7&r=0&o=5&pid=1.7" alt="" />
            <h1>OTP Verification</h1>
            <div className="border">
                    <input type="text" name="field-1" className="boxer" onChange={handlechange1} maxLength="1" />
                    <input type="text" name="field-2" className="boxer" onChange={handlechange1}  maxLength="1"/>
                    <input type="text" name="field-3" className="boxer" onChange={handlechange1} maxLength="1" />
                    <input type="text" name="field-4" className="boxer" onChange={handlechange1}  maxLength="1"/>
            </div>
            <button className='butt1' onClick={submit1}>Verify</button>

        </div>
    </div>
  )
}
