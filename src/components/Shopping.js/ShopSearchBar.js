import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search'
import './ShopSidebar.css'
const ShopSearchBar = () => {
    return (
        <div className='shopsearchbar'>
            <h2 style={{padding:'7px'}} className='shopsearch__text'>Marketplace</h2>
            <div className="shopsearch__input">
                <SearchIcon/>
                <input type="text" placeholder='Search' className='shop__search__input__text' />
            </div>
            
        </div>
    )
}

export default ShopSearchBar
