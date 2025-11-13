 # Punk House Digital Website 🚀

## Quick Start Guide

Your website is now **super easy to update**! No more rebuilding everything. Just edit simple files and you're done.

---

## 📁 Site Structure

```
punkhousedigital/
├── index.html          # Homepage
├── blog.html           # Blog listing page
├── blog-post.html      # Individual blog post template
├── portfolio.html      # Portfolio page
├── styles.css          # All your styling
├── js/
│   ├── navigation.js   # Header & footer (update once, works everywhere)
│   ├── blog-loader.js  # Blog posts data
│   └── portfolio-loader.js  # Portfolio items data
```

---

## ✍️ How to Add a New Blog Post (30 seconds)

1. Open `js/blog-loader.js`
2. Find the `blogPosts` array at the top
3. Copy this template and add it to the array:

```javascript
{
    id: 2,  // Increment the number
    title: "Your Blog Title Here 🚀",
    slug: "your-blog-slug",
    date: "November 14, 2025",
    excerpt: "Short preview of your post that appears on the blog listing page.",
    content: `
        <p>Your full blog post content goes here.</p>
        
        <h2>Use H2 for Main Headings</h2>
        <p>Regular paragraphs look like this.</p>
        
        <h3>Use H3 for Subheadings</h3>
        <p>More content here.</p>
        
        <ul>
            <li>Bullet points work great</li>
            <li>For listing things</li>
        </ul>
        
        <p>You can add <strong>bold text</strong> and <a href="https://example.com">links</a> too!</p>
    `,
    tags: ["AI", "Business", "Whatever Tags You Want"]
}
```

4. Save the file
5. Deploy to Vercel (just push to GitHub or drag/drop)

**That's it!** Your new post is live.

---

## 🎨 How to Add a Portfolio Item (1 minute)

1. Open `js/portfolio-loader.js`
2. Find the `portfolioItems` array
3. Add a new item:

```javascript
{
    id: 2,  // Increment the number
    title: "Client Name Website",
    description: "Brief description of what you built and why it's awesome.",
    image: "path/to/screenshot.jpg",  // Or use a placeholder URL
    liveUrl: "https://clientwebsite.com",
    tech: ["HTML", "CSS", "JavaScript", "AI-Built"],
    date: "December 2025"
}
```

4. Save and deploy

**Pro tip:** Take a screenshot of the client site and save it in a `/images` folder, then reference it like: `image: "images/client-name.jpg"`

---

## 🆕 How to Add a New Page (5 minutes)

Want to add a gallery, about page, or anything else?

1. **Create the new HTML file** (e.g., `gallery.html`)
2. **Copy the structure from an existing page:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery | Punk House Digital</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation -->
    <nav id="main-nav"></nav>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1>Gallery 📸</h1>
            <p>Your gallery description here</p>
        </div>
    </section>

    <!-- Your Content -->
    <section class="container">
        <!-- Add your gallery content here -->
    </section>

    <!-- Footer -->
    <footer id="main-footer"></footer>

    <script src="js/navigation.js"></script>
</body>
</html>
```

3. **Add it to the navigation** - Open `js/navigation.js` and add your page to the nav links:

```javascript
<ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="portfolio.html">Portfolio</a></li>
    <li><a href="gallery.html">Gallery</a></li>  <!-- NEW PAGE -->
    <li><a href="index.html#contact">Contact</a></li>
</ul>
```

4. Save and deploy!

---

## 🎨 How to Change Colors/Styling

Open `styles.css` and change these variables at the top:

```css
:root {
    --primary: #8b5cf6;     /* Main purple color */
    --secondary: #ec4899;   /* Pink accent */
    --dark: #0f172a;        /* Dark blue background */
    --light: #f8fafc;       /* Light text */
}
```

Change these hex codes to any color you want!

---

## 🚀 How to Deploy

### Method 1: Vercel (Easiest)

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Done! Auto-deploys on every push

### Method 2: Direct Upload

1. Go to Vercel dashboard
2. Drag and drop the entire `punkhousedigital` folder
3. Done!

---

## 📝 Quick Reference

### Adding Blog Post
- File: `js/blog-loader.js`
- Time: 30 seconds
- Just add to the array!

### Adding Portfolio Item
- File: `js/portfolio-loader.js`
- Time: 1 minute
- Add to the array with image URL!

### Adding New Page
- Create new `.html` file
- Copy structure from existing page
- Add to navigation
- Time: 5 minutes

### Changing Navigation/Footer
- File: `js/navigation.js`
- Update once, changes everywhere!

### Styling Changes
- File: `styles.css`
- Colors at the top in `:root`

---

## 🤔 Common Tasks

**Q: How do I change my email address?**  
A: Open `index.html` and search for `adam@punkhousedigital.co.uk` - replace it everywhere

**Q: How do I add images to blog posts?**  
A: In the blog post content, use: `<img src="path/to/image.jpg" alt="description" style="width:100%; border-radius:12px; margin:2rem 0;">`

**Q: How do I change the homepage hero text?**  
A: Open `index.html` and find the `.hero` section - edit the text there

**Q: How do I add social media links?**  
A: Open `js/navigation.js` in the footer section and add your links

**Q: Can I change the font?**  
A: Yes! In `styles.css`, change the Google Fonts link and update `font-family: 'Inter'` to your new font

---

## 💡 Pro Tips

1. **Always save your changes before deploying**
2. **Test locally first** - just open `index.html` in your browser
3. **Keep backups** - commit to GitHub regularly
4. **Screenshot your portfolio sites** - makes them look professional
5. **Write blog posts in advance** - add them all at once when you're in the flow

---

## 🎯 What Makes This Site Special

✅ **Modular Design** - Navigation/footer in one place  
✅ **Easy Updates** - Just edit arrays, no rebuilding  
✅ **Fast Loading** - Optimized CSS and minimal JS  
✅ **Fully Responsive** - Looks great on all devices  
✅ **SEO Ready** - Proper meta tags and structure  
✅ **Scalable** - Add unlimited posts/portfolio items  

---

## 🆘 Need Help?

If something breaks or you're stuck:

1. Check the browser console for errors (F12)
2. Make sure all file paths are correct
3. Verify your JavaScript arrays have proper syntax
4. Ask Claude to fix it! 😉

---

**Built with AI. Maintained by you. Let's make this work! 🚀**
