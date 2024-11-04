const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav_list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('show');
});
