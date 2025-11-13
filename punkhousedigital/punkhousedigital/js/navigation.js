// Navigation Component
function loadNavigation() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    
    nav.innerHTML = `
        <div class="nav-container">
            <a href="index.html" class="nav-logo">PUNK HOUSE</a>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="index.html#contact">Contact</a></li>
            </ul>
        </div>
    `;
}

// Footer Component
function loadFooter() {
    const footer = document.getElementById('main-footer');
    if (!footer) return;
    
    footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-logo">PUNK HOUSE DIGITAL</div>
            <p class="footer-text">AI-Powered Web Design & SEO | Building a Business with AI</p>
            <p class="footer-text">© ${new Date().getFullYear()} Punk House Digital. Made with AI. Refined by humans.</p>
            <div class="footer-links">
                <a href="index.html">Home</a>
                <a href="blog.html">Blog</a>
                <a href="portfolio.html">Portfolio</a>
                <a href="mailto:adam@punkhousedigital.co.uk">Contact</a>
            </div>
        </div>
    `;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadNavigation();
    loadFooter();
});
