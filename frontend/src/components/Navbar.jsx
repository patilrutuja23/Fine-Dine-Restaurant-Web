import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Fine Dine
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#hero" className="nav-link" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" className="nav-link" onClick={closeMenu}>
            About
          </a>
          <a href="#menu" className="nav-link" onClick={closeMenu}>
            Menu
          </a>
          <a href="#team" className="nav-link" onClick={closeMenu}>
            Team
          </a>
          <a href="#reservation" className="nav-link" onClick={closeMenu}>
            Reservation
          </a>
          <Link to="/reservation" className="nav-link btn-primary" onClick={closeMenu}>
            Book Now
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
