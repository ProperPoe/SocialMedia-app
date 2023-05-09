import { useParams } from "react-router-dom"
import "./Notifications.scss"
import Notification from '../Notification/Notification'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import React, { useContext } from 'react'
import { makeRequest } from "../../axios"
import { AuthContext } from "../../context/authContext"

function Notifications() {
    
    const {currentUser} = useContext(AuthContext)
    
    const userId = useParams()

    const {isLoading, err, data} = useQuery(["notifications"] , () => 
        makeRequest.get("/notifications?userId=" + userId.id).then((res) => {
            return res.data
        })
    )


    return (
        <>
        <div className="notifs-container">
            {isLoading ? "loading..." : data.map((notif, ind) => {
                return <Notification notif={notif} key={ind} />
                    
            })
            }
            
            
        </div>
        </>
    )
}

export default Notifications