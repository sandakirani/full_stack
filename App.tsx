import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Changepw from "./component/ChangePassword";
import SecondChangepw from "./component/SecondChangePassword";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Changepw />} />
        <Route path="/secondcpw" element={<SecondChangepw />} />
      </Routes>
    </Router>
  );
};

export default App;