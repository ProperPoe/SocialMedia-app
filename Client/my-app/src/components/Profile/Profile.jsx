import React, { useState } from 'react'
import './profile.scss'
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"
import PinterestIcon from "@mui/icons-material/Pinterest"
import TwitterIcon from "@mui/icons-material/Twitter"
import PlaceIcon from "@mui/icons-material/Place"
import LanguageIcon from "@mui/icons-material/Language"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import Posts from '../Posts/Posts'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { makeRequest } from '../../axios'
import { useLocation } from 'react-router-dom'

function Profile() {

    const userId = parseInt(useLocation().pathname.split("/")[2])

    const { isLoading, error, data } = useQuery(["user"], () => 
        makeRequest.get("/users/find/"+userId).then((res)=>{
            return res.data;
        })    
    )

    

    return (
        <div className='profile'>
            {isLoading ? "loading" :<> <div className='images'>
                    <img className='profilePic' src={data.profilePic} alt="" />
            </div>
            <div className='profile-container'>
                <div className='uInfo'>
                    <div className='left'>
                        <a href='http://facebook.com'>
                            <FacebookTwoToneIcon />
                        </a>
                        <a href='http://instagram.com'>
                            <InstagramIcon />
                        </a>
                        <a href='http://twitter.com'>
                            <TwitterIcon />
                        </a>
                        <a href='http://pinterest.com'>
                            <PinterestIcon />
                        </a>
                        <a href='http://linkedin.com'>
                            <LinkedInIcon />
                        </a>
                    </div>
                    <div className='center'>
                        <span className='profile-name'>{data.username}</span>
                        <div className='info'>
                            <div className='item'>
                                <PlaceIcon />
                                <span>USA</span>
                            </div>
                            <div className='item'>
                                <LanguageIcon />
                                <span>steve.com</span>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <EmailOutlinedIcon />
                        <MoreVertIcon />
                    </div>
                </div>
                <Posts />
            </div></>}
        </div>
    )
}

export default Profile
