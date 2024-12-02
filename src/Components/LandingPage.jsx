import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import ints from "../ints.png";

function LandingPage() {

    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  
    const handleLoginClick = () => {
      setShowLoginForm(!showLoginForm);
      setShowRegistrationForm(false);
    };
  
    const handleRegisterClick = () => {
      setShowRegistrationForm(!showRegistrationForm);
      setShowLoginForm(false);
    };

    return ( <div className="App">
  <header className="App-header">
        <h1>International Tutors Awards</h1>
        <img className="awards-image" src={ints} alt="Awards" />

        {/* Register Button */}
        <button className="register-btn" onClick={handleRegisterClick}>
          Register
        </button>
        {showRegistrationForm && <Register />}

        {/* Login Button */}
        <button className="login-btn" onClick={handleLoginClick}>
          Log In
        </button>
        {showLoginForm && <Login />}
      </header>

    </div>);
}

export default LandingPage;