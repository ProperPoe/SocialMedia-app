import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'


function Navbar() {
    return (
        <>
        <div className='navbar-container'>
            <div className='logo'>
                <Link to="/" style={{textDecoration: "none"}}>
                    <span>MS</span>
                </Link> 
                <DarkModeOutlinedIcon />
            </div>
            <div>
                <ul>
                    <Link to="/" style={{textDecoration: "none"}}>
                        <li><HomeOutlinedIcon /></li>
                    </Link>
                    <Link to="/profile/duwop" style={{textDecoration: "none"}}>
                        <li><PersonOutlinedIcon /></li>
                    </Link>
                    <Link to="/" style={{textDecoration: "none"}}>
                        <li><NotificationsOutlinedIcon /></li>
                    </Link>
                    <Link to="/login" style={{textDecoration: "none"}}>
                        <li>Login</li>
                    </Link>
                </ul>
            </div>
        </div>
        
        </>
    )
}

export default Navbar
