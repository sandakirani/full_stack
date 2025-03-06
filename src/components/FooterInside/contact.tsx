import React from 'react';
import Navbar from '../Header/Navbar'; // Adjust the path as needed
import Footer from '../Footer/Footer'; // Adjust the path as needed
import './contact.css';

import backgroundImage from "../../assets/Logo/login_background.png"; // Replace with actual background image path

const contact: React.FC = () => {
  return (
    <div
      className="warranty-policy-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="warranty-content">
        <h1>Contact us</h1>
        <div className="policy-box">
          <h4>CELLULAR WORLD (Pvt) Ltd</h4>
          <ul>
          <li>
            Address	:	351 R. A. De Mel Mawatha, Colombo 00300

            </li>
            <li>
            Hotline	:	077748 9289


            </li>
            <li>
            Phone	:	0112574475
            </li>
           
           
          </ul>
          <p>
            For assistance, reach us at{" "}
            <a href="mailto:info@cellularworld.lk">info@cellularworld.lk</a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};


export default contact;
