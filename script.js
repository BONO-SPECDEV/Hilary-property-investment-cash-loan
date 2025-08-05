document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Play cha-ching sound
            const audio = new Audio('https://www.soundjay.com/mechanical/sounds/cash-register-01.mp3');
            audio.play();
            
            // Show success message
            alert('Application submitted successfully! We will contact you shortly.');
            form.reset();
        });
    }
