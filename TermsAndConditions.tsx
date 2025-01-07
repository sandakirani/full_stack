import React, { useState } from "react";
import Navbar from "../home/navbar";
import Footer from "../home/Footer";
import "./TermsAndConditions.css";
import backgroundImage from "../assets/login_background.png";

const terms = [
  {
    title: "Eligibility",
    content: `• You must be at least 18 years old to make a purchase.\n• By placing an order, you confirm that all information provided is accurate and complete.`,
  },
  {
    title: "Use of the Website",
    content: `• This website and its content are intended for personal, non-commercial use.\n• Any unauthorized reproduction, distribution, or modification of the content is strictly prohibited.`,
  },
  {
    title: "Product Information",
    content: `• We make every effort to ensure product descriptions, images, and specifications are accurate. However, slight variations may occur.\n• All products are subject to availability. If a product is unavailable, we will notify you promptly and provide alternatives or a full refund.`,
  },

];

const TermsConditions: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="terms-conditions-page"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)", 
        color: "#fff"
        
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="terms-conditions-content">
        <h1>Terms & Conditions</h1>
        <p>
          Welcome to Cellular World. By using this website, you agree to comply
          with and be bound by these terms and conditions. If you do not agree
          with any part of these terms, please discontinue use of the website
          immediately.
        </p>
        <div className="terms-list">
          {terms.map((term, index) => (
            <div key={index} className="term-item">
              <div
                className="term-header"
                onClick={() => handleToggle(index)}
              >
                <span>{term.title}</span>
                <button className="toggle-btn">
                  {activeIndex === index ? "-" : "+"}
                </button>
              </div>
              {activeIndex === index && (
                <div className="term-popup">
                  <p>{term.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsConditions;
