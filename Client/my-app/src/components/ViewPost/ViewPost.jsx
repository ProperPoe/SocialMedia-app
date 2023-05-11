import Notification from "../Notification/Notification"
import "./ViewPost.scss"

import React from 'react'

function ViewPost({setViewClicked, view, postViewId, notif}) {
    return (
        <>
        <div className="view-container" onClick={() => setViewClicked(false)}>
            { postViewId === view[0]?.id ?
                <div className='view-card-container'>
                <div className='top'>
                    <div className='top-left'>
                        {/*view[0]?.username*/}
                    </div>
                    {/*currentUser.id === post.userId ?
                    <div className='top-right'>
                        <button onClick={() => setOpenUpdate(true)}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>: ""*/}
    
                </div>
                <div className='middle'>
                    {view[0]?.desc}
                    <img src={"/upload/"+view[0]?.img} alt=""/>
                </div>
                <div className='bottom'>
                </div>
                {/*openUpdate ? <Update setOpenUpdate={setOpenUpdate}  post={post} /> : ""*/}
            </div> : <Notification notif={notif}/>
            }

        </div>
        
        </>
    )
}

export default ViewPost
