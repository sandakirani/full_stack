import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../db'; // Import the createOrder function from db.tsx
import './CheckoutPage.css';

const CheckoutPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    townCity: '',
    phone: '',
    email: '',
  });
  const navigate = useNavigate();

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle checkout and create order
  const handleCheckout = async () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.streetAddress ||
      !formData.townCity ||
      !formData.phone ||
      !formData.email
    ) {
      alert('Please fill in all required fields!');
      return;
    }

    const order = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      streetAddress: formData.streetAddress,
      townCity: formData.townCity,
      phone: formData.phone,
      email: formData.email,
      status: 'Pending', // You can modify the order status as needed
    };

    try {
      await createOrder(order);
      alert('Order placed successfully!');
      setShowPopup(true);

      // Redirect to home after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Error creating order:', error);
      alert('There was an error placing your order. Please try again.');
    }
  };

  return (
    <div className="checkout-container">
      <h2 className="section-title">BILLING DETAILS</h2>

      <label>First name *</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        className="input-field"
      />

      <label>Last name *</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        className="input-field"
      />

      <label>Country / Region *</label>
      <p className="country-name">Sri Lanka</p>

      <label>Street address *</label>
      <input
        type="text"
        name="streetAddress"
        value={formData.streetAddress}
        onChange={handleInputChange}
        placeholder="House number and street name"
        className="input-field"
      />

      <label>Town / City *</label>
      <input
        type="text"
        name="townCity"
        value={formData.townCity}
        onChange={handleInputChange}
        className="input-field"
      />

      <label>Phone *</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        className="input-field"
      />

      <label>Email address *</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className="input-field"
      />

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
