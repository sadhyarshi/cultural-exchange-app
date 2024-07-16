// Footer.js

import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Cultural Exchange. All rights reserved.</p>
        <div className="social-links">
          <a href="https://twitter.com/culturalexchange" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com/culturalexchange" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com/culturalexchange" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="legal-links">
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
