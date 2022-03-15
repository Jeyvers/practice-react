import React, { useRef } from 'react';
import { BsCartPlusFill, BsTi } from 'react-icons/bs';
import { FaTimes, FaBars } from 'react-icons/fa';

import { useGlobalContext } from '../context';

const Navbar = () => {
  const { cart, amount } = useGlobalContext();
  const ulContainer = useRef(null);
  return (
    <header className='container'>
      <nav>
        <p className='title'>Deseo</p>
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
              <a href='#'> Collections</a>
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
          </ul>
          <span
            className='btn-bars'
            onClick={() => {
              ulContainer.current.classList.add('visible');
            }}
          >
            <FaBars />
          </span>
          <p className='cart-icon'>
            <span>{amount}</span>
            <BsCartPlusFill />
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
