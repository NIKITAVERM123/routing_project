import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Fetch data from your API here
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((responseData) => setData(responseData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to handle image click
  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      {/* ... */}
      {data ? (
        <div>
          {data.map((product) => (
            <div key={product.id} onClick={() => handleImageClick(product)}>
              <h2>{product.title}</h2>
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  style={{ maxWidth: '200px' }}
                  alt={product.title}
                />
              </Link>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}

      {selectedProduct && (
        <div>
          <h2>Product Details</h2>
          <p>Title: {selectedProduct.title}</p>
          <img
            src={selectedProduct.image}
            style={{ maxWidth: '200px' }}
            alt={selectedProduct.title}
          />
          <p>Description: {selectedProduct.description}</p>
        </div>
      )}
      {/* ... */}
    </div>
  );
}

export default Home;
