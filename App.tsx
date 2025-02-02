import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./component/Profile";
import Account from "./component/Account";
import EditAccount from "./component/EditAccount"; 

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Profile />} />
        <Route path="/account" element={<Account />} />
        <Route path="/editacc" element={<EditAccount/>} />
      </Routes>
    </Router>
  );
};

export default App;
