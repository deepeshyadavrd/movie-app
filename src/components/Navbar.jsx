import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">🎬 MyMovieApp</div>
    <ul className="nav-links">
      <li>Home</li>
      <li>Genres</li>
      <li>Top Rated</li>
      <li>About</li>
    </ul>
  </nav>
);

export default Navbar;
