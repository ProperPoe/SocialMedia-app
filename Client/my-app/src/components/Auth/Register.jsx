import React from 'react'
import { Link } from 'react-router-dom'
import './Register.scss'
import { useState } from 'react'
import axios from 'axios'

function Register() {
    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
    })
    const [err, setErr] = useState(null)

    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async e => {
        e.preventDefault();

        try{
            await axios.post("http://localhost:3001/api/auth/register", inputs)
        }catch(err){
            setErr(err)
        }
    }

    console.log(err)
    return (
        <>
        <div className='register-form-container'>
            <div className='card'>
                <div className='left'>
                    <span>Hello</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, delectus! Dolorum error quo molestiae recusandae.</p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
                <div className='right'>
                    <form>
                        <input type="text" placeholder='Email' name='email' onChange={handleChange}/>
                        <input type="text" placeholder='Username' name='username' onChange={handleChange} />
                        <input type="text" placeholder='Password' name='password' onChange={handleChange} />
                        <button onClick={handleClick}>Register</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register
