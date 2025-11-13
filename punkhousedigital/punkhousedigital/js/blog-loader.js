// Blog Posts Data
// To add a new blog post, just add a new object to this array!
const blogPosts = [
    {
        id: 1,
        title: "How AI Became My ADHD Brain's Best Friend 🧠✨",
        slug: "ai-adhd-best-friend",
        date: "November 13, 2025",
        excerpt: "Ever been 'caught' procrastinating by AI? Yeah, me too. Multiple times. Here's how AI tools actually help ADHD brains stay focused and productive.",
        content: `
            <p>Ever been "caught" procrastinating by AI? Yeah, me too. Multiple times. 😅</p>
            
            <p>Here's the thing about living with ADHD symptoms: your brain is like having 47 browser tabs open at once, and three of them are playing music, but you can't figure out which ones.</p>
            
            <h2>The Daily Struggle:</h2>
            <ul>
                <li>You start organizing your desk 📝</li>
                <li>Find an old book 📚</li>
                <li>Start reading it</li>
                <li>Remember you need to email someone 📧</li>
                <li>Open laptop</li>
                <li>See those 47 tabs...</li>
                <li>Three hours later: desk still a mess 🤦‍♂️</li>
            </ul>
            
            <p>Sound familiar?</p>
            
            <h2>Why AI Actually Gets It 🤖</h2>
            
            <p>Traditional productivity tools? They're like telling someone with a broken leg to "just walk it off." The advice isn't wrong—it just doesn't account for the actual problem.</p>
            
            <p>But AI? AI can be the support that adapts to your brain instead of demanding that you adapt to it.</p>
            
            <p><strong>Here's what makes AI different:</strong></p>
            <ul>
                <li>✅ Never judges when you ask the same thing twice</li>
                <li>✅ Calls you out when you're procrastinating (trust me, it's brutal but helpful)</li>
                <li>✅ Captures thoughts before they vanish into the void</li>
                <li>✅ Infinite patience with your tangents and rabbit holes</li>
            </ul>
            
            <h2>The Real Game-Changers 🎯</h2>
            
            <h3>1. Task Breakdown Without the Overwhelm</h3>
            <p>Magic ToDo lets you type in a big, scary task and breaks it down into manageable steps—like a friendly productivity goblin holding your hand.</p>
            
            <h3>2. Your Digital Body Double</h3>
            <p>You can use an AI tool as a digital body double by setting a timer and narrating your work out loud. For ADHD brains, having that "presence" helps maintain focus without needing another human's time.</p>
            
            <h3>3. Capturing Brain Explosions 💥</h3>
            <p>That 2 AM genius idea? AI tools act like digital working memory, capturing ideas in real time whether through chatbots, voice-to-text, or note-taking assistants. No more "what was that brilliant thing I thought of?"</p>
            
            <h3>4. Time Management That's Actually Realistic ⏰</h3>
            <p>AI calendar tools automatically schedule focused work blocks for tasks, habits, or routines, helping your calendar show the reality of your time without manual maintenance.</p>
            
            <h3>5. Getting Unstuck Fast 🚀</h3>
            <p>AI can create a rough draft of a tricky email for you to refine, give you options for getting unstuck, or help you rehearse phone calls you're dreading. Starting is the hardest part. AI removes that blank page terror.</p>
            
            <h2>My Honest Take 💯</h2>
            
            <p>I've always suspected I have ADHD. The hyperfocus, the task-switching, the "productive procrastination"—it's all there. And AI has literally called me out multiple times:</p>
            
            <p><strong>Me:</strong> "I'm at work, gotta go!"<br>
            <strong>AI:</strong> "You're still here talking. You're procrastinating." 😂</p>
            
            <p>That's the brutal honesty your ADHD brain needs.</p>
            
            <h2>The Bigger Experiment 🚀</h2>
            
            <p>This post? Written almost entirely by AI. The research, the structure, even calling me out on my procrastination—that's all Claude doing the heavy lifting.</p>
            
            <p><strong>Why?</strong> Because I'm documenting an experiment: Can I make a living by having AI do all the actual work?</p>
            
            <p>At <a href="https://punkhousedigital.co.uk">Punk House Digital</a>, I'm building websites, writing content, and running SEO—all powered by AI. I'm the strategist and executor, but AI is the engine. 🏎️</p>
            
            <p>The irony? An ADHD brain partnered with AI might be the perfect combo. I bring the chaos and creativity. AI brings the structure and follow-through.</p>
            
            <h2>Start Simple 🎯</h2>
            
            <p>Don't overcomplicate it:</p>
            <ol>
                <li>Pick ONE tool (ChatGPT/Claude are free)</li>
                <li>Use it for ONE thing (task breakdown or voice notes)</li>
                <li>Do it daily for 2 weeks</li>
                <li>Add more gradually</li>
            </ol>
            
            <p>Your ADHD brain isn't broken—it's just wired differently. 🌈</p>
            
            <p>The Ferrari engine finally has decent brakes. 🏎️💨</p>
        `,
        tags: ["ADHD", "AI", "Productivity", "Personal"]
    }
    // ADD NEW BLOG POSTS HERE - Just copy the structure above!
];

// Load blog posts preview (for homepage)
function loadBlogPreview() {
    const container = document.getElementById('blog-posts-preview');
    if (!container) return;
    
    // Show latest 3 posts
    const latestPosts = blogPosts.slice(0, 3);
    
    container.innerHTML = latestPosts.map(post => `
        <a href="blog-post.html?id=${post.id}" class="blog-card">
            <div class="blog-card-content">
                <p class="blog-date">${post.date}</p>
                <h3>${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <span class="read-more">Read More →</span>
            </div>
        </a>
    `).join('');
}

// Load all blog posts (for blog page)
function loadAllBlogPosts() {
    const container = document.getElementById('blog-posts-list');
    if (!container) return;
    
    container.innerHTML = blogPosts.map(post => `
        <a href="blog-post.html?id=${post.id}" class="blog-list-item">
            <p class="blog-date">${post.date}</p>
            <h2>${post.title}</h2>
            <p class="blog-excerpt">${post.excerpt}</p>
            <div class="blog-tags">
                ${post.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
            </div>
        </a>
    `).join('');
}

// Load individual blog post
function loadBlogPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const post = blogPosts.find(p => p.id === postId);
    
    if (!post) {
        document.getElementById('blog-post-content').innerHTML = '<p>Post not found!</p>';
        return;
    }
    
    document.getElementById('blog-post-title').textContent = post.title;
    document.getElementById('blog-post-date').textContent = post.date;
    document.getElementById('blog-post-body').innerHTML = post.content;
    
    // Update page title
    document.title = `${post.title} | Punk House Digital`;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPreview();
});
