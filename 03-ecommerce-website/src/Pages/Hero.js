import React from 'react';
import { useGlobalContext } from '../context';
import Product from '../Components/Product';

const Hero = () => {
  const { products, cart } = useGlobalContext();

  return (
    <div className='products container'>
      {products.map((product) => {
        const [inCart] = cart.filter(
          (cartItem) => parseInt(cartItem.id) === parseInt(product.id)
        );

        return (
          <Product
            key={product.id}
            {...product}
            buttonState={inCart ? true : false}
          />
        );
      })}
    </div>
  );
};

export default Hero;
