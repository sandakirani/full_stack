import React from "react";
import { useNavigate } from "react-router-dom";
import './SecondForgetPassword.css';
import logo from "../../assets/Logo/cw.png";
import loginVideo from "../../assets/Logo/backgroundvideo.mp4"; // Add your video file

const SecondForgetPassword: React.FC = () => {
 
  const navigate = useNavigate();

  

  return (
    <div className="login-page">
        <video autoPlay loop muted className="background-video">
        <source src={loginVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
      
        <button className="btns" onClick={() => navigate("/home")}>
          Submit
        </button>

      </div>
    </div>
  );
};

export default SecondForgetPassword;
