let mainNavButton = document.querySelector('.main-nav__toggle');
let menu = document.querySelector('.main-nav__wrapper');

mainNavButton.classList.remove('menu-button--open');
menu.classList.add('main-nav__wrapper--close');

mainNavButton.onclick = function() {
  mainNavButton.classList.toggle('menu-button--open');
  menu.classList.toggle('main-nav__wrapper--close');
}
