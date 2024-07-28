// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Импорт Bootstrap
// import { setSelectedCity, getSelectedCity } from './weatherService';

// const cities = ['New York', 'Los Angeles', 'Chicago'];

// const styleContainer: React.CSSProperties = {
//   backgroundColor: 'white',
//   padding: 20,
//   boxShadow: '0 0 50px rgba(0, 0, 0, 0.3)',
//   width: 400,
// };

// const styleSelectorContainer: React.CSSProperties = {
//   display: 'flex',
//   flexDirection: 'column',
//   marginTop: 10,
// };

// const styleLabel: React.CSSProperties = {
//   fontWeight: 'bold',
//   marginBottom: 5,
// };

// const styleDropdown: React.CSSProperties = {
//   padding: 10,
//   border: '1px solid #ccc',
//   borderRadius: 5,
//   backgroundColor: '#f9f9f9',
//   fontSize: 16,
//   transition: 'border-color 0.3s ease',
// };

// const styleDropdownFocus: React.CSSProperties = {
//   borderColor: '#007bff',
//   outline: 'none',
// };

// export const App: React.FC = () => {
//   const [city, setCity] = useState(cities[0]);

//   useEffect(() => {
//     const loadCity = async () => {
//       const savedCity = await getSelectedCity();
//       console.log('Loaded city:', savedCity); // Лог загруженного города
//       setCity(savedCity);
//     };

//     loadCity();
//   }, []);

//   useEffect(() => {
//     console.log('Setting city:', city); // Лог устанавливаемого города
//     setSelectedCity(city);
//   }, [city]);

//   const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setCity(event.target.value);
//   };

//   return (
//     <div style={styleContainer}>
//       <h1>Weather Extension</h1>
//       <div style={styleSelectorContainer}>
//         <label htmlFor="city" style={styleLabel}>Select City:</label>
//         <select
//           id="city"
//           value={city}
//           onChange={handleCityChange}
//           style={{ ...styleDropdown, ...(document.activeElement?.id === 'city' && styleDropdownFocus) }}
//         >
//           {cities.map((c) => (
//             <option key={c} value={c}>{c}</option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };


// import React, { useState, useEffect, useRef } from 'react';
// import { setSelectedCity, getSelectedCity } from './weatherService';

// const cities = ['New York', 'Los Angeles', 'Chicago'];

// const styleContainer: React.CSSProperties = {
//   backgroundColor: 'white',
//   padding: '20px',
//   width: '400px',
//   position: 'relative',
//   boxSizing: 'border-box',
// };

// const styleSelectorContainer: React.CSSProperties = {
//   display: 'flex',
//   flexDirection: 'column',
//   marginTop: '10px',
// };

// const styleLabel: React.CSSProperties = {
//   fontWeight: 'bold',
//   marginBottom: '5px',
// };

// const styleDropdown: React.CSSProperties = {
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   cursor: 'pointer',
//   padding: '10px',
//   border: '1px solid #ccc',
//   borderRadius: '5px',
//   backgroundColor: '#f9f9f9',
//   fontSize: '16px',
//   width: '100%',
//   boxSizing: 'border-box',
// };

// const styleDropdownList: React.CSSProperties = {
//   width: '100%',
//   backgroundColor: '#fff',
//   border: '1px solid #ccc',
//   borderRadius: '5px',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//   zIndex: 1000, // Чтобы список был поверх других элементов
//   maxHeight: '200px',
//   overflowY: 'auto',
//   marginBottom: '10px',
//   marginTop: '2px', // Маленький отступ между элементом выбора и списком
// };

// const styleDropdownItem: React.CSSProperties = {
//   padding: '10px',
//   cursor: 'pointer',
//   backgroundColor: '#fff',
// };

// const styleDropdownItemHover: React.CSSProperties = {
//   backgroundColor: '#f0f0f0',
// };

// export const App: React.FC = () => {
//   const [city, setCity] = useState(cities[0]);
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const loadCity = async () => {
//       const savedCity = await getSelectedCity();
//       setCity(savedCity);
//     };

//     loadCity();
//   }, []);

//   useEffect(() => {
//     setSelectedCity(city);
//   }, [city]);

//   const handleCityChange = (newCity: string) => {
//     setCity(newCity);
//     setIsOpen(false);
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <div style={styleContainer}>
//       <h1>Weather Extension</h1>
//       <div style={styleSelectorContainer}>
//         <label htmlFor="city" style={styleLabel}>Select City:</label>
//         <div style={{ position: 'relative' }} ref={dropdownRef}>
//           <div
//             id="city"
//             style={styleDropdown}
//             onClick={toggleDropdown}
//           >
//             {city}
//           </div>
//           {isOpen && (
//             <div
//               style={styleDropdownList}
//             >
//               {cities.map((c) => (
//                 <div
//                   key={c}
//                   style={styleDropdownItem}
//                   onClick={() => handleCityChange(c)}
//                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styleDropdownItemHover.backgroundColor as string}
//                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
//                 >
//                   {c}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };


import React from 'react';
import {CitySelector} from './components/citySelector'
// import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';

export const App: React.FC = () => {
  return (
    <div className="app-container">
      <CitySelector />
      {/* <WeatherDisplay /> */}
    </div>
  );
};
