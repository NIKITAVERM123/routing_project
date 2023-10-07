import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Form from './Component/Form';
import { AppBar, Toolbar, Button, TextField } from '@mui/material';

const App = () => {
  const [userInput, setUserInput] = useState(''); // State to store user input

  const handleInputChange = (e) => {
    setUserInput(e.target.value); // Update state with user input
  };

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Link to="/Home" style={{ textDecoration: 'none' }}>
              <Button color="inherit">Home</Button>
            </Link>
            <Link to="/About" style={{ textDecoration: 'none' }}>
              <Button color="inherit">About</Button>
            </Link>
            <Link to="/Form" style={{ textDecoration: 'none' }}>
              <Button color="inherit">Form</Button>
            </Link>
          </Toolbar>
        </AppBar>

        <center>
        <input
          label="Enter something"
      
      
        />
        <button>Submit</button>
        </center>

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
