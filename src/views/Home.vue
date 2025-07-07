<template>
  <div class="home">
    <header class="profile-header">
      <h1>Max Roald Eckardt</h1>
      <p class="subtitle">Senior Solution Architect with the genAI Tribe at <a href="https://danskebank.dk/erhverv/forside" target="_blank">Danske Bank Erhverv</a></p>
      <p>See my <a href="https://www.linkedin.com/in/max-roald-eckardt-69706071/" target="_blank">CV on LinkedIn</a></p>
      <p class="intro">I use this page as a blog for commentary on topics close to my interests.</p>
      
      <div class="cta-section">
        <router-link to="/blog" class="blog-cta">
          Read My Blog Posts
        </router-link>
      </div>
    </header>

    <main class="featured-content">
      <section class="recent-posts">
        <h2>Recent Posts</h2>
        <div class="post-previews">
          <article v-for="post in recentPosts" :key="post.id" class="post-preview">
            <h3>
              <router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link>
            </h3>
            <p class="post-date">{{ formatDate(post.date) }}</p>
            <p class="post-excerpt">{{ post.excerpt }}</p>
            <router-link :to="`/blog/${post.id}`" class="read-more">Read More →</router-link>
          </article>
        </div>
        
        <div class="view-all">
          <router-link to="/blog" class="view-all-link">View All Posts</router-link>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { blogPosts } from '../data/blogPosts.js'

export default {
  name: 'Home',
  computed: {
    recentPosts() {
      return blogPosts.slice(0, 2); // Show first 2 posts
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    }
  }
}
</script>

<style scoped>
.home {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.profile-header {
  text-align: center;
  margin-bottom: 50px;
  padding: 40px 0;
  border-bottom: 2px solid #eee;
}

.profile-header h1 {
  font-size: 2.8em;
  margin-bottom: 16px;
  color: #2c3e50;
  font-weight: 700;
}

.subtitle {
  font-size: 1.3em;
  color: #7f8c8d;
  margin-bottom: 10px;
}

.intro {
  font-style: italic;
  color: #666;
  margin: 20px 0;
  font-size: 1.1em;
}

.cta-section {
  margin-top: 30px;
}

.blog-cta {
  display: inline-block;
  background: #3498db;
  color: white;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1em;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
}

.blog-cta:hover {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(52, 152, 219, 0.4);
}

.featured-content {
  margin-top: 40px;
}

.recent-posts h2 {
  color: #2c3e50;
  font-size: 2em;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 600;
}

.post-previews {
  display: grid;
  gap: 30px;
  margin-bottom: 40px;
}

.post-preview {
  padding: 30px;
  border: 1px solid #e1e8ed;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.post-preview:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.post-preview h3 {
  margin: 0 0 12px 0;
  font-size: 1.4em;
  font-weight: 600;
}

.post-preview h3 a {
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.3s ease;
}

.post-preview h3 a:hover {
  color: #3498db;
}

.post-date {
  color: #7f8c8d;
  font-size: 0.9em;
  margin-bottom: 15px;
  font-weight: 500;
}

.post-excerpt {
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

.read-more {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95em;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: #2980b9;
}

.view-all {
  text-align: center;
  margin-top: 40px;
}

.view-all-link {
  display: inline-block;
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1em;
  padding: 12px 24px;
  border: 2px solid #3498db;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.view-all-link:hover {
  background: #3498db;
  color: white;
}

a {
  color: #3498db;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Responsive design */
@media (max-width: 768px) {
  .home {
    padding: 15px;
  }
  
  .profile-header h1 {
    font-size: 2.2em;
  }
  
  .subtitle {
    font-size: 1.1em;
  }
  
  .post-preview {
    padding: 20px;
  }
  
  .blog-cta {
    padding: 12px 24px;
    font-size: 1em;
  }
}
</style>