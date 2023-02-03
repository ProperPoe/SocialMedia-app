import React, { useState } from 'react'
import "./post.scss"
import MoreHorizonIcon from '@mui/icons-material/MoreHoriz'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined"
import { Link } from 'react-router-dom'

function Post({post}) {
    const [liked, setLiked] = useState(false)

    return (
        <div className='post'>
            <div className='container'>
                <div className='user'>
                    <div className='userInfo'>
                        <img src={post.profilePic} alt="" />
                        <div className='details'>
                            <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color: "inherit"}}>
                                <span className='name'>{post.name}</span>
                            </Link>
                            <span className='date'>1 min ago</span>
                        </div>
                    </div>
                    <MoreHorizonIcon />
                </div>
                <div className='content'>
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className='info'>
                    <div className='item'>
                        {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon /> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
