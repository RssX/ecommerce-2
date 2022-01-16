import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cartIcon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';



const Header = ({currentUser, hidden}) => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'></Logo>
            </Link>
            <div className='options' >
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
                { currentUser ? 
                (<div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>)
                : (<Link className='option' to='/sign'>SIGN IN</Link>)}
                <CartIcon/>
            </div>
            { hidden ? null : <CartDropdown/>}
        </div>
    )
}

const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)