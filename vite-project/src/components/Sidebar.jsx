import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Sidebar.css";

function Sidebar() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = '16d825ffcd33bd02dd870115facebafe'; // Your TMDb API key
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    axios.get(apiUrl)
      .then((response) => {
        // Sort movies by popularity (view count) in descending order
        const sortedMovies = response.data.results.sort((a, b) =>
          b.popularity - a.popularity
        );

        // Take the top 3 most viewed movies
        const top3Movies = sortedMovies.slice(0, 3);

        setMovies(top3Movies);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, []);

  return (
    <aside className="sidebar">
      <h2>Most Watched</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="most-watched">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>Genre: {movie.genre}</p>
              <p>{movie.runtime} minutes</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
