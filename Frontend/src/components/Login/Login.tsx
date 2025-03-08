import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import logo from "../../assets/Logo/cw.png";
import loginVideo from "../../assets/Logo/backgroundvideo.mp4"; // Add your video file
import { loginUser } from "../../db"; // Import loginUser from your db.tsx file

interface LoginProps {
  onLogin: () => void; // Prop for login functionality
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    try {
      const data = await loginUser(username, password);
      console.log("Login Response:", data); // Debugging

      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
        console.log("Token stored, navigating based on role...");

        // Log the roles to check the data structure
        console.log(data.roles);
        if (data.roles && data.roles.includes("ROLE_ADMIN")) {
          // Redirect to the admin page if the user has the admin role
          console.log("Admin role found, navigating to admin page");
          navigate("/adminpage");
        } else {
          // Redirect to the home page for non-admin users
          console.log("Non-admin or no roles, navigating to home page");
          navigate("/home");
        }

        onLogin();
      } else {
        alert("Invalid login credentials.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("An error occurred during login. Please try again.");
    }
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
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          <span className="forgot-password" onClick={() => navigate("/forgotpassword")}>
            Forgot Password?
          </span>
        </div>
        <br />

        <button className="btnlog" onClick={handleLogin}>
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
