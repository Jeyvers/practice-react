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
  const [viewDetails, setViewDetails] = useState(false);

  return (
    <div className='product' key={id}>
      <div>
        <div className='product-category'>
          <p>{category}</p>
        </div>
        <div className='product-image-container'>
          <img src={image} alt='' className='product-image' />
        </div>

        <div
          className='product-information'
          onClick={() => setViewDetails(!viewDetails)}
        >
          <p className='product-title'>
            {viewDetails ? title : title.substring(0, 27) + '...'}
          </p>
          <p className='product-description'>
            {/* {description} */}
            {viewDetails ? description : description.substring(0, 100) + '...'}
          </p>
        </div>
        <p className='product-price'>
          Price: <span> ${price} </span>
        </p>
      </div>
      <button
        className={buttonState ? 'add-btn disabled' : 'add-btn'}
        disabled={buttonState}
        onClick={() => addProduct(id)}
      >
        {buttonState ? 'In cart' : 'Add to cart'}
      </button>
    </div>
  );
};

export default Product;
