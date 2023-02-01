import React from 'react'
import './Login.scss'

function Login() {
    return (
        <>
        <div className='form-container'>
            <div className='card'>
                <div className='left'>
                    <span>Hello</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, delectus! Dolorum error quo molestiae recusandae.</p>
                    <button>Register</button>
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
