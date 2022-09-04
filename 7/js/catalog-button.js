const mainCatalogButton = document.querySelector('.catalog-nav__toggle');
const menu = document.querySelector('.catalog-nav__wrapper');

mainCatalogButton.classList.remove('menu-button--hide');
menu.classList.remove('catalog-nav__wrapper--nojs');
menu.classList.add('catalog-nav__wrapper--close');

mainCatalogButton.onclick = function() {
  mainCatalogButton.classList.toggle('menu-button--close');
  menu.classList.toggle('catalog-nav__wrapper--close');
}
