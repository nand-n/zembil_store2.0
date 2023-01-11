import React, { useEffect } from 'react';

import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
  useNavigate,
} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ProductUpload from './components/ProductUplaod/ProductUpload';
// import Login from './components/Login/Login';
// import Register from './components/Register/Register';

function App() {
  // useEffect(() => {
  //   const auth = () => {
  //     const navigate = useNavigate();
  //     if (!token) {
  //       navigate('/');
  //     }
  //   };
  //   // auth();
  // }, []);

  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/homepage" exact element={<Home />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/products/:id" exact element={<Product />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/footer" exact element={<Footer />} />
          <Route path="/checkout" exact element={<Checkout />} />
          <Route path="/productupload" exact element={<ProductUpload />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
