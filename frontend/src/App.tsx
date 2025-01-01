import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./components/SignUp"; // Path to your Signup.tsx
import HomePage from "./components/Home";
import AboutUs from "./components/AboutUs"


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        
      </Routes>
    </Router>
  );
};

export default App;
