import React, { useRef } from 'react';
import { BsCartPlusFill, BsTi } from 'react-icons/bs';
import { FaTimes, FaBars } from 'react-icons/fa';

import { useGlobalContext } from '../context';

const Navbar = () => {
  const { cart, amount, addCartEnvelopeClass } = useGlobalContext();
  const ulContainer = useRef(null);
  return (
    <header>
      <nav className='container'>
        <p className='title'>accessories</p>
        <div className='sub-nav'>
          <ul ref={ulContainer}>
            <span
              className='close-btn'
              onClick={() => {
                ulContainer.current.classList.remove('visible');
              }}
            >
              <FaTimes />
            </span>
            <li>
              <a href='#'> Home </a>
            </li>
            <li>
              <a href='#'> Men</a>
            </li>
            <li>
              <a href='#'> Women</a>
            </li>
            <li>
              <a href='#'> Jewelry</a>
            </li>
            <li>
              <a href='#'> Electronics</a>
            </li>
          </ul>
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
