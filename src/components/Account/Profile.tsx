import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import Account from './Account'; // Assuming the Account page is a separate component
import './Profile.css';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [showHelpPopup, setShowHelpPopup] = useState(false);

  const handleLogout = () => {
    // Add logout logic here
    navigate("/login"); // Redirect to the login page after logout
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const openHelpPopup = () => {
    setShowHelpPopup(true);
  };

  const closeHelpPopup = () => {
    setShowHelpPopup(false);
  };

  return (
    <div className="profile-page">
      <Navbar />

      <div className="profile-container">
        <div className="account-section">
          <p onClick={openPopup}> <span className="icon">👤</span> Personal Info </p>
          <p> <span className="icon">📋</span> My Orders </p>
          <p> <span className="icon">🔒</span> Change Password </p>
          <p> <span className="icon">🌍</span> Language <span className="lang">English (US)</span></p>
          <p onClick={openHelpPopup}> <span className="icon">❓</span> Help & Support </p>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          <span className="icon">↩️</span> LOGOUT
        </button>
      </div>

      {showPopup && (
        <div className="popup-background">
          <div className="popup-container">
            <Account />
            <button className="close-popup-btn" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      {showHelpPopup && (
        <div className="popup-background">
          <div className="popup-container">
            <p className="one">Call this number for immediate service: <strong>0777489289</strong></p>
            <button className="close-popup-btn" onClick={closeHelpPopup}>Close</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Profile;
