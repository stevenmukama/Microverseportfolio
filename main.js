const menuBtn = document.querySelector('.navbarmenu');
const menuItems = document.querySelector('.itemslist');
const listItems = document.querySelectorAll('.listitem');
const navBar = document.querySelector('.navbar');
const navbarIcon = document.querySelector('.navbaricon');
const crossButton = document.querySelectorAll('.btn-line');

let showMenu = false;
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menuItems.classList.add('show');
    navbarIcon.classList.add('show');
    navBar.classList.add('show');
    crossButton.forEach((item) => item.classList.add('show'));

    listItems.forEach((item) => item.classList.add('show'));

    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menuItems.classList.remove('show');
    navbarIcon.classList.remove('show');
    navBar.classList.remove('show');
    crossButton.forEach((item) => item.classList.remove('show'));
    listItems.forEach((item) => item.classList.remove('show'));

    showMenu = false;
  }
}

menuBtn.addEventListener('click', toggleMenu);

function closeMenu() {
  menuBtn.classList.remove('close');
  menuItems.classList.remove('show');
  navbarIcon.classList.remove('show');
  navBar.classList.remove('show');
  crossButton.forEach((item) => item.classList.remove('show'));
  listItems.forEach((item) => item.classList.remove('show'));

  showMenu = false;
}

listItems.forEach((item) => item.addEventListener('click', closeMenu));
