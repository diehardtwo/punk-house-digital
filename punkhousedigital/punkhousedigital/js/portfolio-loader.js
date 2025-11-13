// Portfolio Items Data
// To add a new portfolio item, just add a new object to this array!
const portfolioItems = [
    {
        id: 1,
        title: "Scallywag Dog Walking",
        description: "Professional dog walking service website with booking functionality, service showcase, and contact forms. Built with AI in under 2 hours.",
        image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Scallywag+Dog+Walking",
        liveUrl: "#", // Add actual URL when deployed
        tech: ["HTML", "CSS", "JavaScript", "AI-Generated"],
        date: "November 2025"
    }
    // ADD NEW PORTFOLIO ITEMS HERE - Just copy the structure above!
    // Example:
    // {
    //     id: 2,
    //     title: "Your Next Client Site",
    //     description: "Description of what you built",
    //     image: "path/to/screenshot.jpg",
    //     liveUrl: "https://clientsite.com",
    //     tech: ["React", "Node.js", "AI-Powered"],
    //     date: "December 2025"
    // }
];

// Load portfolio items
function loadPortfolio() {
    const container = document.getElementById('portfolio-items');
    if (!container) return;
    
    if (portfolioItems.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <h3>Portfolio Coming Soon! 🚀</h3>
                <p style="color: var(--gray); margin-top: 1rem;">First client project launching soon. Watch this space.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = portfolioItems.map(item => `
        <div class="portfolio-card">
            <img src="${item.image}" alt="${item.title}" class="portfolio-image" onerror="this.src='https://via.placeholder.com/400x250/8b5cf6/ffffff?text=${encodeURIComponent(item.title)}'">
            <div class="portfolio-content">
                <h3>${item.title}</h3>
                <p class="portfolio-description">${item.description}</p>
                <div class="portfolio-tech">
                    ${item.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <p style="color: var(--gray); font-size: 0.9rem; margin-bottom: 1rem;">${item.date}</p>
                ${item.liveUrl !== '#' ? `<a href="${item.liveUrl}" target="_blank" class="portfolio-link">View Live Site →</a>` : '<p style="color: var(--gray);">Coming Soon</p>'}
            </div>
        </div>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolio();
});
