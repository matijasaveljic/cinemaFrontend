import React from 'react';
import "../styles/MovieList.css";

function MovieList() {
  const movies = [
    {
      title: 'Movie 1',
      genre: 'Action',
      year: 2020,
      duration: '2h 15m',
      imageUrl: 'movie1.jpg',
    },
    {
      title: 'Movie 2',
      genre: 'Comedy',
      year: 2019,
      duration: '1h 45m',
      imageUrl: 'movie2.jpg',
    },
    {
      title: 'Movie 3',
      genre: 'Drama',
      year: 2021,
      duration: '2h 30m',
      imageUrl: 'movie3.jpg',
    },
    {
      title: 'Movie 4',
      genre: 'Science Fiction',
      year: 2018,
      duration: '2h 10m',
      imageUrl: 'movie4.jpg',
    },
    {
      title: 'Movie 5',
      genre: 'Horror',
      year: 2022,
      duration: '1h 55m',
      imageUrl: 'movie5.jpg',
    },
    {
      title: 'Movie 6',
      genre: 'Adventure',
      year: 2021,
      duration: '2h 20m',
      imageUrl: 'movie6.jpg',
    },
  ];

  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <div key={index} className="movie-item">
            <img src={movie.imageUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Year: {movie.year}</p>
            <p>Duration: {movie.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
