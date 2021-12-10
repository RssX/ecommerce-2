import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/shop' element={<ShopPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
