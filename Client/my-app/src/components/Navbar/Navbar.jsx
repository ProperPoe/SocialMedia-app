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
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'


function Navbar() {
    const {toggle, darkMode} = useContext(DarkModeContext)
    const {currentUser, logout} = useContext(AuthContext)

    const navigate = useNavigate();
    
    const {isLoading, err, data} = useQuery(["count"], () => 
        makeRequest.get("/count").then((res) => {
            console.log(res.data)
            return res.data
        })
    )

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
                    <Link to={`/notifications/${currentUser.id}`} style={{textDecoration: "none"}}>
                        <li><NotificationsOutlinedIcon /></li>
                    </Link>
                    
                    <span>{data?.length === 0 ? "" : data?.length}</span>
                    <Link to="/login" style={{textDecoration: "none"}}>
                        <li onClick={logout}>Logout</li>
                    </Link>
                </ul>
            </div>
        </div>
        
        </>
    )
}

export default Navbar
