import React, { useState } from 'react';
import './Header.css';

const popularSearches = [
  "Inception", "Interstellar", "Avengers", "The Dark Knight", "Fight Club"
];

const Header = ({ searchQuery, setSearchQuery }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>🎬 MovieApp</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.input}
        onFocus={() => setShowSuggestions(true)}
  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} 
      />
      {showSuggestions && (
  <div className="suggestions-popup">
    {popularSearches.map((title, idx) => (
      <div key={idx} className="suggestion-item" onClick={() => handleSearch(title)}>
        {title}
      </div>
    ))}
  </div>
)}
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#222',
    color: '#fff',
  },
  logo: { margin: 0 },
  input: {
    padding: '8px',
    fontSize: '16px',
    width: '250px',
    borderRadius: '4px',
    border: 'none',
  },
};

export default Header;
