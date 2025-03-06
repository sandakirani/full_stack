import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import logo from "../../assets/Logo/cw.png";
import loginVideo from "../../assets/Logo/backgroundvideo.mp4"; // Add your video file

interface LoginProps {
  onLogin: () => void; // Prop for login functionality
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    onLogin();
    navigate("/home");
  };

  return (
    <div className="login-page">
      <video autoPlay loop muted className="background-video">
        <source src={loginVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="logo-container">
        <img src={logo} className="logo2" alt="Logo" />
      </div>

      <div className="login-container">
        <h2>WELCOME</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-container">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            <label className="checkbox-label" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>
          <a href="#">Forgot Password?</a>
        </div>
        <br />

        <button className="btn" onClick={handleLogin}>
          Login
        </button>

        <p className="signupbutton">
          <b>Don't have an account? </b>
          <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
