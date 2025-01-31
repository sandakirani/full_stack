import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ForgetPassword.css';
import logo from "../assets/cw.png"

const Login: React.FC = () => {
  const [passwordVisible] = useState(false);
  const navigate = useNavigate();

  

  return (
    <div className="login-page">
      <div className="logo-container">
      <img src ={logo} className="logo2"/>
      </div>
      <div className="login-container3">
        <h2>Forgot Your Password </h2>
        
        <div className="guideline">
        <h5>Enter the email you signed up with and we will send you reset code.</h5>
        </div>

         {/*enter email*/}
        <div className="password-container">
          <input 
            type={passwordVisible ? "text" : "email"} 
            placeholder="Enter Email" 
          />
        
        </div>
        
           <br/>

      
        <button className="btn" onClick={() => navigate("/secondfpw")}>
          Continue
        </button>

      </div>
    </div>
  );
};

export default Login;
