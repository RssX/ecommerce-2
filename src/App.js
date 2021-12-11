import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.js';
import Header from './components/header/header';
import Sign from './pages/sign/sign';
import React, { Component } from 'react'
import { auth } from './firebase/firebase';



export default class App extends Component {
  state = {
  currentUser: null,
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user)
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/shop' element={<ShopPage/>}></Route>
        <Route path='/sign' element={<Sign/>}></Route>
      </Routes>
    </div>
    )
  }
};