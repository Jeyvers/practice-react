import React, { useRef } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Ul = ({ ulContainer }) => {
  const { loading, setCategory, categories, amount, addCartEnvelopeClass } =
    useGlobalContext();

  return (
    <ul ref={ulContainer}>
      <span
        className='close-btn'
        onClick={() => {
          ulContainer.current.classList.remove('visible');
        }}
      >
        <FaTimes />
      </span>
      <li
        onClick={() => {
          setCategory('');
          ulContainer.current.classList.remove('visible');
        }}
      >
        <a href='#home'> Home </a>
      </li>

      {categories.map((category, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              ulContainer.current.classList.remove('visible');
              setCategory(category);
            }}
          >
            <a href={`#${category}`} value={category}>
              {category.split(`'`)[0]}
            </a>
          </li>
        );
      })}
      {/* <li>
        <a href='#' value>
          {' '}
          Men
        </a>
      </li>
      <li>
        <a href='#'> Women</a>
      </li>
      <li>
        <a href='#'> Jewelry</a>
      </li>
      <li>
        <a href='#'> Electronics</a>
      </li> */}
    </ul>
  );
};

export default Ul;
