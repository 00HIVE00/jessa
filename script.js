document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', String(isExpanded));
        });
    }

    // --- 2. Scroll Animation (Intersection Observer) ---
    
    // Select all elements with the .fade-in class
    const targets = document.querySelectorAll('.fade-in');

    // Set up the options for the observer
    const options = {
        root: null, // it is the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element must be visible
    };

    // Create the observer callback function
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible)
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the animation
                entry.target.classList.add('is-visible');
                
                // Stop observing the element once it's visible
                observer.unobserve(entry.target);
            }
        });
    };

    // Create the observer
    const observer = new IntersectionObserver(callback, options);

    // Observe each target element
    targets.forEach(target => {
        observer.observe(target);
    });

});