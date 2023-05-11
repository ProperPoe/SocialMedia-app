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
                        <span>1 year ago</span>
                    </div>
                    {/*currentUser.id === post.userId ?
                    <div className='top-right'>
                        <button onClick={() => setOpenUpdate(true)}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>: ""*/}
    
                </div>
                <div className='middle'>
                    {view[0]?.desc}
                </div>
                <div className='bottom'>
                    <span >Like 12</span>
                </div>
                {/*openUpdate ? <Update setOpenUpdate={setOpenUpdate}  post={post} /> : ""*/}
            </div> : <Notification notif={notif}/>
            }

        </div>
        
        </>
    )
}

export default ViewPost
