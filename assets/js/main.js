document.addEventListener('DOMContentLoaded', () => {
    // Mobile Drawer Navigation
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileDrawer = document.querySelector('.mobile-drawer');

    if (mobileBtn && mobileDrawer) {
        mobileBtn.addEventListener('click', () => {
            mobileDrawer.classList.toggle('open');
            const isOpen = mobileDrawer.classList.contains('open');
            mobileBtn.setAttribute('aria-expanded', isOpen);
        });
    }

    // Contact Form Handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.disabled = true;
                submitBtn.textContent = 'Transmitting to Atelier...';
                setTimeout(() => {
                    alert('Thank you for reaching out to SupperPlatter. Your evening platter inquiry has been safely routed to our Mercer Street culinary concierges. A specialist will review your table dimensions and guest count within 24 to 48 business hours.');
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }, 800);
            }
        });
    }
});
