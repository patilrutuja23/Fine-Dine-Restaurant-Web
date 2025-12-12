import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Fine Dine</h3>
          <p>Experience culinary excellence</p>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <p><FaPhone /> +1 (555) 123-4567</p>
            <p><FaEnvelope /> info@finedine.com</p>
            <p><FaMapMarkerAlt /> 123 Gourmet Street, Food City</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#facebook"><FaFacebook /></a>
            <a href="#instagram"><FaInstagram /></a>
            <a href="#twitter"><FaTwitter /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Hours</h4>
          <p>Lunch: 12:00 PM - 3:00 PM</p>
          <p>Dinner: 6:00 PM - 11:00 PM</p>
          <p>Closed Mondays</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Fine Dine. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
