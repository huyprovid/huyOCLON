import React from 'react'
import './Header.css'

import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';

import { useStateValue } from './context/StateProvider'
import { Link } from 'react-router-dom'
const Header = () => {
    const [{user}]= useStateValue()
    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
                 alt="logo" />
                <div className="header__input">
                    <SearchIcon/>
                    <input type="text" className='header__input_text' 
                    placeholder="Search something" />
                </div>
            </div>

            <div className="header__middle">
                <div className="header__options">
                    <Link to='/'><HomeIcon fontSize="large"/></Link>
                </div>
                <div className="header__options">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__options">
                    <SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__options">
                   <Link to='/shop'> <StorefrontOutlinedIcon fontSize="large"/></Link>
                </div>
                <div className="header__options">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Link to='/homepage'><Avatar src={user.photoURL}/></Link>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon/> 
                </IconButton>

                <IconButton>
                    <Link to='/chat'><ForumIcon/></Link> 
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon/> 
                </IconButton>

                <IconButton>
                    <ArrowDropDownOutlinedIcon/> 
                </IconButton>
            </div>
        </div>
    )
}

export default Header
