import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ImageSlider from '../components/ImageSlider';
// import CategoryList from '../components/CategoryList';

const movies = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "Interstellar", year: 2014 },
];

export default function Home() {
  return (
    <>
    <Navbar />
    <ImageSlider />
    <SearchBar />
    {/* <CategoryList /> */}
    <div>
      <h1>Movie List</h1>
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>{movie.title} ({movie.year})</Link>
        </div>
      ))}
    </div>
    </>
  );
}
