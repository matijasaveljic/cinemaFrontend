import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import SocialMediaFeed from "./SocialMediaFeed";
import MovieList from "./MovieList";

function HomePage() {
    const images = ["ivern.jpg", "nautilus.jpg", "ornn.jpg"]
    return(
        <div className="home-page">
            <Header />
            <main>
                <div className="content">
                    <Slider images={images} />
                    <div className="main-content">
                        <h1>Welcome</h1>
                    </div>
                    <Sidebar />
                    <SocialMediaFeed />
                </div>
            </main>
            <MovieList />
            <Footer />
        </div>
    )
}

export default HomePage