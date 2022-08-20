let menuButton = document.querySelector('.main-nav__toggle');

menuButton.onclick = function() {
  let menu = document.querySelector('.main-nav__wrapper');
  menu.classList.toggle('main-nav__wrapper--close');
}
