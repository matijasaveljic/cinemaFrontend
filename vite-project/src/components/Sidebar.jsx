import React from "react";
import "../styles/Sidebar.css";

function Sidebar() {
    // Dummy movie data for demonstration
    const movies = [
        {
            id: 1,
            title: "Movie 1",
            length: "1h 30m",
            genre: "Action",
            imageUrl: 'placeholder-poster.jpg',
        },
        {
            id: 2,
            title: "Movie 2",
            length: "2h 15m",
            genre: "Drama",
            imageUrl: 'placeholder-poster.jpg',
        },
        {
            id: 3,
            title: "Movie 3",
            length: "1h 45m",
            genre: "Comedy",
            imageUrl: 'placeholder-poster.jpg',
        },
    ];

    return (
        <aside className="sidebar">
            <h2>Most Watched</h2>
            <div className="movie-list">
                {movies.map((movie) => (
                    <div key={movie.id} className="most-watched">
                        <img src={movie.imageUrl} alt={movie.title} />
                        <div className="movie-info">
                            <h3>{movie.title}</h3>
                            <p>Genre: {movie.genre}</p>
                            <p>{movie.length}</p>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}

export default Sidebar;
