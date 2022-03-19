import React, { useRef } from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import Ul from '../Components/Ul';

import { useGlobalContext } from '../context';

const Navbar = () => {
  const { amount, addCartEnvelopeClass } = useGlobalContext();
  const ulContainer = useRef(null);

  return (
    <header>
      <nav className='container'>
        <p className='title'>accessories</p>
        <div className='sub-nav'>
          <Ul ulContainer={ulContainer} />
        </div>
        <div className='icons'>
          <div
            className='cart-icon-area'
            onClick={() => addCartEnvelopeClass()}
          >
            <p className='cart-icon'>
              <span>{amount}</span>
              <BsCartPlusFill />
            </p>
          </div>
          <span
            className='btn-bars'
            onClick={() => {
              ulContainer.current.classList.add('visible');
            }}
          >
            <FaBars />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
