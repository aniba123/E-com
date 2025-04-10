import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css'
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
        {/* Logo with Link */}
        <div className="navbar-logo">
          <Link to="/">ShopEase</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/products" className="nav-link" onClick={() => setIsOpen(false)}>Products</Link></li>
          <li><Link to="/catagories" className="nav-link" onClick={() => setIsOpen(false)}>Categories</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link></li>
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
              <FaSearch />
            </button>
          </div>
          <Link to="/cart" className="nav-icon">
            <FaShoppingCart />
            <span className="cart-count">0</span>
          </Link>
          <Link to="/account" className="nav-icon">
            <FaUser />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;