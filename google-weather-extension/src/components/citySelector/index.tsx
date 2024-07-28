import React, { useState, useEffect, useRef } from 'react';
import { setSelectedCity, getSelectedCity } from '../../weatherService';
import './index.css';

const cities = ['New York', 'Los Angeles', 'Chicago'];

export const CitySelector: React.FC = () => {
  const [city, setCity] = useState(cities[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadCity = async () => {
      const savedCity = await getSelectedCity();
      setCity(savedCity);
    };

    loadCity();
  }, []);

  useEffect(() => {
    setSelectedCity(city);
  }, [city]);

  const handleCityChange = (newCity: string) => {
    setCity(newCity);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="container">
      <h1>Weather Extension</h1>
      <div className="selector-container">
        <label htmlFor="city" className="label">Select City:</label>
        <div className="dropdown-container" ref={dropdownRef}>
          <div
            id="city"
            className="dropdown"
            onClick={toggleDropdown}
          >
            {city}
          </div>
          {isOpen && (
            <div className="dropdown-list">
              {cities.map((c) => (
                <div
                  key={c}
                  className="dropdown-item"
                  onClick={() => handleCityChange(c)}
                  onMouseEnter={(e) => e.currentTarget.classList.add('dropdown-item-hover')}
                  onMouseLeave={(e) => e.currentTarget.classList.remove('dropdown-item-hover')}
                >
                  {c}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
