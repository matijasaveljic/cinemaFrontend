import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "../styles/SocialMediaFeed.css";

function SocialMediaFeed() {
  const url = 'https://www.instagram.com/';

  return (
    <BrowserRouter>
      <aside className="social-feed">
        <h2>Social</h2>
        <Link to={url} target="_blank">
          <img src="insta-logo.png" alt="social" width={100} />
        </Link>
      </aside>
    </BrowserRouter>
  );
}

export default SocialMediaFeed;
