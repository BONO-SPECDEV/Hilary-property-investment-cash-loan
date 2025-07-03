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

    // Create additional floating money elements
    for (let i = 0; i < 5; i++) {
        createFloatingMoney();
    }
});

function createFloatingMoney() {
    const money = document.createElement('div');
    money.className = 'floating-money';
    money.style.left = Math.random() * 100 + 'vw';
    money.style.top = Math.random() * 100 + 'vh';
    money.style.transform = `rotate(${Math.random() * 360}deg)`;
    money.style.animationDuration = 10 + Math.random() * 20 + 's';
    money.style.opacity = 0.3 + Math.random() * 0.5;
    money.style.width = (50 + Math.random() * 150) + 'px';
    money.style.height = (30 + Math.random() * 100) + 'px';
    
    document.querySelector('.hero').appendChild(money);
}