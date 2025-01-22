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
        <h2>SUCCESS </h2>
        
        <div className="successmessage">
        <h5>Your password has been reset successfully!
        Login with your new password.</h5>
        </div>

         {/*enter password*/}
        <div className="password-container">
          <input 
            type={passwordVisible ? "text" : "email"} 
            placeholder="Enter Email" 
          />
        
        </div>
        
           <br/>

      
         {/*enter password*/}
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
    
        <button className="btn" onClick={() => navigate("/home")}>
          LOGIN
        </button>

      </div>
    </div>
  );
};

export default Login;
