<template>
  <article class="blog-post-card" :class="{ 'expanded': isExpanded }">
    <header class="post-header" @click="toggleExpanded">
      <h2 class="post-title">{{ post.title }}</h2>
      <div class="post-meta">
        <span class="post-date">{{ formatDate(post.date) }}</span>
        <div class="post-actions">
          <router-link :to="`/blog/${post.id}`" class="read-more-link" @click.stop>Read More</router-link>
          <span class="expand-indicator">{{ isExpanded ? '−' : '+' }}</span>
        </div>
      </div>
      <p class="post-excerpt">{{ post.excerpt }}</p>
    </header>
    
    <div v-if="isExpanded" class="post-content">
      <component :is="post.component" />
    </div>
  </article>
</template>

<script>
export default {
  name: 'BlogPostCard',
  props: {
    post: {
      type: Object,
      required: true
    },
    expandedByDefault: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isExpanded: this.expandedByDefault
    }
  },
  methods: {
    toggleExpanded() {
      this.isExpanded = !this.isExpanded;
      this.$emit('toggle-expand', this.isExpanded);
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    }
  },
  watch: {
    expandedByDefault(newVal) {
      this.isExpanded = newVal;
    }
  }
}
</script>

<style scoped>
.blog-post-card {
  margin-bottom: 30px;
  border: 1px solid #e1e8ed;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
}

.blog-post-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.post-header {
  padding: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.post-header:hover {
  background-color: #f8f9fa;
}

.post-title {
  margin: 0 0 12px 0;
  color: #2c3e50;
  font-size: 1.6em;
  font-weight: 600;
  line-height: 1.3;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.post-date {
  color: #7f8c8d;
  font-size: 0.9em;
  font-weight: 500;
}

.post-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.read-more-link {
  color: #3498db;
  text-decoration: none;
  font-size: 0.9em;
  font-weight: 500;
  padding: 6px 12px;
  border: 1px solid #3498db;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.read-more-link:hover {
  background: #3498db;
  color: white;
}

.expand-indicator {
  font-size: 1.5em;
  font-weight: bold;
  color: #3498db;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.expanded .expand-indicator {
  transform: rotate(180deg);
}

.post-excerpt {
  color: #555;
  font-style: italic;
  line-height: 1.5;
  margin: 0;
  padding: 16px;
  background: #f8f9fa;
  border-left: 4px solid #3498db;
  border-radius: 4px;
}

.post-content {
  padding: 0 24px 24px 24px;
  border-top: 1px solid #e1e8ed;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.post-section {
  margin: 24px 0;
}

.post-section:first-child {
  margin-top: 24px;
}

.post-section h3 {
  color: #34495e;
  font-size: 1.3em;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #ecf0f1;
  font-weight: 600;
}

.section-content {
  line-height: 1.7;
  color: #333;
}

.section-content :deep(p) {
  margin-bottom: 16px;
  text-align: justify;
}

.section-content :deep(ul) {
  margin: 16px 0;
  padding-left: 24px;
}

.section-content :deep(li) {
  margin: 8px 0;
  line-height: 1.6;
}

.section-content :deep(strong) {
  font-weight: 700;
  color: #2c3e50;
}

.section-content :deep(em) {
  font-style: italic;
  color: #555;
}

.section-content :deep(code) {
  background: #f1f2f6;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9em;
  color: #e74c3c;
}

.section-content :deep(pre) {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 16px 0;
}

.section-content :deep(pre code) {
  background: none;
  color: inherit;
  padding: 0;
  font-size: 0.9em;
}

/* Responsive design */
@media (max-width: 768px) {
  .post-header {
    padding: 20px;
  }
  
  .post-content {
    padding: 0 20px 20px 20px;
  }
  
  .post-title {
    font-size: 1.4em;
  }
  
  .section-content :deep(p) {
    text-align: left;
  }
}
</style>
