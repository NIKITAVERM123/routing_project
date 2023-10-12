import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Margin } from '@mui/icons-material';

function Home() {
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
          <Grid container spacing={2}>
            {data.map((product) => (
              <Grid item key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: 300p', height: '200px', Margin: '5px'}}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (00
        <p>Loading data...</p>
      )}
    </div>
  );
}
export default Home;
