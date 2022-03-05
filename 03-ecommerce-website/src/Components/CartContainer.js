import React from 'react';
import Cart from './Cart';
import { useGlobalContext } from '../context';

const CartContainer = () => {
  const { cart } = useGlobalContext();
  return (
    <section className='cart-container'>
      <div className='cart'>
        {cart.map((cartItem) => {
          return <Cart key={cartItem.id} />;
        })}
      </div>
    </section>
  );
};

export default CartContainer;
