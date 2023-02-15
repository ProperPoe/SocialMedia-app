import React from 'react'
import './Home.scss'
import Posts from '../Posts/Posts'
import Share from '../Share/Share'

function Home() {
    return (
        <>
        <div className='post-container'>
            <div className='post-card'>
                <Share />
                <Posts />
            </div>
        </div>
        </>
        
    )
}

export default Home
