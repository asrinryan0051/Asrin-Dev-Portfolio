// Simple Intersection Observer for Fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.fade-in').forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// --- Mobile Sidebar Toggle Logic ---
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.mobile-overlay');
const navItems = document.querySelectorAll('.nav-links a');

function toggleMenu() {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Toggle the icon between hamburger (bars) and close (times)
    const icon = menuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Event Listeners
if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
if (overlay) overlay.addEventListener('click', toggleMenu);

// Close the sidebar when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});