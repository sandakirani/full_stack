import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Changepw from "./component/ChangePassword";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Changepw />} />
        
      </Routes>
    </Router>
  );
};

export default App;