import React from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { cart, amount } = useGlobalContext();
  return (
    <header>
      <nav className='navbar'>
        <div className='title'>logo</div>
        <div className='cart-icon'>
          <p>{amount}</p>
          <BsCartPlusFill />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
