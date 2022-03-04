import React from 'react';
import { useGlobalContext } from '../context';

const Hero = () => {
  const { products } = useGlobalContext();
  console.log(products);
  return (
    <div>
      {products.map((product) => {
        const { id, image, price, title, category, description } = product;
        return <div key={id}>{price}</div>;
      })}
    </div>
  );
};

export default Hero;
