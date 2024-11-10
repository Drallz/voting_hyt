import ints from './ints.png'; // Import the image
import './App.css'; // Import the CSS file
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // State for registration
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [fullName, setFullName] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Toggle the visibility of the login form
  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  // Handle login form submission
  // const handleLoginSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Logging in with:', username, password);
  // };
  const handleLoginSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way
  
    // Clear any previous errors
    setError('');
  
    try {
      // Sending the login request to the backend API
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify the request body type
        },
        body: JSON.stringify({ username, password }), // Sending username and password
      });
  
      // Parsing the response from the backend
      const data = await response.json();
  
      if (response.status === 200) {
        // If the response status is 200, login was successful
        console.log('Login successful:', data);
        // Handle successful login (e.g., store user data, navigate, etc.)
      } else {
        // If the response status is not 200, there was an error
        setError(data.error || 'Invalid username or password');
      }
    } catch (error) {
      // If there's an error in the fetch (e.g., network issue), display a generic error message
      console.error('Error during login:', error);
      setError('An error occurred. Please try again later.');
    }
  };
  

  // Toggle the visibility of the registration form
  const handleRegisterClick = () => {
    setShowRegistrationForm(!showRegistrationForm);
  };

  // Handle registration form submission
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerPassword === confirmPassword) {
      console.log('Registering with:', fullName, registerUsername, registerPassword);
    } else {
      console.log("Passwords don't match");
    }
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
          <div className="registration-form">
            <h3>Register as a Voter</h3>
            <form onSubmit={handleRegisterSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="register-username">Username:</label>
                <input
                  type="text"
                  id="register-username"
                  value={registerUsername}
                  onChange={(e) => setRegisterUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="register-password">Password:</label>
                <input
                  type="password"
                  id="register-password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <button type="submit">Register</button>
            </form>
          </div>
        )}

        {/* Login Button */}
        <button className="login-btn" onClick={handleLoginClick}>
          Log In
        </button>

        {/* Show the login form if showLoginForm is true */}
        {showLoginForm && (
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit">Log In</button>
            </form>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
