import React, { useState } from 'react';

const movieData = [
  { title: 'Inception', image: '/images/slide2.jpg', rating: 8.8 },
  { title: 'Interstellar', image: '/images/slide3.jpg', rating: 8.6 },
  { title: 'Minecraft', image: '/images/slide1.jpg', rating: 7.9 },
];

const SearchPage = ({ query }) => {
  const filteredMovies = movieData.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-result" style={{ padding: '20px' }}>
      <h2>Search Results for "{query}"</h2>
      <div className="movie-list" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, idx) => (
            <div className="movie-card" key={idx} style={styles.card}>
              <img src={movie.image} alt={movie.title} style={styles.image} />
              <h3>{movie.title}</h3>
              <p>⭐ {movie.rating}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};


const styles = {
  card: {
    width: '200px',
    padding: '10px',
    backgroundColor: '#f1f1f1',
    borderRadius: '8px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '280px',
    objectFit: 'cover',
    borderRadius: '6px',
  },
};

export default SearchPage;
