import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Login/SignUp";
import HomePage from "./components/Home/Home";
import ApplePage from './components/Products/Apple';
import SamsungPage from './components/Products/Samsung';
import PixelPage from './components/Products/Pixel';
import XiaomiPage from './components/Products/Xiaomi';
import VivoPage from './components/Products/Vivo';
import AppleProductPage from './components/Products/AppleProducts';
import SamsungProductPage from './components/Products/SamsungProducts';
import PixelProductPage from './components/Products/PixelProducts';
import XiaomiProductPage from './components/Products/XiaomiProducts';
import VivoProductPage from './components/Products/VivoProducts';
import Aboutus from './components/FooterInside/AboutUs';
import Ordertrack from './components/Order/OrderTracking';
import Privacy from './components/FooterInside/PrivacyPolicy';
import Terms from './components/FooterInside/TermsAndConditions';

const App: React.FC = () => {
  const orderHistory = [
    { orderNumber: "12345", deliveryStatus: "Delivered" },
    { orderNumber: "67890", deliveryStatus: "Processing" },
    { orderNumber: "54321", deliveryStatus: "Shipped" },
  ];

  const orderDataList = [
    {
      orderNumber: "12345",
      orderDate: "2025-01-01",
      name: "John Doe",
      address: "123 Main St, Springfield",
      totalAmount: "$150.00",
      deliveryMethod: "Normal Delivery",
      paymentMethod: "Credit Card",
      orderStatus: "Delivered",
      orderStatusHistory: [
        { status: "Order Placed", date: "2025-01-01" },
        { status: "Processing", date: "2025-01-02" },
        { status: "Delivered", date: "2025-01-03" },
      ],
      deliveryDate: "2025-01-03",
    },
    {
      orderNumber: "67890",
      orderDate: "2025-01-02",
      name: "Jane Smith",
      address: "456 Elm St, Metropolis",
      totalAmount: "$200.00",
      deliveryMethod: "Fast Delivery",
      paymentMethod: "PayPal",
      orderStatus: "Processing",
      orderStatusHistory: [
        { status: "Order Placed", date: "2025-01-02" },
        { status: "Processing", date: "2025-01-02" },
      ],
      deliveryDate: "2025-01-03",
    },
    {
      orderNumber: "54321",
      orderDate: "2025-01-03",
      name: "Alice Johnson",
      address: "789 Oak St, Gotham",
      totalAmount: "$300.00",
      deliveryMethod: "Normal Delivery",
      paymentMethod: "Debit Card",
      orderStatus: "Processing",
      orderStatusHistory: [
        { status: "Order Placed", date: "2025-01-03" },
        { status: "Processing", date: "2025-01-04" },
      ],
      deliveryDate: "2025-01-06",
    },
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedOrderNumber, setSelectedOrderNumber] = useState<string | undefined>();

  // Function to handle user login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to select an order
  const handleOrderSelect = (orderNumber: string) => {
    setSelectedOrderNumber(orderNumber);
    console.log("Order selected:", orderNumber);
  };

  return (
    <Router>
      <Routes>
        {/* Default route loads HomePage if logged in, otherwise redirects to Login */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/home" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Login and Signup Routes */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main Pages */}
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <HomePage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/apple" element={<ApplePage />} />
        <Route path="/samsung" element={<SamsungPage />} />
        <Route path="/pixel" element={<PixelPage />} />
        <Route path="/xiaomi" element={<XiaomiPage />} />
        <Route path="/vivo" element={<VivoPage />} />
        <Route path="/appleProducts/:id" element={<AppleProductPage />} />
        <Route path="/samsungProducts/:id" element={<SamsungProductPage />} />
        <Route path="/pixelProducts/:id" element={<PixelProductPage />} />
        <Route path="/xiaomiProducts/:id" element={<XiaomiProductPage />} />
        <Route path="/vivoProducts/:id" element={<VivoProductPage />} />
        <Route path="/about" element={<Aboutus />} />

        {/* Order Tracking */}
        <Route
          path="/ordertracking"
          element={
            isLoggedIn ? (
              <Ordertrack
                isLoggedIn={isLoggedIn}
                selectedOrderNumber={selectedOrderNumber}
                orderDataList={orderDataList}
                orderHistory={orderHistory}
                onSelectOrder={handleOrderSelect}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/condition" element={<Terms />} />
      </Routes>
    </Router>
  );
};

export default App;
