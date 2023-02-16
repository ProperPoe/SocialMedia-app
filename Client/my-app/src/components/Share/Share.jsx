import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContext'
import './Share.scss'
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { makeRequest } from "../../axios"

function Share() {
    const [file, setFile] = useState(null);
    const [desc, setDesc] = useState("")
    const [upload, setUpload] = useState(false)

    const { currentUser } = useContext(AuthContext);

    const queryClient = useQueryClient();

    const mutation = useMutation((newPost) => {
        return makeRequest.post("/posts", newPost);
    }, {
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries(["posts"])
        },
    })

    const handleUploadClick = (e) => {
        e.preventDefault();

        setUpload(true);
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        mutation.mutate({desc})
    }
    return (
        <>
            <div className="post-form">
                <form action="">
                    <textarea type="text" name="" id="" placeholder="Enter a post.." onChange={(e)=>setDesc(e.target.value)} />
                    <button className={upload === false ? 'upload' : 'uploadHidden'} onClick={handleUploadClick}>Upload</button>
                    {upload === true ? <input type="file" id='file' onChange={(e) => setFile(e.target.files[0])} /> : null}
                    <button onClick={handleClick}>Share</button>
                </form>
            </div>
        </>
    )
}

export default Share
