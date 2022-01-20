function search() {
  const searchInput = document.querySelector('.search-input');
  const searchBtn = document.querySelector('.search-btn');
  searchBtn.addEventListener('mouseenter', () => {
    if(searchInput.value == "") {
      searchInput.classList.toggle('search-input-active');
    }
    else if (searchInput.value !== "") {
      searchInput.classList.add('search-input-active');
    }
  });
}
function menubar() {
  const menuBtn = document.querySelector('#menu-logo');
  const menuBar = document.querySelector('.phone-menu-nav');
  menuBtn.addEventListener('click', () => {
    menuBar.classList.toggle('phone-menu-nav-active');
    menuBtn.classList.toggle('menu-logo-active');
    menuBtn.classList.toggle('menu-logo');
  });
}
search();
menubar();
