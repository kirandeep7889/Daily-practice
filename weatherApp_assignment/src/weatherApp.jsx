import React, { useState, useEffect } from 'react';
import TopBar from '../src/components/TopBar';
import WeatherDisplay from '../src/components/WeatherDisplay';
import ErrorMessage from '../src/components/ErrorMessage';

import './WeatherApp.css';

export function WeatherApp() {
  const [city, setCity] = useState('jammu');
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  let api_key = "5bf3314e33e56e717a27c240b0058e9c";

  useEffect(() => {
    getWeatherData();
  }, []);

  const getWeatherData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setErrorMessage('');
    } catch (error) {
      setWeatherData(null);
      setErrorMessage('City not found !!! Please enter a valid city.');
    }
  };

  return (
    <div className='container'>
      <TopBar city={city} setCity={setCity} getWeatherData={getWeatherData} />
      <WeatherDisplay weatherData={weatherData} />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  )
}
