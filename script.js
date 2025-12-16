/* Smooth scrolling for navigation links */
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevent default jump
        e.preventDefault();

        // Get the target section's ID (e.g., '#about')
        const targetId = this.getAttribute('href');
        
        // Scroll smoothly to the target element
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Simple header scroll effect (adds a background to the nav when scrolling) */
window.addEventListener('scroll', function() {
    const header = document.querySelector('nav');
    // If user scrolls down more than 50px
    if (window.scrollY > 50) {
        header.classList.add('scrolled'); // Apply the background style
    } else {
        header.classList.remove('scrolled'); // Remove the background style
    }
});
