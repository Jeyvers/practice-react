import React from 'react';
import { useGlobalContext } from '../context';
import Product from '../Components/Product';

const Hero = () => {
  const { products } = useGlobalContext();
  console.log(products);
  return (
    <div className='products'>
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default Hero;
