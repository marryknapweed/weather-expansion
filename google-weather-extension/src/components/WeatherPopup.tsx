// // // import React, { useState, useEffect } from 'react';

// // // const cities = ['New York', 'Los Angeles', 'Chicago']; // Пример городов

// // // const fetchWeather = async (city: string) => {
// // //   const apiKey = '3e816eb3571c713c61e8a56f433192e5'; // Замените на ваш ключ API
// // //   const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
// // //   const data = await response.json();
// // //   return data.current.condition.text;
// // // };

// // // export const WeatherPopup: React.FC = () => {
// // //   const [selectedCity, setSelectedCity] = useState<string>(cities[0]);
// // //   const [weather, setWeather] = useState<string>('');

// // //   useEffect(() => {
// // //     const getWeather = async () => {
// // //       const weatherCondition = await fetchWeather(selectedCity);
// // //       setWeather(weatherCondition);
// // //     };
// // //     getWeather();
// // //   }, [selectedCity]);

// // //   return (
// // //     <div className="popup">
// // //       <h1>Weather</h1>
// // //       <select onChange={(e) => setSelectedCity(e.target.value)} value={selectedCity}>
// // //         {cities.map(city => (
// // //           <option key={city} value={city}>{city}</option>
// // //         ))}
// // //       </select>
// // //       <p>Current weather in {selectedCity}: {weather}</p>
// // //     </div>
// // //   );
// // // };



// // import React, { useState, useEffect } from 'react';
// // import { fetchWeather } from '../weatherService';

// // const cities = ['New York', 'Los Angeles', 'Chicago'];

// // export const WeatherPopup: React.FC = () => {
// //   const [selectedCity, setSelectedCity] = useState<string>(cities[0]);
// //   const [weather, setWeather] = useState<string>('');

// //   useEffect(() => {
// //     const getWeather = async () => {
// //       const weatherCondition = await fetchWeather(selectedCity);
// //       setWeather(weatherCondition);
// //     };
// //     getWeather();
// //   }, [selectedCity]);

// //   return (
// //     <div className="popup">
// //       <h1>Weather</h1>
// //       <select onChange={(e) => setSelectedCity(e.target.value)} value={selectedCity}>
// //         {cities.map(city => (
// //           <option key={city} value={city}>{city}</option>
// //         ))}
// //       </select>
// //       <p>Current weather in {selectedCity}: {weather}</p>
// //     </div>
// //   );
// // };


// import React, { useState, useEffect } from 'react';
// import { fetchWeather, getSelectedCity } from '../weatherService';

// // Пример стилизации через объект
// const styles = {
//   popup: {
//     width: '300px',
//     padding: '20px',
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     backgroundColor: '#fff',
//     border: '1px solid black',
//     borderRadius: '8px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     zIndex: 1000,
//   },
//   select: {
//     width: '100%',
//     padding: '8px',
//     marginBottom: '10px',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//   },
//   closeButton: {
//     position: 'absolute',
//     top: '10px',
//     right: '10px',
//     background: '#f44336',
//     color: 'white',
//     border: 'none',
//     borderRadius: '50%',
//     width: '30px',
//     height: '30px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '18px',
//     cursor: 'pointer',
//   },
//   closeButtonHover: {
//     background: '#d32f2f',
//   }
// };

// const cities = ['New York', 'Los Angeles', 'Chicago'];

// export const WeatherPopup: React.FC = () => {
//   const [selectedCity, setSelectedCity] = useState<string>(cities[0]);
//   const [weather, setWeather] = useState<string>('');

//   useEffect(() => {
//     const getWeather = async () => {
//       const weatherCondition = await fetchWeather(selectedCity);
//       setWeather(weatherCondition);
//     };
//     getWeather();
//   }, [selectedCity]);

//   return (
//     <div style={styles.popup}>
//       <button
//         style={styles.closeButton}
//         onClick={() => window.close()}
//         onMouseEnter={(e) => e.currentTarget.style.background = styles.closeButtonHover.background}
//         onMouseLeave={(e) => e.currentTarget.style.background = styles.closeButton.background}
//       >
//         &times;
//       </button>
//       <h1>Weather</h1>
//       <select
//         onChange={(e) => setSelectedCity(e.target.value)}
//         value={selectedCity}
//         style={styles.select}
//       >
//         {cities.map(city => (
//           <option key={city} value={city}>{city}</option>
//         ))}
//       </select>
//       <p>Current weather in {selectedCity}: {weather}</p>
//     </div>
//   );
// };
