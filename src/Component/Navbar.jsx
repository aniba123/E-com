import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { HiBars3CenterLeft } from "react-icons/hi2";

// import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'; // Assuming you have a CSS file for styling
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">ShopEase</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <ImCross />: <HiBars3CenterLeft />
          }
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/products" className="nav-link">Products</a></li>
          <li><a href="/categories" className="nav-link">Categories</a></li>
          <li><a href="/about" className="nav-link">About</a></li>
          <li><a href="/contact" className="nav-link">Contact</a></li>
        </ul>

        {/* Icons */}
        <div className="nav-icons">
          <div className={`search-container ${searchOpen ? 'active' : ''}`}>
            <input 
              type="text" 
              placeholder="Search products..." 
              className={`search-input ${searchOpen ? 'active' : ''}`}
            />
            <button className="search-btn" onClick={toggleSearch}>
            <CiSearch />


            </button>
          </div>
          <a href="/cart" className="nav-icon">
            {/* <FaShoppingCart /> */}
            <FaShoppingCart />
            <span className="cart-count">0</span>
          </a>
          <a href="/account" className="nav-icon">
            {/* <FaUser /> */}
            <FaUserAlt />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;