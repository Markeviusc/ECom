import React from 'react';

const Product = ({ product, addToCart, showProductDetails }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => showProductDetails(product)}>View Details</button>
    </div>
  );
};

export default Product;