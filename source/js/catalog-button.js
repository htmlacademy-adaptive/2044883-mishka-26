let mainCatalogButton = document.querySelector('.catalog-nav__toggle');
let menu = document.querySelector('.catalog-nav__wrapper');

mainCatalogButton.classList.remove('menu-button--open');
menu.classList.add('catalog-nav__wrapper--close');

mainCatalogButton.onclick = function() {
  mainCatalogButton.classList.toggle('menu-button--open');
  menu.classList.toggle('catalog-nav__wrapper--close');
}
