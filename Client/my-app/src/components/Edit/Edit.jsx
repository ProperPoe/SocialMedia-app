import { useMutation, useQueryClient } from '@tanstack/react-query'
import './Edit.scss'

import React, { useState } from 'react'
import { makeRequest } from '../../axios';

function Edit({setOpenEdit, post, setOpenMenu}) {
    const [desc, setDesc] = useState("")

    const queryClient = useQueryClient();

    const updateMutation = useMutation((postId) => {
        return makeRequest.put("/posts/"+postId, {desc})
    },{
        onSuccess: () =>{
            queryClient.invalidateQueries(["posts"])
        }
    })

    const handSubmit = (e) => {
        e.preventDefault()

        updateMutation.mutate(post.id)

        setOpenEdit(false)
        setOpenMenu(false)
    }
    return (
        <>
        <div className='edit'>
            <form action="">
                <input type="text" onChange={(e) => setDesc(e.target.value)} />
                <button onClick={handSubmit}>Submit</button>
            </form>
            <button onClick={()=>setOpenEdit(false)} >X</button>
        </div>
        </>
    )
}

export default Edit
