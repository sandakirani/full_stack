import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './UserPopup.css';

interface UserPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserPopup: React.FC<UserPopupProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate(); // Initialize navigation function

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Sign in</h2>
        <form>
          <label>Username or email address *</label>
          <input type="text" required />

          <label>Password *</label>
          <input type="password" required />

          <button type="submit" className="login-btn">LOG IN</button>

          <div className="divider">OR LOGIN WITH</div>
          <button className="google-login">Google</button>
        </form>
        
        <p>No account yet?  
          <a 
            href="#" 
            onClick={(e) => { 
              e.preventDefault(); // Prevent default anchor behavior
              navigate('/signup'); // Navigate to signup page
            }}
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserPopup;
