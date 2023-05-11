import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import './Login.scss'

function Login() {
    const {currentUser} = useContext(AuthContext);
    const [inputs, setInputs] = useState({
        username:"",
        password:"",
    })
    const [err, setErr] = useState(null)

    const navigate = useNavigate()

    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value }))
    }
    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            await login(inputs)
            if(currentUser){
                navigate("/")
            }
        }catch(err){
            setErr(err.response.data)
        }
        
    }

    return (
        <>
        <div className='login-form-container'>
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
                        <input type="text" placeholder='Username' name='username' onChange={handleChange}/>
                        <input type="text" placeholder='Password' name='password' onChange={handleChange}/>
                        {err && err}
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login
