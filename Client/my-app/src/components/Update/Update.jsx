import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { makeRequest } from '../../axios';
import "./update.scss"

function Update({setOpenUpdate, user}) {
    const [profile, setProfile] = useState();
    const [texts, setTexts] = useState({
        username: "",
        city: "",
        website: "",
        facebook: "",
        instagram: "",
        twitter: "",
        pinterest: "",
        linkedin: ""
    });

    const upload = async (file) => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            const res = await makeRequest.post("/upload", formData);
            return res.data;
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        setTexts((prev) => ({ ...prev, [e.target.name] : [e.target.value]}))
    }

    const queryClient = useQueryClient();

    const mutation = useMutation((user) => {
        return makeRequest.put("/users", user);
    }, {
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries(["user"])
        },
    })
    
    const handleClick = async (e) => {
        e.preventDefault();
        let profileUrl;
        
        profileUrl = profile ? await upload(profile) : user.profilePic

        mutation.mutate({ ...texts, profilePic:profileUrl });
        setOpenUpdate(false)
    }


    return (
        <div className='update'>
            update
            <form action="">
                <input type="file" onChange={e=>setProfile(e.target.files[0])}/>
                <input type="text" name='username' placeholder='username' onChange={handleChange} />
                <input type="text" name='city' placeholder='city' onChange={handleChange} />
                <input type="text" name='website' placeholder='website' onChange={handleChange}/>
                <input type="text" name='facebook' placeholder='Facebook' onChange={handleChange}/>
                <input type="text" name='instagram' placeholder='Instagram' onChange={handleChange}/>
                <input type="text" name='twitter' placeholder='Twitter' onChange={handleChange}/>
                <input type="text" name='pinterest' placeholder='Pinterest' onChange={handleChange}/>
                <input type="text" name='linkedin' placeholder='Linkedin' onChange={handleChange}/>
                <button onClick={handleClick}>Update</button>
            </form>
            <button onClick={()=>setOpenUpdate(false)}>X</button>
        </div>

    )
}

export default Update
