import React from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'

function Login() {
    return (
        <>
        <div className='login-form-container'>
            <Link to="/">
                <span>Go Back</span>
            </Link>
            <div className='card'>
                <div className='left'>
                    <span>Hello</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, delectus! Dolorum error quo molestiae recusandae.</p>
                    <span>Don't have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className='right'>
                    <form>
                        <input type="text" placeholder='Username'/>
                        <input type="text" placeholder='Password'/>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login
