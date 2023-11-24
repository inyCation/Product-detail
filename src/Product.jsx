// Product.jsx
import React, { useState, useEffect } from 'react';
import {
  useParams
} from "react-router-dom";

const Product = () => {
  const [activeProduct, setActiveProduct] = useState([])
  let { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(json => setActiveProduct(json))
      .catch(error => console.error('Error fetching data:', error));
  }, [productId]);

  console.log('Product ID:', activeProduct.id); // Log outside JSX

  return (
    <>
      <h1>Data: {activeProduct.id}</h1>
      <div className='items' key={activeProduct.id}>
        <img className='image' src={activeProduct.image} alt={activeProduct.title} />
        <a className='btn' >
          You'r Currently looking at {activeProduct.title}
        </a>
      </div>
    </>
  );
};

export default Product;
