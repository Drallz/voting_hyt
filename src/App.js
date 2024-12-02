import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css'
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import ints from './ints.png'; // Adjust path if needed
import LandingPage from './Components/LandingPage';

function App() {
 

  return (
    <div className="App">
    
      {/* Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route  path="/register"  element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
