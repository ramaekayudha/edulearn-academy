// =========================================
// 1. LOADING SCREEN CONTROLLER
// =========================================
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1500);
    }
});

// =========================================
// 2. DYNAMIC COPYRIGHT YEAR
// =========================================
document.getElementById('current-year').textContent = new Date().getFullYear();

// =========================================
// 3. TYPED.JS INITIALIZATION (Hero Section)
// =========================================
document.addEventListener('DOMContentLoaded', function() {
    const typedTextSpan = document.getElementById('typed-text');
    if (typedTextSpan) {
        new Typed(typedTextSpan, {
            strings: ["Learn Secure.", "Think Smart.", "Use AI Responsibly."],
            typeSpeed: 80,
            backSpeed: 50,
            loop: true,
            backDelay: 2000
        });
    }

    // =========================================
    // 4. AOS (Animate On Scroll) INITIALIZATION
    // =========================================
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // =========================================
    // 5. STICKY NAVBAR SCROLL EFFECT
    // =========================================
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('main-navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
            } else {
                navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
            }
        }
    });

    // =========================================
    // 6. COUNTER ANIMATION (Scroll Trigger)
    // =========================================
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const startCounting = (counter) => {
        const target = +counter.getAttribute('data-target');
        let current = 0;
        const updateCount = () => {
            const inc = target / speed;
            if (current < target) {
                current += inc;
                counter.innerText = Math.ceil(current);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
});