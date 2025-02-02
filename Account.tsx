import React from "react";
import { useNavigate } from "react-router-dom";
import './Account.css';


const Account: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className="login-page">
      
      <div className="login-container3">
        <h2>User Name </h2>
        
        <div className="profile-container">
      <p className="profile-text">user name</p>
      <p className="profile-text">user@gmail.com</p>
      <p className="profile-text">071 xxxxxxxx</p>
      <p className="profile-text">password</p>
      </div>
         
        <button className="btn" onClick={() => navigate("/editacc")}>
          EDIT PROFILE
        </button>

      </div>
    </div>
  );
};

export default Account;
