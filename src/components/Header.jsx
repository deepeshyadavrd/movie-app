import React from 'react';

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>🎬 MovieApp</h1>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.input}
      />
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
