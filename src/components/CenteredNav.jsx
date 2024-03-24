import React from 'react';
import { FaUser } from 'react-icons/fa';
import '../styles/CenteredNav.css'; // Import your CSS file for styling
import Logo from '../imgs/borcelle.gif'
const CenteredNav = () => {
  return (
    <div className="navbar">
      <div className="left">
        <FaUser className="user-icon" />
      </div>
      <div className="center">
        <a href="#" className="nav-link">צור קשר</a>
        <a href="#" className="nav-link">דף הבית</a>
        <a href="#" className="nav-link">אודות</a>
      </div>
      <div className="right">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default CenteredNav;