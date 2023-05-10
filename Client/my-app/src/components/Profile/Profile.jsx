import React, { useContext, useState } from 'react'
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
import Update from '../Update/Update'
import { AuthContext } from '../../context/authContext'

function Profile() {
    const [openUpdate, setOpenUpdate] = useState(false)
    const {currentUser} = useContext(AuthContext)
    const userId = parseInt(useLocation().pathname.split("/")[2])

    const { isLoading, error, data } = useQuery(["user"], () => 
        makeRequest.get("/users/find/"+userId).then((res)=>{
            return res.data;
        })    
    )

    

    return (
        <div className='profile'>
            {isLoading ? "loading" :<> <div className='images'>
                    <img className='profilePic' src={"/upload/"+data.profilePic} alt="" />
            </div>
            <div className='profile-container'>
                <div className='uInfo'>
                    <div className='left'>
                        <a href={data.facebook} target="_blank" rel='noreferrer'>
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
                                <span>{data.city}</span>
                            </div>
                            <div className='item'>
                                <LanguageIcon />
                                <span>{data.website}</span>
                            </div>
                        </div>
                        {userId === currentUser.id ? <div className='updateProfile'>
                            <button onClick={()=>setOpenUpdate(true)}>Update</button>
                        </div> : null}
                        {/*openUpdate && <div className='updateContainer'>
                            <Update setOpenUpdate={setOpenUpdate} />
                        </div>*/}
                    </div>
                    <div className='right'>
                        <EmailOutlinedIcon />
                        <MoreVertIcon />
                    </div>
                </div>
                <Posts userId={userId} />
            </div></>}
            {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
        </div>
    )
}

export default Profile
