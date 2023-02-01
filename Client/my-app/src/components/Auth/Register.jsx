import React from 'react'
import { Link } from 'react-router-dom'
import './Register.scss'

function Register() {
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
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Username'/>
                        <input type="text" placeholder='Password'/>
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register
