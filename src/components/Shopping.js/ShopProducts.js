import React, { useState } from 'react'
import './ShopProducts.css'
const ShopProducts = ({ products }) => {
    

    return (
        <div className='shopproducts'>
            <h2 className='shopproducts__flex__h3' >Today's Choices</h2>
            <div className="shopproducts__flex">

                {products.map((product) => {
                    return <div className="shopproducts__item" key={product.id}>
                        <img className='shopproducts__item__img' src={product.image} alt="" />
                        <div className="shopproducts__item__text">
                            <h3 className='shopproducts__item__price'>{product.price} ₫</h3>
                            <h4 className='shopproducts__item__name'>{product.name}</h4>
                            <h5 className='shopproducts__item__location'>Ha Noi</h5>
                        </div>
                    </div>
                })}


            </div>
        </div>
    )
}

export default ShopProducts
