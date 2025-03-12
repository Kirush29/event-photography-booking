// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Modal functionality
const modal = document.getElementById('booking-modal');
const bookNowButtons = document.querySelectorAll('.book-now');
const closeModal = document.querySelector('.close-modal');

bookNowButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Form submission (placeholder)
document.getElementById('booking-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Booking submitted! We will contact you soon.');
    modal.style.display = 'none';
});

// Scroll animations
const animateElements = document.querySelectorAll('.animate-card, .animate-text');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.2 });

animateElements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});