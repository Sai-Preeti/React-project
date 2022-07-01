import React from 'react'
import { useState } from "react";
import axios from 'axios';
import { useNavigate, Route, Routes } from 'react-router-dom'
import Main from '../components/Main/Main';
import './login.css'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
	const [ok,setOk]=useState(false)
    const navigate = useNavigate();

    const writeUser = () => {
        axios.post("http://localhost:3001/Login", {
            email,
            password,
        }).then((response) => {
            console.log("response received")
            console.log(response.data.status)
            if (response.data.status === 'ok')
			{
				setOk(true)
                navigate("/Main")

			}
            else {
                alert("Invalid password")
            }

        });
    };
    return ( 
	<div className='text-center container'>
        <h1 className='mb-5'> Login </h1> 
		<input className = 'input-container'
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        type = "email"
        placeholder = "Email"/>
        <br />
        <input className = 'input-container'
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        type = "password"
        placeholder = "Password"/>
        <br/>
        <button className="btn btn-primary" onClick = { writeUser } > Login </button>
        <button className="btn btn-primary" onClick = {()=>{navigate('/Register')} } > Register </button>
		</div>
		

    )
} 


    export default Login