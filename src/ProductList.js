import React, { useState, useEffect } from 'react';
import Product from './Product';
import { fetchProducts } from './api'; // Your API utility function

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API
    fetchProducts()
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;