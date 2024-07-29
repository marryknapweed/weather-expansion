import axios from 'axios';

export const fetchWeather = async (city: string): Promise<string> => {
  try {
    const response = await axios.get(`https://wttr.in/${city}?format=%t`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    return 'Error fetching weather';
  }
};

export const setSelectedCity = async (city: string): Promise<void> => {
  return new Promise((resolve) => {
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.set({ selectedCity: city }, () => {
        console.log('City saved:', city);
        resolve();
      });
    } else {
      console.warn('Chrome storage is not available');
      resolve();
    }
  });
};

export const getSelectedCity = async (): Promise<string> => {
  return new Promise((resolve) => {
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.get('selectedCity', (data) => {
        console.log('City retrieved:', data.selectedCity);
        resolve(data.selectedCity || 'Минск');
      });
    } else {
      console.warn('Chrome storage is not available');
      resolve('Минск');
    }
  });
};
