import { fetchWeather, getSelectedCity } from './weatherService';

// Переменная для хранения ссылки на текущий открытый попап
let currentPopup: HTMLElement | null = null;

function createIcon() {
  console.log('Creating icon element'); // Лог для проверки выполнения функции

  const img = document.createElement('img');
  img.src = chrome.runtime.getURL('icon.png');
  console.log('Icon URL:', img.src); // Лог URL иконки

  img.style.width = '40px';  // Установите размер по необходимости
  img.style.height = '40px';
  img.style.position = 'absolute';  // Позиционирование иконки
  img.style.top = '0';  // Смещение иконки в верхний правый угол
  img.style.right = '0';
  img.style.margin = '5px';  // Добавьте отступы, если необходимо
  img.style.verticalAlign = 'middle';  // Выравнивание по вертикали

  img.onload = () => console.log('Icon loaded successfully'); // Лог успешной загрузки
  img.onerror = () => console.error('Error loading icon:', img.src); // Лог ошибки загрузки

  img.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращение действия по умолчанию
    event.stopPropagation(); // Предотвращение всплытия события
    console.log('Icon clicked'); // Лог клика по иконке
    showPopup(event); // Передаём событие клика
  });

  return img;
}

const addIconsToHeadlines = () => {
  console.log('addIconsToHeadlines function called'); // Лог для проверки выполнения функции

  const headlines = document.querySelectorAll('h3.title') as NodeListOf<Element>;
  console.log('Found headlines:', headlines.length); // Лог количества найденных заголовков

  headlines.forEach((headline: Element) => {
    (headline as HTMLElement).style.position = 'relative';  // Устанавливаем позиционирование заголовка
    (headline as HTMLElement).style.paddingRight = '50px';

    const icon = createIcon();
    console.log('Appending icon to headline:', headline); // Лог добавления иконки к заголовку
    headline.appendChild(icon);
  });
};

const showPopup = async (event: MouseEvent) => {
  // Закрываем текущий открытый попап, если он есть
  if (currentPopup) {
    document.body.removeChild(currentPopup);
  }

  console.log('showPopup function called'); // Лог для проверки выполнения функции

  const popup = document.createElement('div');

  // Применяем стили попапа
  popup.style.position = 'absolute'; // Позиционирование попапа
  popup.style.backgroundColor = '#fff';
  popup.style.border = '1px solid #ccc';
  popup.style.borderRadius = '8px';
  popup.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  popup.style.padding = '20px';
  popup.style.width = '300px'; // Ширина попапа
  popup.style.maxWidth = '90%'; // Максимальная ширина попапа
  popup.style.zIndex = '1000';
  popup.style.fontFamily = 'Arial, sans-serif';
  popup.style.boxSizing = 'border-box';

  // Определяем позицию иконки
  const icon = event.currentTarget as HTMLImageElement;
  const iconRect = icon.getBoundingClientRect();
  popup.style.top = `${iconRect.bottom + window.scrollY + 10}px`; // Смещаем вниз
  popup.style.left = `${iconRect.left + window.scrollX}px`; // Выравниваем по левому краю

  const selectedCity = await getSelectedCity();
  const weather = await fetchWeather(selectedCity);
  console.log('Weather fetched for', selectedCity, ':', weather); // Лог погоды

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
    console.log('Popup closed'); // Лог закрытия popup
  });
};

document.addEventListener('DOMContentLoaded', () => {
  addIconsToHeadlines();
});

addIconsToHeadlines();
