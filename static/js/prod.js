let currentIndex = 0;
const slides = document.querySelectorAll('.ci');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}
setInterval(nextSlide, 3000);


const hydraulicLink = document.getElementById('hydraulic-link');
hydraulicLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'products.html';
});

const dropdownTrigger = document.querySelector('.dropdown-trigger');
const dropdownRow = document.querySelector('.dropdown-row');


dropdownTrigger.addEventListener('mouseover', function () {
    dropdownRow.style.display = 'block';
});

dropdownRow.addEventListener('mouseover', function () {
    dropdownRow.style.display = 'block';
});

dropdownTrigger.addEventListener('mouseout', function () {
    dropdownRow.style.display = 'none';
});

dropdownRow.addEventListener('mouseout', function () {
    dropdownRow.style.display = 'none';
});
const dropdownTrigger2 = document.querySelector('.dropdown-trigger2');
const dropdownRow2 = document.querySelector('.dropdown-row2');

dropdownTrigger2.addEventListener('mouseover', function () {
    dropdownRow2.style.display = 'block';
});

dropdownTrigger2.addEventListener('mouseout', function () {
    dropdownRow2.style.display = 'none';
});

dropdownRow2.addEventListener('mouseover', function () {
    dropdownRow2.style.display = 'block';
});

dropdownRow2.addEventListener('mouseout', function () {
    dropdownRow2.style.display = 'none';
});
const dropdownTrigger3 = document.querySelector('.dropdown-trigger3');
const dropdownRow3 = document.querySelector('.dropdown-row3');

dropdownTrigger3.addEventListener('mouseover', function () {
    dropdownRow3.style.display = 'block';
});

dropdownTrigger3.addEventListener('mouseout', function () {
    dropdownRow3.style.display = 'none';
});

dropdownRow3.addEventListener('mouseover', function () {
    dropdownRow3.style.display = 'block';
});

dropdownRow3.addEventListener('mouseout', function () {
    dropdownRow3.style.display = 'none';
});
const dropdownTrigger4 = document.querySelector('.dropdown-trigger4');
const dropdownRow4 = document.querySelector('.dropdown-row4');

dropdownTrigger4.addEventListener('mouseover', function () {
    dropdownRow4.style.display = 'block';
});

dropdownTrigger4.addEventListener('mouseout', function () {
    dropdownRow4.style.display = 'none';
});

dropdownRow4.addEventListener('mouseover', function () {
    dropdownRow4.style.display = 'block';
});

dropdownRow4.addEventListener('mouseout', function () {
    dropdownRow4.style.display = 'none';
});
const dropdownTrigger5 = document.querySelector('.dropdown-trigger5');
const dropdownRow5 = document.querySelector('.dropdown-row5');

dropdownTrigger5.addEventListener('mouseover', function () {
    dropdownRow5.style.display = 'block';
});

dropdownTrigger5.addEventListener('mouseout', function () {
    dropdownRow5.style.display = 'none';
});

dropdownRow5.addEventListener('mouseover', function () {
    dropdownRow5.style.display = 'block';
});

dropdownRow5.addEventListener('mouseout', function () {
    dropdownRow5.style.display = 'none';
});