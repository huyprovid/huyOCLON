import React from 'react'
import './ShopSidebar.css'
import StorefrontIcon from '@material-ui/icons/Storefront';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import ShopSearchBar from './ShopSearchBar';
import AddIcon from '@material-ui/icons/Add';
import Filter from './Filter';

const ShopSidebar = ({category ,filterItem}) => {
    return (
        <div className='shopsidebar'>
            <ShopSearchBar />
            <div className="divider"></div>
            <div className="shopside__bar">

                <div className="shopside__icon">
                    <StorefrontIcon fontSize='large' className='myy-icon' /> <span className='shop__side__text'>Market</span>
                </div>

                <div className="shopside__icon">
                    <LiveHelpIcon fontSize='large' className='myy-icon' /> <span className='shop__side__text'>Shopping Directly</span>
                </div>

                <div className="shopside__icon">
                    <NotificationsActiveIcon fontSize='large' className='myy-icon' /> <span className='shop__side__text'>Notification</span>
                </div>

                <div className="shopside__icon">
                    <MailIcon fontSize='large' className='myy-icon' /> <span className='shop__side__text'>Mail</span>
                </div>

                <div className="shopside__icon">
                    <PersonIcon fontSize='large' className='myy-icon' /> <span className='shop__side__text'>Your Account</span>
                </div>

                <div style={{
                    marginLeft: '35px',
                    paddingTop: '3px',
                    paddingBottom: '3px',
                    marginTop: '25px',
                    marginBottom: '25px',
                    background: '#AAC9FF',
                    color: '#1877F2',
                    width: '75%',
                    borderRadius: '8px'
                }} className="shopside__icon" id='icons'>
                    <AddIcon style={{
                        marginLeft: '35px'
                    }} fontSize='large' /> <span className='shop__side__text'>Sell Your Stuffs</span>
                </div>


            </div>
            <div className="categories">

                {/* <div className="shopside__icon">
                    <DriveEtaIcon fontSize='large' className='myy-icon' /> <span className='shop__side__text'>AirForce</span>
                </div>

                <div className="shopside__icon">
                    <HomeIcon fontSize='large' className='myy-icon' /> <span className='shop__side__text'>AirMax</span>
                </div>

                <div className="shopside__icon">
                    <BuildIcon fontSize='large' className='myy-icon' /> <span className='shop__side__text'>SB</span>
                </div>

                <div className="shopside__icon">
                    <FavoriteIcon fontSize='large' className='myy-icon' /> <span className='shop__side__text'>ZoomX</span>
                </div>

                <div className="shopside__icon">
                    <CameraAltIcon fontSize='large' className='myy-icon' /> <span className='shop__side__text'>Air Zoom</span>
                </div>

                <div className="shopside__icon">
                    <SportsBasketballIcon fontSize='large' className='myy-icon' /> <span className='shop__side__text'>Jordan</span>
                </div>

                <div className="shopside__icon">
                    <SportsSoccerIcon fontSize='large' className='myy-icon' /> <span className='shop__side__text'>Football</span>
                </div> */}
                <Filter category={category} filterItem={filterItem}/>


            </div>
        </div>
    )
}

export default ShopSidebar
