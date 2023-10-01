import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import SocialMediaFeed from "./SocialMediaFeed";
import MovieList from "./MovieList";
import "../styles/HomePage.css";


function HomePage() {
    const images = []
    return (
        <div className="home-page">
            <Header />
            <main>
                <div className="content">
                    <div className="sidebar">
                        <Sidebar />
                        <SocialMediaFeed />
                    </div>
                    <div className="main-content">
                    
                    </div>
                    <div className="right-content">
                        <Slider images={images} />
                        <MovieList />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default HomePage;