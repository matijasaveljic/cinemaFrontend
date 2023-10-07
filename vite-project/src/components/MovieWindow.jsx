import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/MovieWindow.css'; // Import styles using CSS Modules
import YouTube from 'react-youtube';

function MovieWindow({ movie, onClose }) {
  const [additionalData, setAdditionalData] = useState(null);

  useEffect(() => {
    const fetchGenre = async () => {
      const apiKey = '16d825ffcd33bd02dd870115facebafe'; // Your TMDb API key
      const apiUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&append_to_response=videos,genres`;

      try {
        const response = await axios.get(apiUrl);
        setAdditionalData(response.data);
      } catch (error) {
        console.error('Error fetching additional data:', error);
      }
    };

    fetchGenre();
  }, [movie.id]);

  const youtubeOpts = {
    height: '240', // Change the height as needed
    width: '426',  // Change the width as needed
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className={styles.movieWindow}> {/* Use CSS Modules for class names */}
      <div className={styles.movieWindowContent}> {/* Use CSS Modules for class names */}
        <button className={styles.closeButton} onClick={onClose}> {/* Use CSS Modules for class names */}
          Close
        </button>
        <div className={styles.movieDetails}> {/* Use CSS Modules for class names */}
          <div className={styles.movieImage}>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <p>Poster not available</p>
            )}
          </div>
          <div className={styles.movieInfo}> {/* Use CSS Modules for class names */}
            <p>Genre: {additionalData?.genres?.map(genre => genre.name).join(', ')}</p>
            <p>Duration: {movie.runtime} minutes</p>
            <p>Release Date: {additionalData?.release_date}</p>
            <p>Rating: {additionalData?.vote_average}</p>
          </div>
        </div>
        <div className={styles.movieDescription}> {/* Use CSS Modules for class names */}
          <p>{movie.overview}</p>
        </div>
        <div className={styles.youtubeVideo}> {/* Use CSS Modules for class names */}
          {additionalData?.videos?.results.length > 0 && (
            <YouTube videoId={additionalData.videos.results[0].key} opts={youtubeOpts} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieWindow;
