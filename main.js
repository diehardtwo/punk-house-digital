// Main JavaScript for Punk House Digital Homepage

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(15, 23, 42, 0.98)';
    } else {
        nav.style.background = 'rgba(15, 23, 42, 0.95)';
    }
});

// Load latest blog posts on homepage
function loadLatestBlogPosts() {
    const blogContainer = document.getElementById('latest-posts');
    if (!blogContainer) return;

    // Blog posts data
    const blogPosts = [
        {
            title: "ADHD and AI: How I Actually Get Stuff Done",
            excerpt: "Real talk about building a business when your brain works differently. No productivity porn, just what actually works.",
            date: "November 2024",
            tags: ["ADHD", "AI", "Business"],
            slug: "adhd-and-ai"
        },
        {
            title: "Building in Public: Week One",
            excerpt: "First week of the experiment. What worked, what didn't, and what I learned about AI-assisted development.",
            date: "November 2024",
            tags: ["Build in Public", "Learning"],
            slug: "week-one"
        },
        {
            title: "Why I'm Doing This",
            excerpt: "The honest reason behind starting an AI-powered web design business. Spoiler: it's not what you think.",
            date: "November 2024",
            tags: ["Meta", "Business"],
            slug: "why-im-doing-this"
        }
    ];

    // Show only the 3 most recent posts
    const recentPosts = blogPosts.slice(0, 3);

    blogContainer.innerHTML = recentPosts.map(post => `
        <div class="blog-card">
            <div class="blog-card-content">
                <div class="blog-meta">${post.date}</div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadLatestBlogPosts();
});
