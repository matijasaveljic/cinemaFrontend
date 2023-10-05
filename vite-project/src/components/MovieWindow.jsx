import React from 'react';
import '../styles/MovieWindow.css';
import YouTube from 'react-youtube';

function MovieWindow({ movie, onClose }) {
  const youtubeOpts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="movie-window">
      <div className="movie-window-content">
        <div className="title-bar">
          <h2>{movie.title}</h2>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="movie-details">
          <div className="movie-image">
            <img src={movie.imageUrl} alt={movie.title} />
          </div>
          <div className="movie-description">
            <p>Genre: {movie.genre}</p>
            <p>Year: {movie.year}</p>
            <p>Duration: {movie.duration}</p>
            <p>Description: {movie.description}</p>
            <p>
              <a href={movie.youtubeTrailerLink} target="_blank" rel="noopener noreferrer">
                Watch Trailer
              </a>
            </p>
          </div>
        </div>
        <div className="youtube-video">
          <YouTube videoId={movie.youtubeTrailerLink.split('v=')[1]} opts={youtubeOpts} />
        </div>
      </div>
    </div>
  );
}

export default MovieWindow;
