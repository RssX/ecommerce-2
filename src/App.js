import './App.css';
import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.js';
import Header from './components/header/header';
import Sign from './pages/sign/sign';
import React, { Component } from 'react'
import { auth, createUserProfileDocument } from './firebase/firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions';



class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })

      }
      else {
        setCurrentUser({userAuth})
      }
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/shop' element={<ShopPage/>}></Route>
        <Route path='/sign' element={this.props.currentUser ? <Navigate to='/'/> : <Sign/>} >
        </Route>
      </Routes>
    </div>
    )
  }
};

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);