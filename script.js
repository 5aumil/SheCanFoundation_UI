// Dark Theme Toggle Function
let isDarkTheme = false;

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    
    if (isDarkTheme) {
        enableDarkTheme();
    } else {
        disableDarkTheme();
    }
}

function enableDarkTheme() {
    // Main body
    document.body.style.backgroundColor = '#1a1a1a';
    document.body.style.color = '#ffffff';

    // Section 1 - Header
    const section1 = document.querySelector('.section1');
    if (section1) {
        section1.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)';
    }

    // Section 1a - Navigation
    const section1a = document.querySelector('.section1a');
    if (section1a) {
        section1a.style.background = 'rgba(0, 0, 0, 0.5)';
    }

    // Section 1b - Logo and heading
    const section1b = document.querySelector('.section1b');
    if (section1b) {
        section1b.style.color = '#ffffff';
        const heading = section1b.querySelector('h1');
        if (heading) heading.style.color = '#ff6b9d';
        const tagline = section1b.querySelector('p');
        if (tagline) tagline.style.color = '#cccccc';
    }

    // Organization Section
    const orgSection = document.querySelector('.organization-section');
    if (orgSection) {
        orgSection.style.backgroundColor = '#222222';
        orgSection.style.color = '#ffffff';
    }

    // Section header text
    const sectionHeader = document.querySelector('.section-header');
    if (sectionHeader) {
        sectionHeader.style.color = '#ffffff';
        const h2 = sectionHeader.querySelector('h2');
        if (h2) h2.style.color = '#ffffff';
        const p = sectionHeader.querySelector('p');
        if (p) p.style.color = '#cccccc';
    }

    // Container Fluid Cards (white cards to black)
    const containers = document.querySelectorAll('.container-fluid');
    containers.forEach(container => {
        container.style.background = '#2a2a2a';
        container.style.color = '#ffffff';
        container.style.boxShadow = '0 2px 6px rgba(255, 255, 255, 0.1)';
        
        const h3 = container.querySelector('h3');
        if (h3) h3.style.color = '#ff6b9d';
        
        const p = container.querySelector('p');
        if (p) p.style.color = '#cccccc';
    });

    // About Section container
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
        aboutSection.style.color = '#ffffff';
    }

    // Theme button styling
    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
        themeBtn.textContent = '☀️ Light Theme';
        themeBtn.style.background = 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)';
        themeBtn.style.color = '#000000';
    }

    // Save theme preference
    localStorage.setItem('theme', 'dark');
}

function disableDarkTheme() {
    // Main body
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';

    // Section 1 - Header
    const section1 = document.querySelector('.section1');
    if (section1) {
        section1.style.background = 'linear-gradient(135deg, #fff5e1 0%, #ffe4f5 100%)';
    }

    // Section 1a - Navigation
    const section1a = document.querySelector('.section1a');
    if (section1a) {
        section1a.style.background = 'rgba(214, 51, 132, 0.08)';
    }

    // Section 1b - Logo and heading
    const section1b = document.querySelector('.section1b');
    if (section1b) {
        section1b.style.color = '#000000';
        const heading = section1b.querySelector('h1');
        if (heading) heading.style.color = '#d63384';
        const tagline = section1b.querySelector('p');
        if (tagline) tagline.style.color = '#666666';
    }

    // Organization Section
    const orgSection = document.querySelector('.organization-section');
    if (orgSection) {
        orgSection.style.backgroundColor = '#f9f9f9';
        orgSection.style.color = '#000000';
    }

    // Section header text
    const sectionHeader = document.querySelector('.section-header');
    if (sectionHeader) {
        sectionHeader.style.color = '#000000';
        const h2 = sectionHeader.querySelector('h2');
        if (h2) h2.style.color = '#000000';
        const p = sectionHeader.querySelector('p');
        if (p) p.style.color = '#333333';
    }

    // Container Fluid Cards (back to white)
    const containers = document.querySelectorAll('.container-fluid');
    containers.forEach(container => {
        container.style.background = '#ffffff';
        container.style.color = '#000000';
        container.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.08)';
        
        const h3 = container.querySelector('h3');
        if (h3) h3.style.color = '#000000';
        
        const p = container.querySelector('p');
        if (p) p.style.color = '#333333';
    });

    // About Section container
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
        aboutSection.style.color = '#000000';
    }

    // Theme button styling
    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
        themeBtn.textContent = '🌙 Dark Theme';
        themeBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        themeBtn.style.color = '#ffffff';
    }

    // Save theme preference
    localStorage.setItem('theme', 'light');
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        isDarkTheme = false; // Set to false so toggleTheme will set it to true
        toggleTheme();
    }
});