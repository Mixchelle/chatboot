import React from 'react';
import { Link } from 'react-router-dom';
import {  FaUser } from 'react-icons/fa';
import logo from '../img/logo.png';

import './Header.css';

const Header = () => {
  const isUserLoggedIn = () => {
    // Verifica se o usuário está logado
    const username = localStorage.getItem('username');
    return !!username; // Retorna true se o username existir
  };

  const getUsername = () => {
    // Obtém o nome do usuário do localStorage
    return localStorage.getItem('username');
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="login-button">
        {isUserLoggedIn() ? (
          <h4>
            {getUsername()}
            {'  '}
            <FaUser className="user-icon" />
            </h4>
            
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
