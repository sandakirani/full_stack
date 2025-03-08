import React, { useState } from "react";
import "./SignUp.css";
import logo from "../../assets/Logo/cw.png";
import signupVideo from "../../assets/Logo/backgroundvideo.mp4"; // Add your video file
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { registerUser } from "../../db"; // Import the registerUser function

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Log the username to check its value
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    // Simple form validation
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      // Call the registerUser function from db.tsx
      const data = await registerUser(username, email, password);
      console.log("Response from registerUser:", data);
      if (data && data.message === "User registered successfully!") {
        setSuccessMessage("Account created successfully!");
        setTimeout(() => navigate("/"), 2000); // Navigate to login page after 2 seconds
      } else {
        setError("Error creating account. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const { value } = e.target;
    console.log("Field value:", value); // Log field value
    setState(value);
  };

  return (
    <div className="signup-page">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={signupVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Logo */}
      <div className="logo-container">
        <img src={logo} className="logo2" alt="Logo" />
      </div>

      {/* Signup Form */}
      <div className="signup-container">
        <h2>SIGN UP</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            className="signup-input"
            value={username}
            onChange={(e) => handleChange(e, setUsername)}
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="signup-input"
            value={email}
            onChange={(e) => handleChange(e, setEmail)}
          />

          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter Password"
              className="signup-input"
              value={password}
              onChange={(e) => handleChange(e, setPassword)}
            />
            <span
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
            </span>
          </div>

          <div className="password-container">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              className="signup-input"
              value={confirmPassword}
              onChange={(e) => handleChange(e, setConfirmPassword)}
            />
            <span
              className="toggle-password"
              onClick={toggleConfirmPasswordVisibility}
            >
              <FontAwesomeIcon
                icon={confirmPasswordVisible ? faEyeSlash : faEye}
              />
            </span>
          </div>

          {error && <p className="error-message">{error}</p>}
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}

          <button type="submit" className="signup-button">
            Create Account
          </button>

          
        </form>

        <p className="login">
          <b>Already have an account? </b>
          <a href="/">Login!</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
