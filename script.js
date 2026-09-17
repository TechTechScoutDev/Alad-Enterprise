/* ==========================================================================
   ALAD ENTERPRISE - Interactive Functionality & Stripe Integration
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ----------------------------------------------------------------------
    // 1. Mobile Hamburger Menu Toggle
    // ----------------------------------------------------------------------
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
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
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ----------------------------------------------------------------------
// 3. Stripe Integration
// ----------------------------------------------------------------------

// Initialize Stripe with your Publishable Key
// IMPORTANT: Replace 'pk_test_TYooMQauvdEDq54NiTphI7jx' with your actual Stripe Publishable Key.
const stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

/**
 * Triggers the Stripe Checkout process.
 * @param {string} priceId - The ID of the price object from your Stripe Dashboard.
 */
function buyNow(priceId) {
    // NOTE: This is a demo alert. To make it functional:
    // 1. Create your products in the Stripe Dashboard.
    // 2. Replace the dummy 'price_...' IDs in the HTML with your real Stripe Price IDs.
    // 3. Replace the Publishable Key above with your actual key.
    // 4. Uncomment the code block below to enable the live checkout.
    
    alert("Stripe Checkout Integration Demo!\n\nTo make this live, you need to replace the dummy 'price_...' IDs with your real Stripe Price IDs and uncomment the `stripe.redirectToCheckout` code in script.js.");

    /*
    stripe.redirectToCheckout({
        lineItems: [{ price: priceId, quantity: 1 }],
        mode: 'payment',
        successUrl: window.location.href + '?success=true',
        cancelUrl: window.location.href + '?canceled=true',
    }).then(function (result) {
        if (result.error) {
            alert(result.error.message);
        }
    });
    */
}
