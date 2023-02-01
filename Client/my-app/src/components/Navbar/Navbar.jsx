import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
    return (
        <>
        <div className='navbar-container'>
            <div className='logo'>
                <Link to="/">
                    <span>MS</span>
                </Link> 
            </div>
            <div>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/">
                        <li>Profile</li>
                    </Link>
                    <Link to="/">
                        <li>Messages</li>
                    </Link>
                    <Link to="/">
                        <li>Notifications</li>
                    </Link>
                    <Link to="/login">
                        <li>Login</li>
                    </Link>
                </ul>
            </div>
        </div>
        
        </>
    )
}

export default Navbar
