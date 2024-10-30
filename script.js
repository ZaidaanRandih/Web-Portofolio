document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Responsive menu toggle (for mobile view)
    const nav = document.querySelector('nav ul');
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = 'Menu';
    toggleButton.classList.add('nav-toggle');
    document.querySelector('header').appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
});
