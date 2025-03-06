import React from "react";
import Navbar from "../Header/Navbar"; // Ensure Navbar is properly imported
import Footer from "../Footer/Footer"; // Ensure Footer is properly imported
import "./WarrantyPolicy.css"; // Import the CSS for the page
import backgroundImage from "../../assets/Logo/login_background.png"; // Replace with actual background image path

const WarrantyPolicy: React.FC = () => {
  return (
    <div
      className="warranty-policy-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="warranty-content">
        <h1>Warranty & Policy</h1>
        <div className="policy-box">
          <ul>
            <li>
              All products include a manufacturer's warranty covering defects in
              materials and workmanship.
            </li>
            <li>
              Warranty periods and terms vary by product; check the product page
              for details.
            </li>
            <li>
              The warranty does not cover physical damage, liquid damage, or
              unauthorized repairs.
            </li>
            <li>
              To claim, contact us with proof of purchase and details of the
              issue.
            </li>
            <li>
              Approved claims will result in repair or replacement as per
              warranty terms.
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

export default WarrantyPolicy;
