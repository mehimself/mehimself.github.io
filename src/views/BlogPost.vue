<template>
  <div class="blog-post-view">
    <nav class="post-navigation">
      <router-link to="/blog" class="back-to-blog">← Back to Blog</router-link>
    </nav>
    
    <main class="post-container">
      <component v-if="post" :is="post.component" />
      <div v-else class="post-not-found">
        <h1>Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <router-link to="/blog" class="back-link">Return to Blog</router-link>
      </div>
    </main>
  </div>
</template>

<script>
import { blogPosts } from '../data/blogPosts.js'

export default {
  name: 'BlogPost',
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    post() {
      return blogPosts.find(post => post.id === this.slug);
    }
  }
}
</script>

<style scoped>
.blog-post-view {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.post-navigation {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e1e8ed;
}

.back-to-blog {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s ease;
}

.back-to-blog:hover {
  color: #2c3e50;
}

.post-container {
  min-height: 60vh;
}

.post-not-found {
  text-align: center;
  padding: 60px 20px;
}

.post-not-found h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.post-not-found p {
  color: #7f8c8d;
  margin-bottom: 30px;
  font-size: 1.1em;
}

.back-link {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  padding: 10px 20px;
  border: 2px solid #3498db;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.back-link:hover {
  background: #3498db;
  color: white;
}

/* Responsive design */
@media (max-width: 768px) {
  .blog-post-view {
    padding: 15px;
  }
}
</style>
