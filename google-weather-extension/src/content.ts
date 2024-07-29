import { fetchWeather, getSelectedCity } from './weatherService';

// Переменная для хранения ссылки на текущий открытый попап
let currentPopup: HTMLElement | null = null;

function createIcon() {

  const img = document.createElement('img');
  img.src = chrome.runtime.getURL('icon.png');

  img.style.width = '40px'; 
  img.style.height = '40px';
  img.style.position = 'absolute';  
  img.style.top = '0';  
  img.style.right = '0';
  img.style.margin = '5px';  
  img.style.verticalAlign = 'middle';  

  img.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    showPopup(event); 
  });

  return img;
}

const addIconsToHeadlines = () => {

  const headlines = document.querySelectorAll('h3.title') as NodeListOf<Element>;

  headlines.forEach((headline: Element) => {
    (headline as HTMLElement).style.position = 'relative'; 
    (headline as HTMLElement).style.paddingRight = '50px';

    const icon = createIcon();
    headline.appendChild(icon);
  });
};

const showPopup = async (event: MouseEvent) => {
  if (currentPopup) {
    document.body.removeChild(currentPopup);
  }

  const popup = document.createElement('div');

  popup.style.position = 'absolute';
  popup.style.backgroundColor = '#fff';
  popup.style.border = '1px solid #ccc';
  popup.style.borderRadius = '8px';
  popup.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  popup.style.padding = '20px';
  popup.style.width = '300px'; 
  popup.style.maxWidth = '90%';
  popup.style.zIndex = '1000';
  popup.style.fontFamily = 'Arial, sans-serif';
  popup.style.boxSizing = 'border-box';

  const icon = event.currentTarget as HTMLImageElement;
  const iconRect = icon.getBoundingClientRect();
  popup.style.top = `${iconRect.bottom + window.scrollY + 10}px`; // Смещаем вниз
  popup.style.left = `${iconRect.left + window.scrollX}px`; // Выравниваем по левому краю

  const selectedCity = await getSelectedCity();
  const weather = await fetchWeather(selectedCity);

  popup.innerHTML = `
    <h2 style="margin-top: 0; font-size: 1.5em; color: #333;">Информация о погоде</h2>
    <p style="font-size: 1em; color: #555; margin: 10px 0;">
      Погода в ${selectedCity} сейчас: ${weather}
    </p>
    <button id="close-popup" style="
      background: none;
      border: none;
      font-size: 1.5em;
      color: #999;
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 10px;
    ">
      &times;
    </button>
  `;

  document.body.appendChild(popup);

  // Сохраняем ссылку на текущий попап
  currentPopup = popup;

  document.getElementById('close-popup')?.addEventListener('click', () => {
    document.body.removeChild(popup);
    currentPopup = null; // Убираем ссылку на закрытый попап
  });
};

document.addEventListener('DOMContentLoaded', () => {
  addIconsToHeadlines();
});

addIconsToHeadlines();


