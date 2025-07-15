import React from 'react';
import './Navbar.css';

const Navbar = ({ onTestClick }) => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><button onClick={onTestClick}>Test</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
