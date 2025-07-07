<template>
  <MarkdownPost :content="markdownContent" />
</template>

<script>
import MarkdownPost from '../MarkdownPost.vue'

export default {
  name: 'AiAndMemory',
  components: {
    MarkdownPost
  },
  data() {
    return {
      markdownContent: ''
    }
  },
  async mounted() {
    try {
      const response = await fetch('/src/content/ai-and-memory.md')
      this.markdownContent = await response.text()
    } catch (error) {
      console.error('Error loading markdown content:', error)
      this.markdownContent = `# AI and Memory

*January 10, 2025*

Error loading content. Please check the markdown file.`
    }
  }
}
</script>

<style scoped>
.blog-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;
  color: #333;
}

.post-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 40px 0;
  border-bottom: 2px solid #e1e8ed;
}

.post-header h1 {
  font-size: 2.5em;
  margin-bottom: 16px;
  color: #2c3e50;
  font-weight: 700;
}

.post-meta {
  margin-bottom: 20px;
}

.post-date {
  color: #7f8c8d;
  font-size: 1em;
  font-weight: 500;
}

.post-excerpt {
  font-size: 1.2em;
  font-style: italic;
  color: #555;
  margin: 0;
  padding: 20px;
  background: #f8f9fa;
  border-left: 4px solid #3498db;
  border-radius: 4px;
  max-width: 600px;
  margin: 0 auto;
}

.post-content {
  margin-top: 40px;
}

.post-section {
  margin: 40px 0;
}

.post-section h2 {
  color: #34495e;
  font-size: 1.8em;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #ecf0f1;
  font-weight: 600;
}

.post-section p {
  margin-bottom: 20px;
  text-align: justify;
}

.post-section ul {
  margin: 20px 0;
  padding-left: 30px;
}

.post-section li {
  margin: 10px 0;
  line-height: 1.6;
}

.disclaimer {
  background: #fff3cd;
  border-left: 4px solid #ffc107;
  padding: 15px;
  border-radius: 4px;
}

pre {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 20px 0;
}

code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9em;
}

strong {
  font-weight: 700;
  color: #2c3e50;
}

em {
  font-style: italic;
  color: #555;
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
  .blog-post {
    padding: 0 15px;
  }
  
  .post-header h1 {
    font-size: 2em;
  }
  
  .post-section h2 {
    font-size: 1.5em;
  }
  
  .post-section p {
    text-align: left;
  }
}
</style>
