import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

function Home() {
  const [products, setProducts] = useState([]);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [buy, setBuy] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleNextClick = () => {
    if (selectedProductIndex < products.length - 1) {
      setSelectedProductIndex(selectedProductIndex + 1);
      setBuy(false); // Reset the buy state when changing products
    }
  };

  const handlePreviousClick = () => {
    if (selectedProductIndex > 0) {
      setSelectedProductIndex(selectedProductIndex - 1);
      setBuy(false); // Reset the buy state when changing products
    }
  };

  const handleBuy = () => {
    setBuy(true);
  };

  return (
    <div>
      <h1>Home</h1>
      {buy ? (
        <p>Completed</p>
      ) : (
        <div>
          <button onClick={handlePreviousClick}>Previous</button>
          <button onClick={handleNextClick}>Next</button>

          {products.length > 0 ? (
            <div>
              <h2>{products[selectedProductIndex].title}</h2>
              <img
                src={products[selectedProductIndex].image}
                alt={products[selectedProductIndex].title}
                style={{ maxWidth: '200px' }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleBuy}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
              
                Buy
              </Button>
            </div>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
