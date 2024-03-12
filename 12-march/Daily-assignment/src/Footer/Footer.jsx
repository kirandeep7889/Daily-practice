// Footer.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../Footer/Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-media">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div className="website-description">
          <p>Stay connected with us on social media for updates and promotions.</p>
          <p>© 2024 Your Company. All rights reserved.</p>
        </div>
        <div className="additional-info">
          <p>Address: Jammu,India</p>
          <p>Email:kirandeep@gmail.com</p>
          <p>Phone: 7889313265</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
