import React from 'react';
import '../styles/AboutPage.css'; // You can create a CSS file for styling

function AboutPage() {
  return (
    <div className="about-page">
      <h1>About Our Cinema</h1>
      <div className="about-content">
        <div className="cinema-details">
          <div className="cinema-image">
            <img src="cinema-photo.jpeg" alt="Cinema Building" />
          </div>
          <div className="cinema-info">
            <h2>Cinema Name</h2>
            <p>
              <strong>Location:</strong> City, State
            </p>
            <p>
              <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam sed libero sit amet lorem mollis viverra. Integer nec odio.
            </p>
            <p>
              <strong>Contact Information:</strong> <br />
              Phone: (123) 456-7890 <br />
              Email: info@cinema.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
