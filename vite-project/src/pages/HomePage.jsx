import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Sidebar from "../components/Sidebar";
import SocialMediaFeed from "../components/SocialMediaFeed";
import MovieList from "../components/MovieList";
import "../styles/HomePage.css";


function HomePage() {
    const images = []
    return (
        <div className="home-page">
            <main>
                <div className="content">
                    <div className="sidebar">
                        <Sidebar />
                        <SocialMediaFeed />
                    </div>
                    <div className="right-content">
                        <Slider images={images} />
                        <MovieList />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HomePage;