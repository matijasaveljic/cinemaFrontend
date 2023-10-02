import React from 'react';
import MovieList from '../components/MovieList';
import "../styles/MoviesPage.css";

function MoviesPage() {
    return (
      <div className='movies-page'>
        <main>
          <div className="content">
            <div className="sidebar">

            </div>
            <div className="right-content">
              <MovieList />
            </div>
          </div>
        </main>
      </div>
    );
  }
  
  export default MoviesPage;
  