import React from 'react';
import { useGlobalContext } from '../context';
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiFillDelete,
} from 'react-icons/ai';

const Cart = ({ id, image, title, price, amount }) => {
  const { increaseAmount, decreaseAmount, deleteItem } = useGlobalContext();

  // let totalAmount = price x amount;
  return (
    <div className='cart-item'>
      <div className='cart-details'>
        <div className='cart-image'>
          <img src={image} alt='' />
        </div>
        <p>{title.substring(0, 30)}</p>
        <span className='delete-btn' onClick={() => deleteItem(id)}>
          <AiFillDelete />
        </span>
      </div>
      <div className='cart-numbers'>
        <p>{price + '  x  ' + amount}</p>
        <p>|</p>
        <span>{price * amount}</span>
      </div>
      <div className='amount'>
        <span className='decrease-amount' onClick={() => decreaseAmount(id)}>
          <AiFillMinusCircle />
        </span>
        <p>{amount}</p>

        <span className='increase-amount' onClick={() => increaseAmount(id)}>
          <AiFillPlusCircle />
        </span>
      </div>
    </div>
  );
};

export default Cart;
