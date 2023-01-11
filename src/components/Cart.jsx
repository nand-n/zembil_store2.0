import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { addCart, delCart } from '../redux/action';

// import { toast } from 'react-toastify';

// toast.configure();

function Cart() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.handleCart);
  if (state.length !== 0) {
    localStorage.setItem('savedItemCart', state);
  }
  const handleButtonPlus = () => {
    state.map((product) => {
      dispatch(addCart(product));
    });
    // dispatch(state.qty);
  };
  const handleButtonMinus = () => {
    state.map((product) => {
      dispatch(delCart(product));
    });
    // dispatch(state.qty);
  };

  // const handleCheckout=()=>{

  // }

  const handleToken = async (token, addresses) => {
    const url = 'http://localhost:5000/checkout';
    const response = await axios.post(url, { token, state });

    const { status } = response.data;
    if (status === 'success') {
      // toast('Success ! Check email for detail', { type: 'success' });
      console.log('Success');
    } else {
      // toast('Something went Error', { type: 'error' });
      console.log('Something went Error');
    }
  };
  return (
    <div className="container my-4">
      {state.map((product) => (
        <div className="row my-2">
          <div className="col-md-4">
            <img
              src={product.image}
              alt={product.name}
              height="150px"
              width="120px"
            />
          </div>
          <div className="col-md-4">
            <h3> {product.name}</h3>
            <p className="lead fw-bold">
              {product.qty} X ETB{product.price} =ETB
              {product.qty * product.price}
            </p>
            <button
              className="btn btn-outline-dark mx-4"
              onClick={() => handleButtonMinus(product)}
            >
              <i className="fa fa-minus"></i>
            </button>
            {product.qty}
            <button
              className="btn btn-outline-dark mx-4"
              onClick={() => handleButtonPlus(product)}
            >
              <i className="fa fa-plus"></i>
            </button>
            {/* <button className="btn btn-outline-dark mx-8">Chekout</button> */}
            {/* <NavLink to="/checkout" className="btn btn-outline-dark ms-8 ">
              Procide Checkout
            </NavLink> */}
            <StripeCheckout
              stripeKey="pk_test_51LCUXQAGRNbe4Zog2fdajrZ2ifYGw5xwzBhETX2tGYv0p26tg1UElzi0ONHDNg874qkBjTi6yVaFQij18id6WhYh00ZVmnVzMP"
              token={handleToken}
              billingAddress
              shippingAddress
              amount={product.price}
              name={product.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
