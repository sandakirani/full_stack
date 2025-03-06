import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    setShowPopup(true);

    // Redirect to home after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div className="checkout-container">
      <h2 className="section-title">BILLING DETAILS</h2>

      <label>First name *</label>
      <input type="text" className="input-field" />

      <label>Last name *</label>
      <input type="text" className="input-field" />

      <label>Country / Region *</label>
      <p className="country-name">Sri Lanka</p>

      <label>Street address *</label>
      <input type="text" placeholder="House number and street name" className="input-field" />

      <label>Town / City *</label>
      <input type="text" className="input-field" />

      <label>Phone *</label>
      <input type="text" className="input-field" />

      <label>Email address *</label>
      <input type="email" className="input-field" />

      <button className="checkout-button" onClick={handleCheckout}>
        Checkout
      </button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Order Placed Successfully!</h3>
            <p>You will be redirected to the home page shortly.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
