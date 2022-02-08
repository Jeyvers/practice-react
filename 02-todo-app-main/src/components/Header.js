import React from 'react';
import { FaMoon } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <span className='title'>TODO</span>
      <span>
        <FaMoon />
      </span>
    </header>
  );
};

export default Header;
