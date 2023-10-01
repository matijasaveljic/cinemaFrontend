import React from "react";
import "../styles/Sidebar.css";

function Sidebar() {
    // Dummy movie data for demonstration
    const movies = [
        {
            id: 1,
            title: "Movie 1",
            length: "1h 30m",
            imageUrl: "movie1.jpg",
        },
        {
            id: 2,
            title: "Movie 2",
            length: "2h 15m",
            imageUrl: "movie2.jpg",
        },
        {
            id: 3,
            title: "Movie 3",
            length: "1h 45m",
            imageUrl: "movie3.jpg",
        },
    ];

    return (
        <aside className="sidebar">
            <h2>Most Watched</h2>
            <div className="movie-list">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-item">
                        <img src={movie.imageUrl} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <p>{movie.length}</p>
                    </div>
                ))}
            </div>
        </aside>
    );
}

export default Sidebar;
