import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login"; // Path to your Login.tsx
import Signup from "./components/SignUp"; // Path to your Signup.tsx
import HomePage from "./components/Home";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        
      </Routes>
    </Router>
  );
};

export default App;
