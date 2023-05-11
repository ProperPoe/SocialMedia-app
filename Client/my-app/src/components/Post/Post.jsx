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
import Edit from '../Edit/Edit'

function Post({post}) {
    const [liked, setLiked] = useState(true)
    const [openMenu, setOpenMenu] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)

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

    const notifMutation = useMutation((liked) => {
        if(liked) return makeRequest.delete("/notifications?postId="+post.id)
        return makeRequest.post("/notifications", {userId: currentUser.id, postId: post.id})
    },{
        onSuccess: () => {
            queryClient.invalidateQueries(["notifications"])
        }
    })
    
    const countMutation = useMutation((liked) => {
        if(liked) return makeRequest.delete("/count?postId="+post.id)
        return makeRequest.post("/count", {userId: currentUser.id, postId: post.id})
    },{
        onSuccess: () => {
            queryClient.invalidateQueries(["count"])
        }
    })


    const deleteMutation = useMutation((postId) => {
        return makeRequest.delete("/posts/" + postId);
    }, {
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries(["posts"])
        },
    })


    const handleLike = () => {
        mutation.mutate(data.includes(currentUser.id))
        notifMutation.mutate(data.includes(currentUser.id))
        countMutation.mutate(data.includes(currentUser.id))
    }
    const handleDelete = () => {
        deleteMutation.mutate(post.id)
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
                    {currentUser.id === post.userId ?
                        <div className='upper-right'>
                            <MoreHorizonIcon onClick={() => openMenu === false ? setOpenMenu(true) : setOpenMenu(false)} style={{cursor: "pointer"}} />
                            {openMenu ?
                                <div className='edit-menu'>
                                    <button onClick={() => setOpenEdit(true)}>Edit</button>
                                    <button onClick={handleDelete}>Delete</button>
                                </div> : ""}
                        </div>
                        : ""
                    }
                    
                    
                </div>
                <div className='content'>
                    <p>{post.desc}</p>
                    <img src={"/upload/"+post.img} alt="" />
                </div>
                <div className='info'>
                    <div className='item'>
                        {isLoading ? "loading" : data.includes(currentUser.id) ? <FavoriteOutlinedIcon style={{color: "red", cursor: "pointer"}} onClick={handleLike} /> : <FavoriteBorderOutlinedIcon onClick={handleLike} style={{cursor: "pointer"}} /> }
                        {isLoading ? "loading" : data.length} Likes
                    </div>
                </div>
                {openEdit ? <Edit setOpenEdit={setOpenEdit} setOpenMenu={setOpenMenu} post={post}/> : ""}
            </div>
        </div>
    )
}

export default Post
