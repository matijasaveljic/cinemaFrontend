import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/MovieList.css';
import MovieWindow from './MovieWindow';

function MovieList() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = '16d825ffcd33bd02dd870115facebafe'; // Your TMDb API key
      const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

      try {
        const response = await axios.get(apiUrl);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, []);

  const openMovieWindow = (movie) => {
    setSelectedMovie(movie);
  };

  const closeMovieWindow = () => {
    setSelectedMovie(null);
  };

  // Function to truncate text to the first 70 characters
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className="movie-list">
      <h1>Movie List</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <div className="movie-content">
              <div className="movie-image">
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
              <div className="movie-details">
                <h3>{movie.title}</h3>
                <p>Genre: {movie.genre}</p>
                <p>Year: {movie.release_date}</p>
                <p>Duration: {movie.runtime} minutes</p>
              </div>
            </div>
            <div className="movie-description">
              <p>{truncateText(movie.overview, 70)}</p>
              <div className="details-button-container">
                <button
                  className="details-button"
                  onClick={() => openMovieWindow(movie)}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <MovieWindow movie={selectedMovie} onClose={closeMovieWindow} />
      )}
    </div>
  );
}

export default MovieList;
