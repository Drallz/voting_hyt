import React,{useState} from "react";
/import axios from "axios";


function Register() {


    const [fullName, setFullName] = useState('');
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const [error, setError] = useState('');


    // Handle registration form submission
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
  
    // Ensure passwords match
    if (registerPassword !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
  
    // Clear any previous errors
    setError('');
  
    try {
      // Sending the registration request to the backend API
    //   const response = await axios.post('http://localhost:5000/register', {
    //     fullName,
    //     username: registerUsername,
    //     password: registerPassword,
    //   });
  
    //   if (response.status === 201) {
    //     // If the response status is 201, registration was successful
    //     console.log('Registration successful:', response.data);
    //     // Handle successful registration (e.g., navigate to login, show a success message, etc.)
    //   }
    // } catch (error) {
    //   // If there's an error in the request (e.g., network issue or validation error)
    //   console.error('Error during registration:', error);
    //   setError(error.response?.data?.error || 'An error occurred. Please try again later.');
    // }
  };
  



    return (  <div className="registration-form">
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
      </div> );
}

export default Register;
