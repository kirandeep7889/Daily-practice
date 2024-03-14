// TopBar.js
import React from 'react';
import search from '../assets/search.png';

const TopBar = ({ city, setCity, getWeatherData }) => {
  return (
    <div className="top-bar">
      <input
        type="text"
        className='cityInput'
        placeholder='Search for a city'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <div onClick={getWeatherData} className="search-icon">
        <img src={search} alt="Search" />
      </div>
    </div>
  );
}

export default TopBar;
