// WeatherDisplay.js
import React from 'react';
import cloud from '../assets/cloud.png';
import humidity from '../assets/humidity.png';
import wind from '../assets/wind.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import drizzle from '../assets/drizzle.png';
import clear from '../assets/clear.png';

const WeatherDisplay = ({ weatherData }) => {
  const getWeatherImage = (weather) => {
    switch (weather) {
      case 'Rain':
        return rain;
      case 'Snow':
        return snow;
      case 'Drizzle':
        return drizzle;
      case 'Clear':
        return clear;
      default:
        return cloud;
    }
  };

  return (
    <div className="weather-display">
      {weatherData ? (
        <div>
          <div className="weather-image">
            <img src={getWeatherImage(weatherData.weather[0].main)} alt='' />
          </div>
          <div className="weather-temp">{weatherData.main.temp}°C</div>
          <div className="weather-location">{weatherData.name}</div>
          <div className="data-container">
            <div className="element">
              <img src={humidity} className='icon' alt='humidity' />
              <div className="data">
                <div className="humidity-percent">{weatherData.main.humidity}%</div>
                <div className="text">Humidity</div>
              </div>
            </div>
            <div className="element">
              <img src={wind} className='icon' alt='wind' />
              <div className="data">
                <div className="humidity-percent">{weatherData.wind.speed}km/h</div>
                <div className="text">Wind Speed</div>
              </div>
            </div>
          </div>
        </div>
      ) :  ""}
    </div>
  );
}

export default WeatherDisplay;
