document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Tab switching logic
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-tab');

            // Remove active class from all links and contents
            navLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked link and target content
            link.classList.add('active');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
                
                // Scroll to top when switching tabs
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    // Simple scroll effect for navigation
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.padding = '1rem 5%';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        } else {
            nav.style.padding = '1.5rem 5%';
            nav.style.boxShadow = 'none';
        }
    });

    // Handle initial state if URL has a hash
    const hash = window.location.hash.substring(1);
    if (hash) {
        const initialTab = document.querySelector(`[data-tab="${hash}"]`);
        if (initialTab) initialTab.click();
    }
});
