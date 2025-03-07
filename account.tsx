import React from "react";
import { useNavigate } from "react-router-dom";
import './Account.css';

const Account: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="login-page1">
      <div className="login-container3">
        <h2>Account Details</h2>

        <div className="profile-container">
          <p className="profile-text">user name</p>
          <p className="profile-text">user@gmail.com</p>
          <p className="profile-text">071 xxxxxxxx</p>
          <p className="profile-text">password</p>
        </div>

        <button className="btnprofile" onClick={() => navigate("/editacc")}>
          EDIT PROFILE
        </button>
      </div>
    </div>
  );
};

export default Account;
