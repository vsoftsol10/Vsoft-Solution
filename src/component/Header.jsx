import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from '../assets/vslogo_new.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navRef.current && 
        !navRef.current.contains(event.target) &&
        !event.target.classList.contains('hamburger') &&
        !event.target.parentElement?.classList.contains('hamburger')
      ) {
        setMenuOpen(false);
        setActiveDropdown(null);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Service options for dropdown
  const serviceOptions = [
    {
      name: "Our Services",
      dropdown: [
        { name: "Website Development", path: "/services/website-development" },
        { name: "App Development", path: "/services/app-development" },
        { name: "WordPress Development", path: "/services/wordpress-development" },
        { name: "Digital Marketing", path: "/services/digital-marketing" },
        { name: "UI/UX Designing", path: "/services/ui-ux-design" }
      ]
    }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="VSoft Solutions" className="logo-image" />
          </Link>
        </div>
        
        <div className={`nav-wrapper ${menuOpen ? "menu-open" : ""}`}>
          <nav ref={navRef} className="navigation">
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/home" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About us</Link>
              </li>
              <li className="nav-item dropdown-parent">
                <button 
                  className="nav-link dropdown-toggle"
                  onClick={() => toggleDropdown(0)}
                  aria-expanded={activeDropdown === 0}
                >
                  Our Services <span className="dropdown-arrow">▼</span>
                </button>
                <ul className={`dropdown-menu ${activeDropdown === 0 ? "show" : ""}`}>
                  {serviceOptions[0].dropdown.map((item, index) => (
                    <li key={index} className="dropdown-item">
                      <Link to={item.path} className="dropdown-link">{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/career" className="nav-link">Career</Link>
              </li>
              <li className="nav-item contact-btn-container">
                <Link to="/contact" className="contact-btn">Contact us</Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="hamburger-container">
          <button 
            className={`hamburger-btn ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;