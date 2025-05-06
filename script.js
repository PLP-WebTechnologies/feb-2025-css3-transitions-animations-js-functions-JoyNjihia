// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme);
});

// Toggle theme and save preference
document.getElementById('theme-toggle').addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('light') ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.classList.replace(currentTheme, newTheme);
    localStorage.setItem('theme', newTheme);
});

// Trigger animation on button click
document.getElementById('animate-btn').addEventListener('click', () => {
    const button = document.getElementById('animate-btn');
    button.classList.add('bounce');
    setTimeout(() => {
        button.classList.remove('bounce');
    }, 500);
});
