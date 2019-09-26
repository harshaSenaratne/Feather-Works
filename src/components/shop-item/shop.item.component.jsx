import React from 'react'
import './shop.item.styles.scss'

const ShopItem = ({id,name,price,imageUrl})=>(

    <div className='shop-item'>
        <div className='image' 
        style={{background:`url(${imageUrl})`}}>
        </div>

        <div className='shop-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            
         </div>
    </div>

)

export default ShopItem
