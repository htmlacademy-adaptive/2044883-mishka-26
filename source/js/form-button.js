let mainFormButton = document.querySelector('.form-nav__toggle');
let menu = document.querySelector('.form-nav__wrapper');

mainFormButton.classList.remove('menu-button--open');
menu.classList.add('form-nav__wrapper--close');

mainFormButton.onclick = function() {
  mainFormButton.classList.toggle('menu-button--open');
  menu.classList.toggle('form-nav__wrapper--close');
}
