import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css"; 
import logo from "../../assets/Logo/cwb.png";
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
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
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/home">New Arrivals</Link></li>
                  <li><Link to="/wishlist">Wishlist</Link></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="customer">
                <h4>Customer Care</h4>
                <ul>
                  <li><Link to="/profile">My Account</Link></li>
                  <li><Link to="/ordertracking">Track your Order</Link></li>
                  <li><Link to="/privacy">Privacy Policy</Link></li>
                  <li><Link to="/condition">Terms and Conditions</Link></li>
                  <li><Link to="/exchange">Exchanges and Refunds</Link></li>
                  <li><Link to="/warranty">Warranty</Link></li>
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
