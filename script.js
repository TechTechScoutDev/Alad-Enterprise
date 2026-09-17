/* ==========================================================================
   ALAD ENTERPRISE - Interactive Functionality
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ----------------------------------------------------------------------
    // 1. Mobile Hamburger Menu Toggle
    // ----------------------------------------------------------------------
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggle the 'active' class on the navigation links container
            navLinks.classList.toggle('active');
            
            // Change the hamburger icon to a close (X) icon when open
            if (navLinks.classList.contains('active')) {
                hamburger.innerHTML = '✕';
                hamburger.setAttribute('aria-expanded', 'true');
            } else {
                hamburger.innerHTML = '☰';
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });

        // Close the mobile menu when any navigation link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '☰';
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ----------------------------------------------------------------------
    // 2. Smooth Scrolling for Internal Anchor Links
    // ----------------------------------------------------------------------
    // Note: CSS 'scroll-behavior: smooth;' is set on the <html> element, 
    // but this provides a more robust fallback and better control for older browsers.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Ignore if the link is just "#"
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault(); // Prevent default jump behavior
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});