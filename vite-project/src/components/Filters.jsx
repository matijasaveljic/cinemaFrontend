import React, { useState } from 'react';
import '../styles/Filters.css';

function Filters({
  onFilterChange,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState(0);
  const [selectedStatus, setSelectedStatus] = useState('All');

  const handleSearch = () => {
    onFilterChange({
      searchQuery,
      selectedGenre,
      selectedDuration,
      selectedStatus,
    });
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
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Adventure">Adventure</option>
            <option value="Horror">Horror</option>
            <option value="Science-Fiction">Science Fiction</option>
            {/* Add genre options */}
          </select>
        </div>

        <div className="filter-group">
          <label className='labels'>Status:</label>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Archived">Archived</option>
            <option value="Current">Current</option>
            <option value="Upcoming">Upcoming</option>
          </select>
        </div>
        
        {/* Add "Apply Filters" button */}
        <div className="apply-filters-button">
          <button onClick={handleSearch}>Apply Filters</button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
