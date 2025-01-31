import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Changepw from "./component/ChangePassword";
import SecondChangepw from "./component/SecondChangePassword";
import Forgetpw from "./component/ForgetPassword";
import SecondForgetpw from "./component/SecondForgetPassword";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Changepw />} />
        <Route path="/secondcpw" element={<SecondChangepw />} />
        <Route path="/Forgetpw" element={<Forgetpw/>}/>
        <Route path="/secondfpw" element={<SecondForgetpw/>}/>
      </Routes>
    </Router>
    
  );
};

export default App;