import React, { useState, useEffect } from 'react';

function About() {
  const [data, setData] = useState([]);
  const apiUrl = 'https://fakestoreapi.com/products'; 

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Tittle</th>
            <th>Decribtion</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default About;
