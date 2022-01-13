import './cartIcon.scss';
import {connect} from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cartActions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import React from 'react'

const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden} >
            <ShoppingIcon className='shopping-icon'></ShoppingIcon>
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon)