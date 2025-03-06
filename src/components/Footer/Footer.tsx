import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import "./Footer.css"; 
import logo from "../../assets/Logo/cwb.png";

const Footer: React.FC = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Function to handle Home and Warranty link click
  const handleLinkClick = (path: string) => {
    scrollToTop();
    navigate(path); // Navigating to the desired page
  };

  return (
    <>
      <footer className="footer-container">
        <section id="contact">
          <div className="footer-content">
            <div className="contact-info">
              <p><i>CELLULAR WORLD (Pvt) Ltd</i></p><br/><br/>
              <address>351 R. A. De Mel Mawatha, Colombo 00300</address>
              <table className="contact-table">
                <tbody>
                  <tr>
                    <td>Hotline</td>
                    <td>:</td>
                    <td>077748 9289</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>:</td>
                    <td>0112574475</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>:</td>
                    <td><a className="email" href="mailto:info@cellularworld.lk">info@cellularworld.lk</a></td>
                  </tr>
                </tbody>
              </table>
              <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="icon whatsapp">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
            <div className="l-container">
              <img src={logo} className="logofooter" alt="Logo" />
            </div>
            <div className="footer-links">
              <div className="Goto">
                <h4>Go to</h4>
                <ul>
                  <li><Link to="/home" onClick={() => handleLinkClick('/home')}>Home</Link></li> {/* Handle Home click */}
                  <li><Link to="/about" onClick={() => handleLinkClick('/about')}>About</Link></li>
                  <li><Link to="/home" onClick={() => handleLinkClick('/home')}>New Arrivals</Link></li>
                  <li><Link to="/wishlist" onClick={() => handleLinkClick('/wishlist')}>Wishlist</Link></li>
                  <li><a href="/contact" onClick={() => handleLinkClick('/contact')}>Contact</a></li>
                </ul>
              </div>
              <div className="customer">
                <h4>Customer Care</h4>
                <ul>
                  <li><Link to="/profile" onClick={() => handleLinkClick('/profile')}>My Account</Link></li>
                  <li><Link to="/ordertracking" onClick={() => handleLinkClick('/ordertracking')}>Track your Order</Link></li>
                  <li><Link to="/privacy" onClick={() => handleLinkClick('/privacy')}>Privacy Policy</Link></li>
                  <li><Link to="/condition" onClick={() => handleLinkClick('/condition')}>Terms and Conditions</Link></li>
                  <li><Link to="/exchange" onClick={() => handleLinkClick('/exchange')}>Exchanges and Refunds</Link></li>
                  <li><Link to="/warranty" onClick={() => handleLinkClick('/warranty')}>Warranty</Link></li> {/* Handle Warranty click */}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </footer>
      <div className="footer-bottom">
        <p>&copy; 2024 Cellular World (Pvt) Ltd. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
