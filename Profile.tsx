import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    
    <div className="account-container">
        
      <div className="account-section">
        <p onClick={() => navigate("/account")}> <span className="icon">👤</span> Personal Info </p>
        <p> <span className="icon">🔔</span> Notifications </p>
        <p> <span className="icon">📋</span> My Orders </p>
      </div>

      <div className="account-section">
        <p> <span className="icon">🔒</span> Change Password </p>
        <p> <span className="icon">🌍</span> Language <span className="lang">English (US)</span></p>
        <p> <span className="icon">❓</span> Help & Support </p>
      </div>

      <button className="logout-btn" >
        <span className="icon">↩️</span> LOGOUT
      </button>
    </div>
    
  );
};

export default Profile;
