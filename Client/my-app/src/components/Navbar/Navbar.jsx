import React, { useContext, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import { DarkModeContext } from '../../context/darkModeContext'
import { AuthContext } from '../../context/authContext'


function Navbar() {
    const {toggle, darkMode} = useContext(DarkModeContext)
    const {currentUser, logout} = useContext(AuthContext)

    const navigate = useNavigate();

    //const handleProfile =()=> {
        //navigate(`/profile/${currentUser.id}`)
    //}

    return (
        <>
        <div className='navbar-container'>
            <div className='logo'>
                <Link to="/" style={{textDecoration: "none"}}>
                    <span>MS</span>
                </Link> 
                {darkMode ? <DarkModeOutlinedIcon onClick={toggle} /> : <WbSunnyOutlinedIcon onClick={toggle} />}
            </div>
            <div>
                <ul>
                    <Link to="/" style={{textDecoration: "none"}}>
                        <li><HomeOutlinedIcon /></li>
                    </Link>
                    {/*<li><PersonOutlinedIcon onClick={handleProfile} /></li>*/}
                    {/*<Link to={`/profile/${currentUser.id}`} style={{textDecoration: "none"}}>
                        <li><PersonOutlinedIcon /></li>
                    </Link>*/}
                    <a href={`/profile/${currentUser.id}`} style={{textDecoration: "none"}}>
                        <li><PersonOutlinedIcon /></li>
                    </a>
                    <Link to="/" style={{textDecoration: "none"}}>
                        <li><NotificationsOutlinedIcon /></li>
                    </Link>
                    <Link to="/login" style={{textDecoration: "none"}}>
                        <li onClick={logout}>Login</li>
                    </Link>
                </ul>
            </div>
        </div>
        
        </>
    )
}

export default Navbar
