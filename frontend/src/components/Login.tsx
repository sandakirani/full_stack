import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import './Login.css';

const Login: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>WELCOME</h2>
        <input type="email" placeholder="Enter Email" />
        
        <div className="password-container">
          <input 
            type={passwordVisible ? "text" : "password"} 
            placeholder="Enter Password" 
          />
          <FontAwesomeIcon 
            icon={passwordVisible ? faEyeSlash : faEye} 
            onClick={togglePasswordVisibility} 
            className="eye-icon"
          />
        </div>

        <div className="checkbox">
          <div className="div1">
            <input type="checkbox" id="rememberMe" />
            <label className="checkbox-label">Remember Me</label>
          </div>
          <a href="#"> Forgot Password?</a>
        </div><br />
        
        <button className="btn" onClick={() => navigate("/home")}>
          Login
        </button>

        <p className="signup">
          <b>Don't have an account? </b><a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
