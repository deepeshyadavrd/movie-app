import React from 'react';
import { useParams } from 'react-router-dom';

const movies = {
  1: { title: "Inception", year: 2010, director: "Christopher Nolan" },
  2: { title: "Interstellar", year: 2014, director: "Christopher Nolan" },
};

export default function MovieDetails() {
  const { id } = useParams();
  const movie = movies[id];

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Year: {movie.year}</p>
      <p>Director: {movie.director}</p>
    </div>
  );
}
