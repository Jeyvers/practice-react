import React from 'react';
import CartItem from './CartItem.js';
import { useGlobalContext } from '../context';

const CartContainer = () => {
  const { cart } = useGlobalContext();
  return (
    <section className='cart-container'>
      <div className='cart'>
        {cart.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
    </section>
  );
};

export default CartContainer;
