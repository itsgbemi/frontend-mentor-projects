  // Theme toggle script
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');
const body = document.body;

moonIcon.addEventListener('click', () => {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    sunIcon.src = 'icon/dark-sun.svg'; // Change to dark sun icon
    moonIcon.src = 'icon/dark-moon.svg'; // Change to dark moon icon
    moonIcon.classList.add('border'); // Add border to moon icon
    sunIcon.classList.remove('border'); // Remove border from sun icon

    // Change social icons to dark versions
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.src = icon.getAttribute('data-dark'); // Set to dark icon
    });
});

sunIcon.addEventListener('click', () => {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    sunIcon.src = 'icon/light-sun.svg'; // Change back to light sun icon
    moonIcon.src = 'icon/light-moon.svg'; // Change back to light moon icon
    moonIcon.classList.remove('border'); // Remove border from moon icon
    sunIcon.classList.add('border'); // Add border to sun icon

    // Change social icons to light versions
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.src = icon.getAttribute('data-light'); // Set to light icon
    });
});