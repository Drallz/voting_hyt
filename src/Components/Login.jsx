import React ,{useState} from "react";

import axios from 'axios';




function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleLoginSubmit = async (e) => {
        e.preventDefault(); // Prevent the form from submitting traditionally
        
        // Clear any previous errors
        setError('');
      
        try {
          // Sending the login request to the backend API
          const response = await axios.post('http://localhost:5000/login', {
            username,
            password,
          });
      
          if (response.status === 200) {
            // If the response status is 200, login was successful
            console.log('Login successful:', response.data);
            // Handle successful login (e.g., store user data, navigate, etc.)
          }
        } catch (error) {
          // If there's an error in the request (e.g., network issue or login failure)
          console.error('Error during login:', error);
          setError(error.response?.data?.error || 'An error occurred. Please try again later.');
        }
      };
      


    return (   <div className="login-form">
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
      </div> );
}

export default Login;