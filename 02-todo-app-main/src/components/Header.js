import React from 'react';
// import { FaMoon, FaSun } from 'react-icons/fa';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

const Header = ({ lightMode, setLightMode }) => {
  const setLightModeBody = () => {
    setLightMode(!lightMode);
    if (lightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList = '';
    }
  };
  return (
    <header>
      <span className='title'>TODO</span>
      <span className='mode-symbol' onClick={setLightModeBody}>
        {lightMode ? <BsMoonFill /> : <BsSunFill />}
      </span>
    </header>
  );
};

export default Header;
