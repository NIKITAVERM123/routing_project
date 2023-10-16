import React, { useState, useEffect } from 'react';

function Product() {
  const [data, setData] = useState(null);
  const [inputUrl, setInputUrl] = useState('');

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const responseData = await response.json();
        setData(responseData);
      } else {
        console.error('Error fetching data:', response.status);
        setData(null);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setData(null);
    }
  };

  useEffect(() => {
    fetchData('https://fakestoreapi.com/products');
  }, []);

  const handleInputSubmit = () => {
    fetchData(inputUrl);
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        <label>
          Enter URL:
          <input
            type="text"
            value={inputUrl}
            
            onChange={(e) => setInputUrl(e.target.value)}
          />
        </label>
        <button onClick={handleInputSubmit}>Fetch Data</button>
      </div>
      {data ? (
        <div>

          {data.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <img
                src={product.image}
          
                style={{ maxWidth: '200px' }}
              />
              <p>{product.description}</p>
            
            </div>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Product;
