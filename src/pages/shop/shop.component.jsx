import React from 'react'
import PreviewShop from '../../components/preview-shop/preview.shop.component'
import SHOPDATA from './shop.data'


 class Shop extends React.Component {
    constructor(){
        super(); 
   
        this.state=({
           collections:SHOPDATA
        })
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
              {
                  collections.map(({id, ...collectionsprops}) => (
                   <PreviewShop key={id} {...collectionsprops}/>
                  ))
                      
                     
                  
              }
            </div>
        )
    }
}
export default Shop;