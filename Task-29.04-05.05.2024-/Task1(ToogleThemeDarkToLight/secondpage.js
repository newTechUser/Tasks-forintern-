document.addEventListener('DOMContentLoaded', function() {
    const themeTogglebtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    themeTogglebtn.addEventListener('click', function() {
        body.classList.toggle('dark');
        body.classList.toggle('light');

        const theme = body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }
});
