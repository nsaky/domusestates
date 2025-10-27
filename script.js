const toggleButton = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

// When hamburger is clicked, toggle the .active class on the nav links list
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});