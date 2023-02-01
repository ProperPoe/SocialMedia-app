import React from 'react'
import './Navbar.scss'

function Navbar() {
    return (
        <>
        <div className='navbar-container'>
            <div className='logo'>
                MS
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        
        </>
    )
}

export default Navbar
