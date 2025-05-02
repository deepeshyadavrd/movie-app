import React, { useState } from 'react';
import Header from './components/Header';
import MovieSlider from './pages/Home';
import MovieList from './pages/MovieDetails';
import SearchPage from './components/SearchPage';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock movie data
  const movies = [
    { title: 'Inception', image: '/images/inception.jpg' },
    { title: 'Interstellar', image: '/images/interstellar.jpg' },
    { title: 'Dunkirk', image: '/images/dunkirk.jpg' }
  ];

  // Filter by search
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header onSearch={setSearchTerm} />
      <MovieSlider movies={movies} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
