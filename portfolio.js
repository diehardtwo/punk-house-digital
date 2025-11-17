// Portfolio projects data and loader for Punk House Digital

const portfolioProjects = [
    {
        title: "Scallywaggers Dog Walking",
        description: "Ultra-premium dog walking website with modern design. Clean, professional, and completely unlike typical pet service sites.",
        tags: ["Web Design", "Premium", "Service Business"],
        icon: "🐕",
        liveUrl: "scallywaggers.html",
        featured: true
    },
    {
        title: "Architecture Portfolio",
        description: "Minimalist portfolio site for an architecture firm. Focus on showcasing work with elegant simplicity.",
        tags: ["Portfolio", "Architecture", "Minimalist"],
        icon: "🏛️",
        liveUrl: null,
        featured: false
    },
    {
        title: "Tech Startup Landing",
        description: "Modern landing page for a SaaS product. Conversion-focused design with smooth animations.",
        tags: ["SaaS", "Landing Page", "Tech"],
        icon: "🚀",
        liveUrl: null,
        featured: false
    }
];

// Load portfolio on portfolio.html
function loadPortfolio() {
    const portfolioContainer = document.getElementById('portfolio-items');
    if (!portfolioContainer) return;

    portfolioContainer.innerHTML = portfolioProjects.map(project => `
        <div class="portfolio-card">
            <div class="portfolio-image">
                ${project.icon}
            </div>
            <div class="portfolio-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="blog-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div style="margin-top: 1rem;">
                    ${project.liveUrl 
                        ? `<a href="${project.liveUrl}" class="portfolio-link">View Live Site →</a>` 
                        : '<p style="color: var(--gray);">Coming Soon</p>'}
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolio();
});
