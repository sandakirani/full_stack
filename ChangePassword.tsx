import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ChangePassword.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/cw.png"

const Login: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-page">
      <div className="logo-container">
      <img src ={logo} className="logo2"/>
      </div>
      <div className="login-container">
        <h2>Password Reset</h2>
        
        {/*old password*/}
        <div className="password-container">
          <input 
            type={passwordVisible ? "text" : "password"} 
            placeholder="Old Password" 
          />
          <FontAwesomeIcon 
            icon={passwordVisible ? faEyeSlash : faEye} 
            onClick={togglePasswordVisibility} 
            className="eye-icon"
          />
        </div>

         {/*new password*/}
        <div className="password-container">
          <input 
            type={passwordVisible ? "text" : "password"} 
            placeholder="New Password" 
          />
          <FontAwesomeIcon 
            icon={passwordVisible ? faEyeSlash : faEye} 
            onClick={togglePasswordVisibility} 
            className="eye-icon"
          />
        </div>
        <div className="instruction">
        <h5>Your password must contain at least 8 characters, including at least one uppercase letter (A-Z), one lowercase letter (a-z), one number (0-9), and one special character (e.g., @, #, $, %).</h5>
        </div>
           <br/>

        <h3>Confirm New Password </h3>
         {/*confirm password*/}
         <div className="password-container">
          <input 
            type={passwordVisible ? "text" : "password"} 
            placeholder="New Password" 
          />
          <FontAwesomeIcon 
            icon={passwordVisible ? faEyeSlash : faEye} 
            onClick={togglePasswordVisibility} 
            className="eye-icon"
          />
        </div>
    
        <button className="btn" onClick={() => navigate("/secondcpw")}>
          Change my password
        </button>

      </div>
    </div>
  );
};

export default Login;
