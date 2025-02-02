// Update current year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Scroll progress bar
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
});

// Scroll direction detection for fade-in and fade-out
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // If the section is entering the viewport, make it visible
        if (sectionTop < window.innerHeight && sectionBottom > 0) {
            section.classList.add('visible');
            section.classList.remove('unload');
        } else {
            // If the section is leaving the viewport, unload it
            section.classList.remove('visible');
            section.classList.add('unload');
        }
    });

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});