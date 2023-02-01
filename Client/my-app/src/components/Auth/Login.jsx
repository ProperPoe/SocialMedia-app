import React from 'react'
import './Login.scss'

function Login() {
    return (
        <>
        <div className='form-container'>
            <form>
                <input type="text" placeholder='Username'/>
                <input type="text" placeholder='Password'/>
                <button>Login</button>
            </form>
        </div>
        </>
    )
}

export default Login
