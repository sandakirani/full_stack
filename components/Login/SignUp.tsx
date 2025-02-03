import React, { useState } from "react";
import "./SignUp.css";
import logo from "../../assets/Logo/cw.png"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Signup: React.FC = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const navigate = useNavigate();
    return (
        <div className="signup-page">
            <div className="logo-container">
      <img src ={logo} className="logo2"/>
      </div>
            <div className="signup-container">

                <h2>SIGN UP</h2>
                <form className="signup-form">
                    <input
                        type="text"
                        placeholder="Enter Name"
                        className="signup-input"
                    />
                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="signup-input"
                    />
                
                    <div className="password-container">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Enter Password"
                            className="signup-input"
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
                        />
                        <span
                            className="toggle-password"
                            onClick={toggleConfirmPasswordVisibility}
                        >
                            <FontAwesomeIcon icon={confirmPasswordVisible ? faEyeSlash : faEye} />
                        </span>
                    </div>
                    <button type="submit" className="signup-button" onClick={() => navigate("/home")}>
                        Create Account
                    </button>
                </form>
                <p className="login">
                    <b>Already have an account? </b><a href="/">Login!</a>
                </p>
            </div> 
        </div>
    );
};

export default Signup;
