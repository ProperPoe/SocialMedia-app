import React, { useContext, useState } from 'react'
import "./post.scss"
import MoreHorizonIcon from '@mui/icons-material/MoreHoriz'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined"
import { Link } from 'react-router-dom'
import moment from "moment"
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { makeRequest } from '../../axios'
import { AuthContext } from '../../context/authContext'

function Post({post}) {
    const [liked, setLiked] = useState(true)

    const {currentUser} = useContext(AuthContext);

    const { isLoading, error, data } = useQuery(["likes", post.id], () => 
        makeRequest.get("/likes?postId=" + post.id).then((res)=>{
            return res.data;
        })    
    )

    const queryClient = useQueryClient();

    const mutation = useMutation((liked) => {
        if(liked) return makeRequest.delete("/likes?postId=" + post.id);
        return makeRequest.post("/likes", {postId: post.id})
    }, {
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries(["likes"])
        },
    })


    const handleLike = () => {
        mutation.mutate(data.includes(currentUser.id))
    }

    return (
        <div className='post'>
            <div className='container'>
                <div className='user'>
                    <div className='userInfo'>
                        <img src={"/upload/"+post.profilePic} alt="" />
                        <div className='details'>
                            <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color: "inherit"}}>
                                <span className='name'>{post.username}</span>
                            </Link>
                            <span className='date'>{moment(post.createdAt).fromNow()}</span>
                        </div>
                    </div>
                    <MoreHorizonIcon />
                </div>
                <div className='content'>
                    <p>{post.desc}</p>
                    <img src={"/upload/"+post.img} alt="" />
                </div>
                <div className='info'>
                    <div className='item'>
                        {isLoading ? "loading" : data.includes(currentUser.id) ? <FavoriteOutlinedIcon style={{color: "red"}} onClick={handleLike} /> : <FavoriteBorderOutlinedIcon onClick={handleLike} /> }
                        {isLoading ? "loading" : data.length} Likes
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
