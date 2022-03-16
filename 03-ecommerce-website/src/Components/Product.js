import React, { useState } from 'react';
import { useGlobalContext } from '../context';

const Product = ({
  id,
  image,
  price,
  title,
  category,
  description,
  buttonState,
}) => {
  const { addProduct, cart } = useGlobalContext();

  return (
    <div className='product' key={id}>
      <div className='product-image-container'>
        {/* <img src={image} alt='' className='product-image' /> */}
      </div>
      <div className='product-category'>
        <p>{category}</p>
      </div>
      <div className='product-information'>
        <p className='product-title'>{title}</p>
        <p className='product-description'>{description}</p>
      </div>
      <button
        className='add-btn'
        unique={id}
        value={id}
        disabled={buttonState}
        onClick={() => addProduct(id)}
      >
        {buttonState ? 'In cart' : 'Add to cart'}
      </button>
    </div>
  );
};

export default Product;
