// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = ({ onSearch }) => {
  return (
    <header className="main-header">
      <div className="logo">🎬 Movie Explorer</div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#">Top Rated</a>
      </nav>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search movies..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Header;
