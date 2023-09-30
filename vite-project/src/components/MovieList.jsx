import React from 'react';

function MovieList() {
  const movies = [
    { title: 'Movie 1', director: 'Director 1' },
    { title: 'Movie 2', director: 'Director 2' },
  ];

  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <strong>{movie.title}</strong> - {movie.director}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
