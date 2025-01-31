import React from "react";
import { useNavigate } from "react-router-dom";
import './SecondForgetPassword.css';
import logo from "../assets/cw.png"

const Login: React.FC = () => {
 
  const navigate = useNavigate();

  

  return (
    <div className="login-page">
      <div className="logo-container">
      <img src ={logo} className="logo2"/>
      </div>
      <div className="login-container4">
        <h2>OTP verification</h2>
        
        <div className="guideline">
        <h5>Enter the Enter the OTP sent to <span className="highlight">example@gmail.com</span></h5>
        </div>
        <div className="otp-container">
      {Array(4).fill("").map((_, index) => (
        <input key={index} type="text" maxLength={1} className="otp-box" />
      ))}
    </div>

           <br/>
           <div className="guideline">
        <h5>Don’t receice code? <span className="highlight">Re-send</span></h5>
        </div>
      
        <button className="btn" onClick={() => navigate("/home")}>
          Submit
        </button>

      </div>
    </div>
  );
};

export default Login;
