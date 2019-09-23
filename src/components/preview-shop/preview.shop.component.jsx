import React, { Component } from 'react'
import './preview.shop.component.styles.scss'

const ShopPreview =({title,preview})=>(

<div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>

 {/* Maps and renders preview component data by filtering data to be less than 4   */}
     
     {preview.filter((preview,index) => index< 4).map(item=>(
       <div key={item.id}> 
       {item.name}
       </div>
     ))

     }
    </div>
  </div>
)

export default ShopPreview;