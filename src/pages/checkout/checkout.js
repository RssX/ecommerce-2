import './checkout.scss'

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors'
import CheckoutItem  from '../../components/checkout-item/checkout-item'

const CheckoutPage = ({cartItems, total}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-blocks'>
                    <span>Products</span>
                </div>
                <div className='header-blocks'>
                    <span>Description</span>
                </div>
                <div className='header-blocks'>
                    <span>Quantity</span>
                </div>
                <div className='header-blocks'>
                    <span>Price</span>
                </div>
                <div className='header-blocks'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem cartItem={cartItem} key={cartItem.id}/>
                ))
            }
            <div className='total'><span>TOTAL: ${total}</span></div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)