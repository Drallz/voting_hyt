import ints from './ints.png'; // Import the image
import './App.css'; // Import the CSS file
import React, { useState } from 'react';
import './App.css';
import Register from './Components/Register'
import Login from './Components/Login'

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  // Toggle the visibility of the login form
  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegistrationForm(false)
  };



  // Toggle the visibility of the registration form
  const handleRegisterClick = () => {
    setShowRegistrationForm(!showRegistrationForm);
    setShowLoginForm(false)
  };

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>International Tutors Awards</h1>

        {/* Image */}
        <img className="awards-image" src={ints} alt="Awards" />

        {/* Register Button */}
        <button className="register-btn" onClick={handleRegisterClick}>
          Register
        </button>

         
        {/* Registration Form */}

        {showRegistrationForm && (
          <Register/>
        )}
        
        {/* Login Button */}
        <button className="login-btn" onClick={handleLoginClick}>
          Log In
        </button>

        {/* Show the login form if showLoginForm is true */}

        {showLoginForm && (

          <Login/>

        )}
     
      </header>
    </div>
  );
}

export default App;
