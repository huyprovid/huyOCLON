import React from 'react'
import './HomeAvatar.css'
import BackGround from './Home__wallpaper.jfif'
import { useStateValue } from '../context/StateProvider'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HomeAvatar = () => {
    const [{user}]=useStateValue()
    const [addImg , setAddImg]=useState(`${BackGround}`)
    return (
        <div className='homeavatar'>
            <div className="homeavatar__image">
                <img className='homeavatar__image__background' src={addImg} alt="" />
            </div>
            <div className="add__picture"><CameraAltIcon/> <span> <input onChange={(e)=>{setAddImg(e.target.value)}} type="text"/></span></div>
            <div className="homeavatar__image__avatar">
                <img className='homeavatar__image__ava__user'  src={user.photoURL} />
                <div className="div">
                <CameraAltIcon fontSize='large' className='cameraIcon'/>
                </div>
            </div>
            <h1 className='homeavatar__image__ava__user__name'>{user.displayName}</h1>
            <Link to='/' className='homeavatar__add__desc'>Add description</Link>
           <div className="homeavatar__infos">

                <div className="homeavatar__info">
                    Posts
                </div>

                <div className="homeavatar__info">
                    Introduces
                </div>

                <div className="homeavatar__info">
                    Friends
                </div>

                <div className="homeavatar__info">
                    Photos
                </div>

                <div className="homeavatar__info">
                    More
                </div>

                <div className="homeavatar__info">
                    Add 
                </div>

           </div>
        </div>
    )
}

export default HomeAvatar
