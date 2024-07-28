import axios from 'axios';

// Функция для получения погоды
export const fetchWeather = async (city: string): Promise<string> => {
  try {
    const response = await axios.get(`https://wttr.in/${city}?format=%t`);
    const temperature = response.data;

    return `${temperature}`;
  } catch (error) {
    console.error('Error fetching weather:', error);
    return 'Error fetching weather';
  }
};

export const setSelectedCity = (city: string): Promise<void> => {
  return new Promise((resolve) => {
    if (typeof chrome !== 'undefined' && chrome.storage) {
      console.log('Saving city to chrome.storage.local:', city); // Лог сохраняемого города
      chrome.storage.local.set({ selectedCity: city }, resolve);
    } else {
      console.warn('Chrome storage is not available');
      resolve();
    }
  });
};

export const getSelectedCity = (): Promise<string> => {
  return new Promise((resolve) => {
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.get('selectedCity', (data) => {
        console.log('chrome.storage.local.get:', data); // Лог полученных данных
        resolve(data.selectedCity || 'New York');
      });
    } else {
      console.warn('Chrome storage is not available');
      resolve('New York');
    }
  });
};
