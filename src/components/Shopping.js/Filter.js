import React, { useState } from 'react'
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import './ShopSidebar.css'

const Filter = ({category ,filterItem}) => {
    const [categoryArr , setCategoryArr]=useState(category)
    console.log(categoryArr)
    return (
        <div>
            {categoryArr.map((cates , index)=>{
                return <div className="shopside__icon" key={index}  onClick={()=>filterItem(cates)}>
                <DriveEtaIcon fontSize='large' className='myy-icon' /> <span className='shop__side__text'>{cates}</span>
            </div> 
            })}
           
        </div>
    )
}

export default Filter
