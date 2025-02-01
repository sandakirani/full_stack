import React, { useState } from "react";
import Navbar from "../home/navbar";
import Footer from "../home/Footer";
import "./exchange.css";

const ReturnsRefunds: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };


  const sectionContent: Record<string, string> = {
    "Product defected": "If the product found is a defective, damaged, incorrect, incomplete condition at the time of the delivery or after can be replaced with the same product or we can offer you an exchange for another or we can offer you a refund.<br/><b>Note : Refund will be processing after confirmed the defect by the respective service center.</b>",
    "Change of mind": "If you have changed your mind and if you are able to provide satisfactory proof of purchase, we would like to offer you an exchange or refund. (If the item to be collected from the delivered location, will be charging Rs.500.00)",
    "Terms and conditions": `
      <ul>
        <li>The exchange or refund is sought within 4 days.</li>
        <li>Should be in a saleable condition.</li>
        <li>The product must include the original tags, user manual, warranty cards, freebies, and accessories.</li>
        <li>The replacement product will be released once the original product has been received.</li>
        <li>Accessories cannot be exchanged and/or refunded after purchase.</li>
        <li>Not subject to the exclusions listed below.</li>
        <ul>
            <li>Custom-made, monogrammed, and personalized products.</li>
            <li>If the package is opened (Mobile units for change of mind).</li>
            <li>Gift cards and gift vouchers.</li>
        <li>Delivered large electric items, furniture, or mattresses.</li>
        </ul>
       
      </ul>
    `,
    "Proof of purchase": "A valid proof of purchase (e.g., receipt or order confirmation) is required for all returns and refunds.",
    "Refund Tender": "Refunds for all purchases from Mysoftlogic.lk will be given using your original payment method. And the process will take 3- 4 working days.",
  };

  return (
    <div>
      <Navbar onUserIconClick={function (): void {
          throw new Error("Function not implemented.");
        }} />
      <div className="returns-container">
        <h1>Returns & Refunds</h1>
        <p>
          We have created our returns and refund policy to make your life easier and to
          experience something different. Kindly note the following refund policy is
          valid only for online purchases.
        </p>

        <div className="accordion">
          {[
            "Product defected",
            "Change of mind",
            "Terms and conditions",
            "Proof of purchase",
            "Refund Tender",
          ].map((section) => (
            <div key={section} className="accordion-item">
              <button className="accordion-header" onClick={() => toggleSection(section)}>
                {section}
              </button>
              {openSection === section && (
                <div className="accordion-content">
                  <p dangerouslySetInnerHTML={{ __html: sectionContent[section] }} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="newsletter">
          <h3>Sign up for Newsletter</h3>
          <p>Keep in Touch for Amazing Offers</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReturnsRefunds;
