import React from 'react'
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

function Profile() {
    return (
        <div className='profile'>
            <div className='images'>
                    <img className='profilePic' src="https://ucarecdn.com/7de78bac-7e1c-4404-a57f-a34a9e1c7070/-/crop/3485x3491/0,105/-/preview/-/progressive/yes/-/format/auto/" alt="" />
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
                        <span className='profile-name'>Jane Doe</span>
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
            </div>
        </div>
    )
}

export default Profile
