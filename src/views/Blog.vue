<template>
  <div class="blog-container">
    <header class="blog-header">
      <h1>Blog</h1>
      <p class="blog-description">
        Commentary on topics close to my interests in AI, software development, and knowledge systems.
      </p>
    </header>

    <div class="blog-controls">
      <button 
        @click="expandAll" 
        class="control-btn"
        :disabled="allExpanded"
      >
        Expand All
      </button>
      <button 
        @click="collapseAll" 
        class="control-btn"
        :disabled="!anyExpanded"
      >
        Collapse All
      </button>
    </div>

    <main class="blog-posts">
      <BlogPostCard
        v-for="post in blogPosts"
        :key="post.id"
        :post="post"
        :expanded-by-default="expandedPosts.includes(post.id)"
        @toggle-expand="togglePostExpansion(post.id)"
      />
    </main>
  </div>
</template>

<script>
import BlogPostCard from '../components/BlogPostCard.vue'
import { blogPosts } from '../data/blogPosts.js'

export default {
  name: 'Blog',
  components: {
    BlogPostCard
  },
  data() {
    return {
      blogPosts,
      expandedPosts: []
    }
  },
  computed: {
    allExpanded() {
      return this.expandedPosts.length === this.blogPosts.length;
    },
    anyExpanded() {
      return this.expandedPosts.length > 0;
    }
  },
  methods: {
    expandAll() {
      this.expandedPosts = this.blogPosts.map(post => post.id);
    },
    collapseAll() {
      this.expandedPosts = [];
    },
    togglePostExpansion(postId) {
      const index = this.expandedPosts.indexOf(postId);
      if (index > -1) {
        this.expandedPosts.splice(index, 1);
      } else {
        this.expandedPosts.push(postId);
      }
    }
  },
  mounted() {
    // Expand the first post by default
    if (this.blogPosts.length > 0) {
      this.expandedPosts.push(this.blogPosts[0].id);
    }
  }
}
</script>

<style scoped>
.blog-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.blog-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 40px 0;
  border-bottom: 2px solid #e1e8ed;
}

.blog-header h1 {
  font-size: 2.8em;
  margin-bottom: 16px;
  color: #2c3e50;
  font-weight: 700;
}

.blog-description {
  font-size: 1.2em;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.blog-controls {
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
  justify-content: center;
}

.control-btn {
  padding: 10px 20px;
  border: 2px solid #3498db;
  background: white;
  color: #3498db;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.control-btn:hover:not(:disabled) {
  background: #3498db;
  color: white;
}

.control-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.blog-posts {
  margin-top: 30px;
}

/* Responsive design */
@media (max-width: 768px) {
  .blog-container {
    padding: 15px;
  }
  
  .blog-header h1 {
    font-size: 2.2em;
  }
  
  .blog-description {
    font-size: 1.1em;
  }
  
  .blog-controls {
    flex-direction: column;
    align-items: center;
  }
  
  .control-btn {
    width: 200px;
  }
}
</style>
