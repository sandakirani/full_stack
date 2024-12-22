import React from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="login-page">
        
      <div className="login-container">

        <h2>WELCOME</h2>
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <div className="checkbox">
          <div className="div1">
            <input type="checkbox" id="rememberMe" />
            <label className="checkbox-label">Remember Me </label>
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
