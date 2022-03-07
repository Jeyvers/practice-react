import React from 'react';
import { useGlobalContext } from '../context';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

const Cart = ({ id, image, title, price, amount }) => {
  const { increaseAmount, decreaseAmount } = useGlobalContext();
  return (
    <div className='cart-item'>
      <div className='card-details'>
        <div className='cart-image'>{/* <img src={image} alt='' /> */}</div>
        <div className='card-numbers'></div>
        <p>{title}</p>
        <p>{price}</p>
      </div>
      <div className='amount'>
        <span className='decrease-amount' onClick={() => decreaseAmount(id)}>
          <AiFillMinusCircle />
        </span>
        {amount}
      </div>
      <span className='increase-amount' onClick={() => increaseAmount(id)}>
        <AiFillPlusCircle />
      </span>
    </div>
  );
};

export default Cart;
