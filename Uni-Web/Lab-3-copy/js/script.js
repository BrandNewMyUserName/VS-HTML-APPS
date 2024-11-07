const images = document.querySelectorAll('.image-container img');
const indicators = document.querySelectorAll('.indicator');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

// Функція для оновлення зображення
function updateImage(index) {
    const offset = -index * 100; // Зміщення на 100% для кожного зображення
    document.querySelector('.image-container').style.transform = `translateX(${offset}%)`;
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

// Події для кнопок
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage(currentIndex);
});

// Подія для індикаторів
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateImage(currentIndex);
    });
});
