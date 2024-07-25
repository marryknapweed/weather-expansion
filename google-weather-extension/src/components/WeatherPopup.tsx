import React, { useState, useEffect } from 'react';
import './Popup.css';

const cities = ['New York', 'Los Angeles', 'Chicago']; // Пример городов

const fetchWeather = async (city: string) => {
    const apiKey = '3e816eb3571c713c61e8a56f433192e5'; // Замените на ваш ключ API
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data.current.condition.text;
    } catch (error) {
      console.error('Error fetching weather:', error);
      return 'Error fetching weather';
    }
  };
  

export const WeatherPopup: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>(cities[0]);
  const [weather, setWeather] = useState<string>('');

  useEffect(() => {
    const getWeather = async () => {
      const weatherCondition = await fetchWeather(selectedCity);
      setWeather(weatherCondition);
    };
    getWeather();
  }, [selectedCity]);

  return (
    <div className="popup">
      <h1>Weather</h1>
      <select onChange={(e) => setSelectedCity(e.target.value)} value={selectedCity}>
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
      <p>Current weather in {selectedCity}: {weather}</p>
    </div>
  );
};

