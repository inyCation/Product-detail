// App.jsx
import React, { useEffect, useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <NavLink to="/product" activeClassName="active-link">
        Go To Cart
      </NavLink>
      <h1>Products</h1>
      {products.map(item => (
        <div className='items' key={item.id}>
          <img className='image' src={item.image} alt={item.title} />
          <Link
            to={`/product/${item.id}`}
            onClick={() => setProduct(() => [item.id])}
            className='btn'
          >
            View {item.title}
          </Link>
        </div>
      ))}
    </>
  );
}

export default App;
