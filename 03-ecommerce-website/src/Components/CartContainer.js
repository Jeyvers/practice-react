import React from 'react';
import CartItem from './CartItem.js';
import { useGlobalContext } from '../context';

const CartContainer = () => {
  const { cart, clearCart } = useGlobalContext();
  return (
    <section className='cart-container'>
      <div className='cart'>
        {cart.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      <button className='clear-cart' onClick={() => clearCart()}>
        Clear Cart
      </button>
    </section>
  );
};

export default CartContainer;
