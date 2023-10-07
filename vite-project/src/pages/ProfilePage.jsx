import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import '../styles/ProfilePage.css';

function ProfilePage() {
  const movieGenres = [
    'Action',
    'Adventure',
    'Comedy',
    'Drama',
    'Horror',
    'Science Fiction',
    // Add more genres as needed
  ];

  const initialUserData = {
    name: 'Matija Saveljic',
    accountCreated: 'January 1, 2023',
    favoriteGenre: 'Action',
    favoriteMovie: 'Movie 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profilePicture: 'profile-pic-linkedin.jpg',
  };

  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);

  // Use a state variable to keep track of the selected genre
  const [selectedGenre, setSelectedGenre] = useState(initialUserData.favoriteGenre);

  const history = useHistory(); // Initialize history for React Router

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Update the user data with the selected genre
    setUserData({
      ...userData,
      favoriteGenre: selectedGenre,
    });
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Reset the selected genre to the original value
    setSelectedGenre(userData.favoriteGenre);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear user session or navigate to a logout page

    // For this example, we will navigate to the login page
    history.push('/login');
  };

  return (
    <div className="profile-page">
      <h1>User Profile</h1>
      <div className="profile-content">
        {/* ... (Rest of your ProfilePage content) */}
        <div className="user-description">
          <h2>Description</h2>
          {isEditing ? (
            <textarea
              rows="4"
              value={userData.description}
              onChange={(e) => setUserData({ ...userData, description: e.target.value })}
            />
          ) : (
            <p>{userData.description}</p>
          )}
        </div>
        {isEditing ? (
          <div className="edit-profile-actions">
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </div>
        ) : (
          <>
            <button className="edit-profile-button" onClick={handleEditClick}>
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
            <button className="logout-button" onClick={handleLogout}>
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
