import './cart-item.scss';
import React from 'react';


export default function CartItem({ item : { imageUrl, price, name, quantity } }) {
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='item' />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'> {quantity} x ${price}</span>
            </div>
        </div>
    )
}
