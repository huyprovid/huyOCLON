import React from 'react'
import Header from '../Header'
import ShopProducts from './ShopProducts'
import ShopSidebar from './ShopSidebar'
import { useState, useEffect } from 'react'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [myLoading, setMyLoading] = useState(false)
    const category = ['All',...new Set(products.map((productitem) => productitem.type))]
    const [backup , setBackup]=useState([])
   
    // console.log(backup)
    // let x = Array.from(products)

    const filterItem =(type)=>{
        if(type ==='All'){
           return setProducts(backup)
            
        }
        const Items = products.filter((itemms)=>itemms.type === type)
        return setProducts(Items)
    }

    const URL = 'https://5f9e30f26ee5fa00168a509f.mockapi.io/sinhdeptrai'
    const geturl = async () => {
        setMyLoading(true)
        try {
            const response = await fetch(URL)
            const data = await response.json()
            setBackup(data)
            setProducts(data)
            setMyLoading(false)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        geturl()
    }, [])
    if (myLoading) {
        return <h3 style={{display:'flex',justifyContent:'center'}}>Loading...</h3>
    }
    return (
        <div>
            <Header />
            <div className='shop__flex'>
                <ShopSidebar filterItem={filterItem} category={category} />
                <div className="shop__products">
                    <ShopProducts products={products} />
                </div>
            </div>
        </div>
    )
}

export default Shop
