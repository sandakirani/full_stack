import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import "./TermsAndConditions.css";

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
  {
    title: "Pricing Policy",
    content: `• Prices listed on the website are in [currency] and include applicable taxes unless stated otherwise.\n• We reserve the right to change prices without prior notice.\n• In the event of a pricing error, we will contact you for confirmation before proceeding with the order.`,
  },
  {
    title: "Payment Terms",
    content: `• We accept COD.\n• Payments must be made in full at the time of purchase.`,
  },
  {
    title: "Order Processing and Shipping",
    content: `• Orders are processed within [X business days].\n• Shipping times may vary depending on your location and the courier service.\n• Delivery estimates are not guaranteed, and delays may occur due to unforeseen circumstances.`,
  },
  {
    title: "Return and Refund Policy",
    content: `• Returns are accepted within 5  days of receipt if the product is unused, undamaged, and in its original packaging.\n• Refunds will be issued to the original payment method after the returned product is inspected.\n• For defective or damaged items, please contact us immediately with proof of purchase and photos of the damage.`,
  },
  {
    title: "Warranty",
    content: `• Products may include warranties as provided by the manufacturer.\n• Warranty claims must adhere to the manufacturer's terms and conditions.`,
  },
  {
    title: "Limitation of Liability",
    content: `• We are not liable for any indirect, incidental, or consequential damages arising from the use of our products or website.\n• Our liability is limited to the amount paid for the product.`,
  },
  {
    title: "Intellectual Property",
    content: `• All content on this website, including text, graphics, logos, and images, is the property of Cellular World and is protected by copyright laws.\n• You may not use any content without prior written consent.`,
  },
  {
    title: "Privacy and Security",
    content: `• We are committed to protecting your personal information. Please refer to our Privacy Policy for details on data collection, use, and protection.`,
  },
  {
    title: "Amendments to Terms",
    content: `• We reserve the right to update or modify these terms and conditions at any time.\n• Changes will be effective immediately upon posting. Your continued use of the website indicates your acceptance of the revised terms.`,
  },
  {
    title: "Governing Law",
    content: `• These terms are governed by the laws of Sri  Lanka. Any disputes arising from these terms will be resolved in the courts`,
  },
  {
    title: "Contact Information",
    content: `• If you have questions about these terms, please contact us:\n  Email: info@cellularworld.lk\n`,
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
    >
      
      <Navbar />

     
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


      <Footer />
    </div>
  );
};

export default TermsConditions;
