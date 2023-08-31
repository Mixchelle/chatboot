import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaBars } from 'react-icons/fa';
import logo from '../img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando os estilos do Bootstrap
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const isUserLoggedIn = () => {
    return !!localStorage.getItem('username');
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
  };

  const getUsername = () => {
    return localStorage.getItem('username');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
    <nav className="navbar navbar-expand-lg header">
      <div className="container">
        <Link className="logo" to="/home">
          <img src={logo} alt="Company Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
        <div className={` nav-menu collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/ConversationHistory"
                onClick={toggleMenu}
              >
                Conversation History
              </Link>
            </li>
            {isUserLoggedIn() ? (
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {getUsername()} <FaUser className="user-icon" />
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Login
                </Link>
              </li>
            )}
            {isUserLoggedIn() && (
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={handleLogout}>
                  Logout <FaSignOutAlt className="user-icon" />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  </div>
  
  );
};

export default Header;
