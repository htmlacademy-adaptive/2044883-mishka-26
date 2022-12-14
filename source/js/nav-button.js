const mainNavButton = document.querySelector('.main-nav__toggle');
const menu = document.querySelector('.main-nav__wrapper');

mainNavButton.classList.remove('menu-button--hide');
menu.classList.remove('main-nav__wrapper--nojs');
menu.classList.add('main-nav__wrapper--close');

mainNavButton.onclick = function () {
  mainNavButton.classList.toggle('menu-button--close');
  menu.classList.toggle('main-nav__wrapper--close');
}
