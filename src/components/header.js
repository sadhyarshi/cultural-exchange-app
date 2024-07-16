// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Import your CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Cultural Exchange</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/stories">Stories</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
          {/* Add more links as per your app's sections */}
        </ul>
      </nav>
      <div className="profile">
        <Link to="/profile">Profile</Link>
      </div>
    </header>
  );
};

export default Header;
