import React, { useEffect, useState } from 'react'
import StoryReel from './StoryReel'
import'./Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase/config'
const Feed = () => {
    const [posts , setPosts]=useState([])
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', "desc") .onSnapshot((snapShot) => setPosts(snapShot.docs.map(doc => ({ id: doc.id, data: doc.data()
        } )))) 
        
  }, [])
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>
            {
                posts.map((post)=>(
                    
                    <Post 
                    profilePic={post.data.profilePic}
                    key={post.id}
                    username={post.data.username}
                    message = {post.data.message}
                    image={post.data.image}
                    />
                ))
            }
        </div>
    )
}

export default Feed
