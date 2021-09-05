import React from 'react'
import Header from '../Header'
import HomeAvatar from './HomeAvatar'
import PostOnHomePage from './PostOnHomePage'
import './HomePage.css'
import Feed from '../Feed'

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className="homepage__nav">
                <Header/>
            </div>
            <HomeAvatar/>
            <div className="homepage__components__items">
            <div className="homepage__components">
                <PostOnHomePage/>
            </div>
            <div className="homepage__components__post">
                <Feed/>
            </div>
            </div>
        </div>
    )
}

export default HomePage
