import React, { useState } from 'react';

const movieData = [
  { title: 'Inception', image: '/images/inception.jpg', rating: 8.8 },
  { title: 'Interstellar', image: '/images/interstellar.jpg', rating: 8.6 },
  { title: 'Dunkirk', image: '/images/dunkirk.jpg', rating: 7.9 },
];

const SearchPage = () => {
  const [query, setQuery] = useState('');

  const filteredMovies = movieData.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-page">
      <h2>Search Movies</h2>
      <input
        type="text"
        placeholder="Type movie name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="movie-results">
        {filteredMovies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>⭐ {movie.rating}</p>
          </div>
        ))}
        {filteredMovies.length === 0 && <p>No movies found.</p>}
      </div>
    </div>
  );
};

export default SearchPage;
