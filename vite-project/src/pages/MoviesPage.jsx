import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import "../styles/MoviesPage.css";
import Filters from '../components/Filters';

function MoviesPage() {
  const [selectedGenre, setSelectedGenre] = useState('All'); // State for selected genre
  const [selectedDuration, setSelectedDuration] = useState(0); // State for selected duration
  const [selectedStatus, setSelectedStatus] = useState('All'); // State for selected status
  const [filteredMovies, setFilteredMovies] = useState([]); // State for filtered movies

  // Replace this with your actual movie data
  const allMovies = [
    // ...your movie data...
  ];

  useEffect(() => {
    // Implement your filter logic here
    const filtered = allMovies.filter((movie) => {
      const genreMatch = selectedGenre === 'All' || movie.genre === selectedGenre;
      const durationMatch = selectedDuration === 0 || movie.duration <= selectedDuration;
      const statusMatch = selectedStatus === 'All' || movie.status === selectedStatus;
      return genreMatch && durationMatch && statusMatch;
    });
    setFilteredMovies(filtered);
  }, [selectedGenre, selectedDuration, selectedStatus]);

  return (
    <div className='movies-page'>
      <main>
        <div className="content">
          <div className="sidebar">
            <div className="movie-page">
              <h1>Filter</h1>
                {/* Render the Filters component with the necessary props */}
                <Filters
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
                selectedDuration={selectedDuration}
                setSelectedDuration={setSelectedDuration}
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
                />
                 {/* Your code for displaying movies based on the selected filters can go here */}
            </div>
          </div>
          <div className="right-content">
            {/* Display filtered movies using MovieList */}
            <MovieList movies={filteredMovies} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MoviesPage;
