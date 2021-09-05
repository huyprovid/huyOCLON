import React from 'react'
import { Avatar } from '@material-ui/core'
import './Story.css'

const Story = ({image , profileSrc , title}) => {
    return (
        <div className='story' style = {{ backgroundImage : `url(${image})`, backgroundRepeat: "no-repeat"}} >
            <Avatar
            src={profileSrc}
            className='story__avatar'
            />
            <h4>{title}</h4>
       </div>
    )
}

export default Story
