import React, { useState } from 'react';
import { CitySelector } from '../citySelector';
import '../popup';

export const Popup: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('New York');

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    // Дополнительная логика для обновления данных о погоде
  };

  return (
    <div className="popup-container">
      <h2>Weather Information</h2>
      <CitySelector selectedCity={selectedCity} onCityChange={handleCityChange} />
      <p>Weather details for {selectedCity}.</p>
      <button id="close-popup" className="close-popup">Close</button>
    </div>
  );
};

