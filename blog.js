// Blog posts data and loader for Punk House Digital

const blogPosts = [
    {
        title: "ADHD and AI: How I Actually Get Stuff Done",
        excerpt: "Real talk about building a business when your brain works differently. No productivity porn, just what actually works.",
        date: "November 2024",
        tags: ["ADHD", "AI", "Business"],
        slug: "adhd-and-ai",
        content: `
            <p>Let's be honest: running a business with ADHD is... interesting. Some days I'm in hyperfocus mode building an entire website in 6 hours. Other days I spend 3 hours researching the perfect shade of purple for a button.</p>
            
            <p>AI tools have genuinely changed the game for me. Not because they're magic productivity hacks, but because they work with how my brain actually functions.</p>
            
            <h2>What Actually Works</h2>
            
            <p><strong>1. Claude for hyperfocus sessions</strong><br>
            When I'm locked in, Claude keeps up. I can build entire websites in a single sitting because I don't have to context-switch between coding, designing, and problem-solving. It's all one flow.</p>
            
            <p><strong>2. Breaking down the overwhelm</strong><br>
            Big projects used to paralyze me. Now I just ask Claude to break them into tiny steps. My brain can handle "create a navigation bar" way better than "build a website."</p>
            
            <p><strong>3. Documentation I'll actually read</strong><br>
            I document everything in natural language. Future me can ask Claude "how did I set up that DNS thing?" instead of reading through cryptic notes.</p>
            
            <h2>What Doesn't Work</h2>
            
            <p>AI can't fix executive dysfunction. I still have days where I can't start. The difference is now I have tools that work with my brain instead of against it when I can work.</p>
            
            <p>This isn't a cure or a hack. It's just... finally having tools that match how I actually think.</p>
        `
    },
    {
        title: "Building in Public: Week One",
        excerpt: "First week of the experiment. What worked, what didn't, and what I learned about AI-assisted development.",
        date: "November 2024",
        tags: ["Build in Public", "Learning"],
        slug: "week-one",
        content: `
            <p>Week one of building Punk House Digital in public. Here's the unfiltered version.</p>
            
            <h2>What Got Done</h2>
            <ul>
                <li>Main website live (you're looking at it)</li>
                <li>Portfolio site for a dog walking business (ultra-premium, not cutesy)</li>
                <li>DNS configurations that actually work</li>
                <li>First blog posts written</li>
            </ul>
            
            <h2>What I Learned</h2>
            
            <p><strong>GitHub Pages is finicky</strong><br>
            Spent hours debugging why my custom domain wasn't working. Turns out DNS propagation is real and you just have to wait sometimes.</p>
            
            <p><strong>Design matters more than I thought</strong><br>
            I can build functional sites easily with AI. Making them look premium? That's the real skill I'm developing.</p>
            
            <p><strong>Documentation is everything</strong><br>
            Future me needs to know how present me solved problems. Writing this stuff down is tedious but necessary.</p>
            
            <h2>Next Week's Goals</h2>
            <ul>
                <li>Finish 2 more showcase sites</li>
                <li>Start reaching out to potential clients</li>
                <li>Write a proper SEO guide</li>
            </ul>
        `
    },
    {
        title: "Why I'm Doing This",
        excerpt: "The honest reason behind starting an AI-powered web design business. Spoiler: it's not what you think.",
        date: "November 2024",
        tags: ["Meta", "Business"],
        slug: "why-im-doing-this",
        content: `
            <p>I'm not doing this because I think AI will replace developers. I'm doing this because I want to see if someone like me—who codes but isn't a "developer"—can build a real business with AI as a co-pilot.</p>
            
            <h2>The Real Reason</h2>
            
            <p>I've always been interested in web design but never quite good enough at coding to do it professionally. AI changed that equation. Now I can focus on design, user experience, and client relationships while Claude handles the technical heavy lifting.</p>
            
            <h2>The Experiment</h2>
            
            <p>Can you make a living building websites where AI does 80% of the technical work? That's what I'm here to find out.</p>
            
            <p>I'm documenting everything:</p>
            <ul>
                <li>How I get clients</li>
                <li>What I charge</li>
                <li>How long projects take</li>
                <li>What works and what doesn't</li>
            </ul>
            
            <h2>Why Public?</h2>
            
            <p>Because the internet has too much perfectly curated success content. I want to show the messy middle. The failed attempts. The things that take way longer than they should.</p>
            
            <p>Also, building in public forces accountability. If I say I'm going to do something here, I have to actually do it.</p>
        `
    }
];

// Load blog posts on blog.html
function loadBlogPosts() {
    const blogContainer = document.getElementById('blog-posts');
    if (!blogContainer) return;

    blogContainer.innerHTML = blogPosts.map(post => `
        <a href="blog.html#${post.slug}" class="blog-card">
            <div class="blog-card-content">
                <div class="blog-meta">${post.date}</div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </a>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts();
});
