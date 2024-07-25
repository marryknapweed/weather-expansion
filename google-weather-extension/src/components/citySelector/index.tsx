import React from 'react';
import '../citySelector';

interface CitySelectorProps {
  selectedCity: string;
  onCityChange: (city: string) => void;
}

const cities = ['New York', 'Los Angeles', 'Chicago'];

export const CitySelector: React.FC<CitySelectorProps> = ({ selectedCity, onCityChange }) => {
  return (
    <div className="city-selector-container">
      <label htmlFor="city" className="city-selector-label">Select City:</label>
      <select
        id="city"
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        className="city-selector-dropdown"
      >
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};
