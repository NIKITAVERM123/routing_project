import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Form from './Component/Form';
import Product from './Component/Product';
import Ref from './Component/Ref';
import { AppBar, Toolbar, Button } from '@mui/material';

const App = () => {

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Link to="/Home" style={{ textDecoration: 'none', color: 'black' }}>
              <Button color="inherit">Home</Button>
            </Link>
            <Link to="/About" style={{ textDecoration: 'none', color: 'black' }}>
              <Button color="inherit">About</Button>
            </Link>
            <Link to="/Form" style={{ textDecoration: 'none', color: 'black' }}>
              <Button color="inherit">Form</Button>
            </Link>
            <Link to="/Product" style={{ textDecoration: 'none',color:'black' }}>
              <Button color="inherit">Product</Button>
            </Link>
            <Link to="/Ref" style={{ textDecoration: 'none',color:'black' }}>
              <Button color="inherit">Ref</Button>
            </Link>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Ref" element={<Ref />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
