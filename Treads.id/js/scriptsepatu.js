// Toggle class active
const navbarnav = document.querySelector('.navbar-nav');
// jika hamburger di click
document.querySelector('#hamburger-menu').onclick = () => {
    navbarnav.classList.toggle('active');
};

// click di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
const searchBox = document.querySelector('search-button');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }

    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});

const searchButton = document.querySelector('#search');
const searchForm = document.querySelector('.search-form');
searchButton.onclick = (e) => {
    e.preventDefault();
searchForm.classList.toggle('active');
}