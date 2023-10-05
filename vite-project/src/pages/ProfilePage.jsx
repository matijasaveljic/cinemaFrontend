import React, { useState } from 'react';
import '../styles/ProfilePage.css';

function ProfilePage() {
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

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Update the initialUserData with edited values
    initialUserData.name = editedName;
    initialUserData.favoriteMovie = editedFavoriteMovie;
    initialUserData.favoriteGenre = editedFavoriteGenre;
    initialUserData.description = editedDescription;
    // Update user data with edited values
    setUserData({
      ...userData,
      name: editedName,
      favoriteMovie: editedFavoriteMovie,
      favoriteGenre: editedFavoriteGenre,
      description: editedDescription,
    });
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const [editedName, setEditedName] = useState(userData.name);
  const [editedFavoriteMovie, setEditedFavoriteMovie] = useState(userData.favoriteMovie);
  const [editedFavoriteGenre, setEditedFavoriteGenre] = useState(userData.favoriteGenre);
  const [editedDescription, setEditedDescription] = useState(userData.description);

  return (
    <div className="profile-page">
      <h1>User Profile</h1>
      <div className="profile-content">
        <div className="user-details">
          <div className="user-image">
            <img src={userData.profilePicture} alt={userData.name} />
          </div>
          <div className="user-info">
            {isEditing ? (
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            ) : (
              <h2>{userData.name}</h2>
            )}
            <p>
              <strong>Account Created:</strong> {userData.accountCreated}
            </p>
            {isEditing ? (
              <input
                type="text"
                value={editedFavoriteGenre}
                onChange={(e) => setEditedFavoriteGenre(e.target.value)}
              />
            ) : (
              <p>
                <strong>Favorite Genre:</strong> {userData.favoriteGenre}
              </p>
            )}
            {isEditing ? (
              <input
                type="text"
                value={editedFavoriteMovie}
                onChange={(e) => setEditedFavoriteMovie(e.target.value)}
              />
            ) : (
              <p>
                <strong>Favorite Movie:</strong> {userData.favoriteMovie}
              </p>
            )}
          </div>
        </div>
        <div className="user-description">
          <h2>Description</h2>
          {isEditing ? (
            <textarea
              rows="4"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
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
          <button className="edit-profile-button" onClick={handleEditClick}>
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
