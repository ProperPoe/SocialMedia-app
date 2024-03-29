import "./Notification.scss"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import React, { useContext, useState } from 'react'
import { makeRequest } from "../../axios"
import Post from "../Post/Post"
import ViewPost from "../ViewPost/ViewPost"
function Notification({notif, ind}) {
    const[postViewId, setPostViewId] = useState()
    const [viewClicked, setViewClicked] = useState(false)
    const client = useQueryClient()
    const deleteNotifMutation = useMutation((notifId) => {
        return makeRequest.delete("/notifications/" +  notifId)
    },{
        onSuccess: () => {
            client.invalidateQueries(["notifications"])
        }
    })
    const seenMutation = useMutation((notifId) => {
        return makeRequest.delete("/count/" +  notifId)
    },{
        onSuccess: () => {
            client.invalidateQueries(["count"])
        }
    })

    const handleDelete = () => {
        deleteNotifMutation.mutate(notif.id)
    }
    const handleSeen = () => {
        seenMutation.mutate(notif.postId)
    }

    const handleView = () => {
        setPostViewId(notif.postId)
        setViewClicked(true)
    }
    
    
        const {isLoading, err, data} = useQuery(["Views"], () => 
            makeRequest.get('/view/' + postViewId).then((res) => {
                console.log(res.data)
                return res.data
            }),{enabled: viewClicked}
        )
    
            console.log(data)
    return (
        <>
        <div>
            {viewClicked === false ?
            <div className="notif-card-container">
            <div className="notifs" key={ind} onClick={handleView}>
                {notif.username} has liked your post 
            </div> 
            <div className="button-container">
                <button onClick={handleSeen}>Seen</button>
                <button onClick={handleDelete}>Delete</button>
            </div>   
            </div>
            : isLoading ? "loading" :
                <div>
                    <ViewPost notif={notif} view={data} postViewId={postViewId} isLoading={isLoading} viewClicked={viewClicked} setViewClicked={setViewClicked} />
                </div>
                
            
            }
        </div>
        
        </>
    )
}

export default Notification