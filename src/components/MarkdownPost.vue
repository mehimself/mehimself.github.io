<template>
  <article class="markdown-post">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">Error loading post: {{ error }}</div>
    <Markdown 
      v-else
      :source="content" 
      :options="markdownOptions"
      class="markdown-content"
    />
  </article>
</template>

<script>
import Markdown from 'vue3-markdown-it'

export default {
  name: 'MarkdownPost',
  components: {
    Markdown
  },
  props: {
    initialContent: {
      type: String,
      default: ''
    },
    markdownFile: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      loading: false,
      error: null,
      loadedContent: '',
      markdownOptions: {
        html: true,
        linkify: true,
        typographer: true,
        breaks: true,
        highlight: function (str) {
          // Simple syntax highlighting placeholder
          return `<pre class="hljs"><code>${str}</code></pre>`
        }
      }
    }
  },
  computed: {
    content() {
      return this.loadedContent || this.initialContent || ''
    }
  },
  async mounted() {
    if (this.markdownFile && !this.initialContent) {
      await this.loadMarkdownFile()
    }
  },
  methods: {
    async loadMarkdownFile() {
      this.loading = true
      this.error = null
      
      try {
        // Try to import the markdown file directly
        const response = await fetch(`/src/content/${this.markdownFile}`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        this.loadedContent = await response.text()
      } catch (err) {
        console.error('Error loading markdown file:', err)
        // Fallback: try to load from public folder
        try {
          const response = await fetch(`/content/${this.markdownFile}`)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          this.loadedContent = await response.text()
        } catch (fallbackErr) {
          console.error('Fallback loading also failed:', fallbackErr)
          this.error = `Could not load ${this.markdownFile}`
        }
      } finally {
        this.loading = false
      }
    }
  },
  watch: {
    markdownFile() {
      if (this.markdownFile && !this.initialContent) {
        this.loadMarkdownFile()
      }
    }
  }
}
</script>

<style scoped>
.markdown-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;
  color: #333;
}

.markdown-content :deep(h1) {
  font-size: 2.5em;
  margin-bottom: 16px;
  color: #2c3e50;
  font-weight: 700;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #e1e8ed;
}

.markdown-content :deep(h2) {
  color: #34495e;
  font-size: 1.8em;
  margin: 40px 0 20px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #ecf0f1;
  font-weight: 600;
}

.markdown-content :deep(h3) {
  color: #34495e;
  font-size: 1.4em;
  margin: 30px 0 15px 0;
  font-weight: 600;
}

.markdown-content :deep(p) {
  margin-bottom: 20px;
  text-align: justify;
  line-height: 1.7;
}

.markdown-content :deep(p em:first-child) {
  /* Style for date lines */
  display: block;
  text-align: center;
  color: #7f8c8d;
  font-size: 1em;
  font-weight: 500;
  margin-bottom: 30px;
  padding: 15px;
  background: #f8f9fa;
  border-left: 4px solid #3498db;
  border-radius: 4px;
  font-style: italic;
}

.markdown-content :deep(ul) {
  margin: 20px 0;
  padding-left: 30px;
}

.markdown-content :deep(li) {
  margin: 10px 0;
  line-height: 1.6;
}

.markdown-content :deep(blockquote) {
  background: #fff3cd;
  border-left: 4px solid #ffc107;
  padding: 15px 20px;
  margin: 20px 0;
  border-radius: 4px;
}

.markdown-content :deep(blockquote p) {
  margin: 0;
  text-align: left;
}

.markdown-content :deep(pre) {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 20px 0;
}

.markdown-content :deep(code) {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9em;
}

.markdown-content :deep(p code) {
  background: #f1f2f6;
  padding: 2px 6px;
  border-radius: 4px;
  color: #e74c3c;
}

.markdown-content :deep(pre code) {
  background: none;
  color: inherit;
  padding: 0;
}

.markdown-content :deep(strong) {
  font-weight: 700;
  color: #2c3e50;
}

.markdown-content :deep(em) {
  font-style: italic;
  color: #555;
}

.markdown-content :deep(a) {
  color: #3498db;
  text-decoration: none;
}

.markdown-content :deep(a:hover) {
  text-decoration: underline;
}

/* Special styling for emphasized terms */
.markdown-content :deep(strong em) {
  color: #e74c3c;
  font-weight: 700;
  font-style: italic;
}

/* Loading and error states */
.loading, .error {
  text-align: center;
  padding: 40px 20px;
  font-size: 1.1em;
}

.loading {
  color: #7f8c8d;
}

.error {
  color: #e74c3c;
  background: #fff5f5;
  border: 1px solid #feb2b2;
  border-radius: 8px;
}

/* Responsive design */
@media (max-width: 768px) {
  .markdown-post {
    padding: 0 15px;
  }
  
  .markdown-content :deep(h1) {
    font-size: 2em;
  }
  
  .markdown-content :deep(h2) {
    font-size: 1.5em;
  }
  
  .markdown-content :deep(p) {
    text-align: left;
  }
}
</style>
