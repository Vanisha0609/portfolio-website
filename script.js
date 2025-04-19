// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    // Toggle mobile menu when button is clicked
    menuToggle.addEventListener('click', function() {
        // Toggle 'active' class on the navigation menu
        navMenu.classList.toggle('active');
        
        // Change icon based on menu state
        if (navMenu.classList.contains('active')) {
            menuToggle.textContent = '✕'; // Show close icon
        } else {
            menuToggle.textContent = '☰'; // Show hamburger icon
        }
    });
});