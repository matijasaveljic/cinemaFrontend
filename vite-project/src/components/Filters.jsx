import React, { useState } from 'react';
import '../styles/Filters.css';

function Filters({
  selectedGenre,
  setSelectedGenre,
  selectedDuration,
  setSelectedDuration,
  selectedStatus,
  setSelectedStatus,
  onSearch,
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="filters-container">
      <div className="filters">
        <div className="filter-group">
          <label className='labels'>Search by Name:</label>
          <div className="search-input">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter movie name..."
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>

        <div className="filter-group">
          <label className='labels'>Duration (minutes):</label>
          <input
            type="range"
            min={0}
            max={240} // Adjust the max value as needed
            step={15}
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(parseInt(e.target.value))}
          />
        </div>

        <div className="filter-group">
          <label className='labels'>Genre:</label>
          <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="All">All</option>
            {/* Add genre options */}
          </select>
        </div>

        <div className="filter-group">
          <label className='labels'>Status:</label>
          <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
            <option value="All">All</option>
            <option value="Archived">Archived</option>
            <option value="Current">Current</option>
            <option value="Upcoming">Upcoming</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;
