import React from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const { id } = useParams(); // Get the product ID from the URL parameter

  // Fetch the product details using the product ID

  return (
    <div>
      <h2>Product Details for ID {id}</h2>
      {/* Display product details based on the fetched data */}
      <p>Title: Product Title</p>
      <p>Image: Product Image</p>
      <button>Buy</button>
    </div>
  );
}

export default Product;
