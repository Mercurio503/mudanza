document.getElementById('menu-btn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.scroll-section');

    const checkScroll = () => {
        sections.forEach(section => {
            const sectionPos = section.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;

            if (sectionPos < screenPos) {
                section.classList.add('scroll-section');
            }
        });
    };

    window.addEventListener('scroll', checkScroll);

    // Trigger scroll check on load
    checkScroll();
});
