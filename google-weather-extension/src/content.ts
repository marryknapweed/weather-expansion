function createIcon() {
    console.log('Creating icon element'); // Лог для проверки выполнения функции

    const img = document.createElement('img');
    img.src = chrome.runtime.getURL('icon.png');
    console.log('Icon URL:', img.src); // Лог URL иконки

    img.style.width = '20px';  // Установите размер по необходимости
    img.style.height = '20px';
    img.style.marginLeft = '5px';  // Добавьте отступы, если необходимо
    img.style.verticalAlign = 'middle';  // Выравнивание по вертикали

    img.onload = () => console.log('Icon loaded successfully'); // Лог успешной загрузки
    img.onerror = () => console.error('Error loading icon:', img.src); // Лог ошибки загрузки

    img.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращение действия по умолчанию
        event.stopPropagation(); // Предотвращение всплытия события
        console.log('Icon clicked'); // Лог клика по иконке
        showPopup();
    });

    return img;
}

const addIconsToHeadlines = () => {
    console.log('addIconsToHeadlines function called'); // Лог для проверки выполнения функции

    const headlines = document.querySelectorAll('h3.title');
    console.log('Found headlines:', headlines.length); // Лог количества найденных заголовков

    headlines.forEach(headline => {
        const icon = createIcon();
        console.log('Appending icon to headline:', headline); // Лог добавления иконки к заголовку
        headline.appendChild(icon);

        icon.addEventListener('click', () => {
            console.log('Icon clicked'); // Лог клика по иконке
            showPopup();
        });
    });
};

const showPopup = () => {
    console.log('showPopup function called'); // Лог для проверки выполнения функции

    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = 'white';
    popup.style.border = '1px solid black';
    popup.style.padding = '10px';
    popup.style.zIndex = '1000';
    popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

    popup.innerHTML = `
      <h2>Weather Information</h2>
      <p>Weather details for selected city.</p>
      <button id="close-popup">Close</button>
    `;

    document.body.appendChild(popup);

    document.getElementById('close-popup')?.addEventListener('click', () => {
      document.body.removeChild(popup);
      console.log('Popup closed'); // Лог закрытия popup
    });
};

document.addEventListener('DOMContentLoaded', () => {
    addIconsToHeadlines();
});

addIconsToHeadlines();


