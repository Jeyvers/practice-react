import React from 'react';
import { useGlobalContext } from '../context';

const Product = ({ id, image, price, title, category, description }) => {
  const { addProduct } = useGlobalContext();
  return (
    <div className='product' key={id}>
      <div className='product-image-container'>
        <img src={image} alt='' className='product-image' />
      </div>
      <div className='product-category'>
        <p>{category}</p>
      </div>
      <div className='product-information'>
        <p className='product-title'>{title}</p>
        <p className='product-description'>{description}</p>
      </div>
      <button className='add-btn' onClick={() => addProduct(id)}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
