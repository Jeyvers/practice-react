import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <span className='title'>TODO</span>
      <span>
        <FaSun />
      </span>
    </header>
  );
};

export default Header;
