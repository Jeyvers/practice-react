import React, { useRef } from 'react';
import CartItem from './CartItem.js';
import { FaTimes } from 'react-icons/fa';

import { useGlobalContext } from '../context';

const CartContainer = () => {
  const { cart, total, clearCart, cartEnvelope } = useGlobalContext();
  return (
    <section className='cart-container'>
      <div className='cart-overlay'>
        <div className='cart-envelope' ref={cartEnvelope}>
          <span
            className='close-btn'
            onClick={() => cartEnvelope.current.classList.remove('show')}
          >
            <FaTimes />
          </span>
          <div className='heading'>
            <h1>Your Cart</h1>
            <button className='clear-cart' onClick={() => clearCart()}>
              Clear Cart
            </button>
          </div>
          <div className='cart'>
            {cart.length < 1 ? (
              <p>Your cart is empty</p>
            ) : (
              <div className='cart-items'>
                {cart.map((cartItem) => {
                  return <CartItem key={cartItem.id} {...cartItem} />;
                })}
              </div>
            )}
          </div>

          <p className='cart-items-total'>
            Total: <span>{total}</span>
          </p>

          <button className='checkout' disabled>
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartContainer;
