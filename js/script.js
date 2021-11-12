const burgerIcon = document.querySelector('.header__burger-icon');
const menu = document.querySelector('.burger-menu');
const body = document.querySelector('body');

burgerIcon.addEventListener('click', function () {
    burgerIcon.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('block');
});