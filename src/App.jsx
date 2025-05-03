import React, { useState } from 'react';
import Header from './components/Header';
import MovieSlider from './pages/Home';
import SearchPage from './components/SearchPage';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');


  return (
    <div>
      
      
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <MovieSlider />
      {searchQuery.trim() !== '' && (
        <div className="search-overlay">
          <SearchPage query={searchQuery} />
        </div>
      )}
    </div>
  );
}

export default App;
