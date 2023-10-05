import React, { useState } from 'react';
import '../styles/MovieList.css';
import MovieWindow from './MovieWindow';

function MovieList() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movies = [
    {
      title: 'Movie 1',
      genre: 'Action',
      year: 2020,
      duration: '2h 15m',
      imageUrl: 'placeholder-poster.jpg',
      description: 'A thrilling action movie about...',
      youtubeTrailerLink: 'https://www.youtube.com/watch?v=your-trailer-link-2',
      status: 'Current'
    },
    {
      title: 'Movie 2',
      genre: 'Comedy',
      year: 2019,
      duration: '1h 45m',
      imageUrl: 'placeholder-poster.jpg',
      description: 'A hilarious comedy that will make you laugh...',
      youtubeTrailerLink: 'https://www.youtube.com/watch?v=your-trailer-link-2',
      status: 'Current',
    },
    {
      title: 'Movie 3',
      genre: 'Drama',
      year: 2021,
      duration: '2h 30m',
      imageUrl: 'placeholder-poster.jpg',
      description: 'An emotional drama that will tug at your heartstrings...',
      youtubeTrailerLink: 'https://www.youtube.com/watch?v=your-trailer-link-2',
      status: 'Archived',
    },
    {
      title: 'Movie 4',
      genre: 'Science Fiction',
      year: 2018,
      duration: '2h 10m',
      imageUrl: 'placeholder-poster.jpg',
      description: 'An epic science fiction adventure in a distant galaxy...',
      youtubeTrailerLink: 'https://www.youtube.com/watch?v=your-trailer-link-2',
      status: 'Archived',
    },
    {
      title: 'Movie 5',
      genre: 'Horror',
      year: 2022,
      duration: '1h 55m',
      imageUrl: 'placeholder-poster.jpg',
      description: 'A spine-tingling horror experience that will haunt your dreams...',
      youtubeTrailerLink: 'https://www.youtube.com/watch?v=your-trailer-link-2',
      status: 'Upcoming',
    },
    {
      title: 'Movie 6',
      genre: 'Adventure',
      year: 2021,
      duration: '2h 20m',
      imageUrl: 'placeholder-poster.jpg',
      description: 'An exciting adventure in search of hidden treasures...',
      youtubeTrailerLink: 'https://www.youtube.com/watch?v=your-trailer-link-2',
      status: 'Upcoming',
    },
  ];

  const openMovieWindow = (movie) => {
    setSelectedMovie(movie);
  };

  const closeMovieWindow = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="movie-list">
      <h1>Movie List</h1>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <div key={index} className="movie-item">
            <div className="movie-content">
              <div className="movie-image">
                <img src={movie.imageUrl} alt={movie.title} />
              </div>
              <div className="movie-details">
                <h3>{movie.title}</h3>
                <p>Genre: {movie.genre}</p>
                <p>Year: {movie.year}</p>
                <p>Duration: {movie.duration}</p>
              </div>
            </div>
            <div className="movie-description">
              <p>{movie.description}</p>
              <div className="details-button-container">
                <button className="details-button" onClick={() => openMovieWindow(movie)}>
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
