import React, { useState } from 'react';

const cities = ['New York', 'Los Angeles', 'Chicago'];

const styleContainer: React.CSSProperties = {
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  border: '1px solid black',
  borderRadius: 20,
  padding: 20,
  boxShadow: '0 0 50px rgba(0, 0, 0, 0.3)',
  width: 400,
};

export const App: React.FC = () => {
  const [city, setCity] = useState(cities[0]);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(event.target.value);
  };

  return (
    <div style={styleContainer}>
      <h1>Weather Extension</h1>
      <select value={city} onChange={handleCityChange}>
        {cities.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
};


