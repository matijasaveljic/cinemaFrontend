import React from 'react';
import '../styles/ProfilePage.css'; // Create a CSS file for styling

function ProfilePage() {
  // Define user data (you can replace this with actual user data)
  const userData = {
    name: 'John Doe',
    accountCreated: 'January 1, 2023',
    favoriteGenre: 'Action',
    favoriteMovie: 'Movie 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  return (
    <div className="profile-page">
      <h1>User Profile</h1>
      <div className="profile-content">
        <div className="user-details">
          <div className="user-image">
            {/* Display user's picture here */}
            <img src="profile-pic-linkedin.jpg" alt={userData.name} />
          </div>
          <div className="user-info">
            <h2>{userData.name}</h2>
            <p>
              <strong>Account Created:</strong> {userData.accountCreated}
            </p>
            <p>
              <strong>Favorite Genre:</strong> {userData.favoriteGenre}
            </p>
            <p>
              <strong>Favorite Movie:</strong> {userData.favoriteMovie}
            </p>
          </div>
        </div>
        <div className="user-description">
          <h2>Description</h2>
          <p>{userData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
