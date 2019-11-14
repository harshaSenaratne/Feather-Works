import React from 'react'
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingItem} from '../../assets/cart.svg';

const CartIcon =() =>(
    <div className="cart-icon">
        <ShoppingItem className="shopping-icon">
                <span className="item-count">0</span>
        </ShoppingItem>

    </div>
)

export default CartIcon;