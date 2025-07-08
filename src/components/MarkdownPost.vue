<template>
  <article class="markdown-post">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">Error loading post: {{ error }}</div>
    <Markdown 
      v-else
      :source="displayContent" 
      :options="markdownOptions"
      class="markdown-content"
    />
  </article>
</template>

<script>
import Markdown from 'vue3-markdown-it'
import mermaid from 'mermaid'

export default {
  name: 'MarkdownPost',
  components: {
    Markdown
  },
  props: {
    content: {
      type: String,
      default: ''
    },
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
    displayContent() {
      // Debug logging
      console.log('MarkdownPost displayContent computed:', {
        contentProp: this.content?.substring(0, 50) + '...',
        loadedContent: this.loadedContent?.substring(0, 50) + '...',
        initialContent: this.initialContent?.substring(0, 50) + '...'
      })
      
      // Prioritize content prop, then loaded content, then initial content
      if (this.content) {
        return this.content
      }
      if (this.loadedContent) {
        return this.loadedContent
      }
      if (this.initialContent) {
        return this.initialContent
      }
      return ''
    }
  },
  async mounted() {
    console.log('MarkdownPost mounted:', {
      markdownFile: this.markdownFile,
      initialContent: !!this.initialContent,
      content: !!this.content
    })
    
    // Initialize Mermaid
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      themeVariables: {
        primaryColor: '#3498db',
        primaryTextColor: '#2c3e50',
        primaryBorderColor: '#34495e',
        lineColor: '#34495e',
        secondaryColor: '#ecf0f1',
        tertiaryColor: '#f8f9fa'
      }
    })
    
    if (this.markdownFile && !this.initialContent && !this.content) {
      await this.loadMarkdownFile()
    }
    
    // Render Mermaid diagrams after component is mounted
    this.$nextTick(() => {
      this.renderMermaidDiagrams()
    })
  },
  methods: {
    async loadMarkdownFile() {
      console.log('MarkdownPost: Loading markdown file:', this.markdownFile)
      this.loading = true
      this.error = null
      
      try {
        // Load from public folder (production-ready)
        const response = await fetch(`/content/${this.markdownFile}`)
        console.log('MarkdownPost: Response status:', response.status)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        this.loadedContent = await response.text()
        console.log('MarkdownPost: Content loaded:', this.loadedContent.substring(0, 100) + '...')
        
        // Render Mermaid diagrams after content is loaded
        this.$nextTick(() => {
          this.renderMermaidDiagrams()
        })
      } catch (err) {
        console.error('Error loading markdown file:', err)
        this.error = `Could not load ${this.markdownFile}`
      } finally {
        this.loading = false
      }
    },
    
    async renderMermaidDiagrams() {
      try {
        // Find all code blocks with mermaid language
        const codeBlocks = this.$el.querySelectorAll('pre code')
        
        for (let i = 0; i < codeBlocks.length; i++) {
          const codeBlock = codeBlocks[i]
          const preElement = codeBlock.parentElement
          
          // Check if this is a mermaid code block
          if (codeBlock.textContent.trim().startsWith('graph') || 
              codeBlock.textContent.trim().startsWith('sequenceDiagram') ||
              codeBlock.textContent.trim().startsWith('classDiagram') ||
              codeBlock.textContent.trim().startsWith('gantt') ||
              codeBlock.textContent.trim().startsWith('flowchart') ||
              codeBlock.textContent.trim().startsWith('pie') ||
              codeBlock.textContent.trim().startsWith('gitGraph') ||
              codeBlock.textContent.trim().startsWith('journey')) {
            
            if (preElement.getAttribute('data-processed') !== 'true') {
              try {
                const mermaidCode = codeBlock.textContent.trim()
                const tempDiv = document.createElement('div')
                tempDiv.innerHTML = mermaidCode
                
                // Use mermaid.render with v10 API
                const { svg } = await mermaid.render(`mermaid-${Date.now()}-${i}`, mermaidCode)
                
                // Replace the pre element with the SVG
                const mermaidDiv = document.createElement('div')
                mermaidDiv.className = 'mermaid-diagram'
                mermaidDiv.innerHTML = svg
                
                preElement.parentNode.replaceChild(mermaidDiv, preElement)
                mermaidDiv.setAttribute('data-processed', 'true')
                
              } catch (error) {
                console.error('Mermaid rendering error:', error)
                preElement.innerHTML = `<code style="color: #e74c3c; background: #fff5f5; padding: 10px; border-radius: 4px; display: block;">Mermaid diagram error: ${error.message}</code>`
              }
            }
          }
        }
      } catch (error) {
        console.error('Error rendering Mermaid diagrams:', error)
      }
    }
  },
  watch: {
    markdownFile() {
      if (this.markdownFile && !this.initialContent && !this.content) {
        this.loadMarkdownFile()
      }
    },
    displayContent() {
      // Re-render Mermaid diagrams when content changes
      this.$nextTick(() => {
        this.renderMermaidDiagrams()
      })
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

.markdown-content :deep(h1 + p em:only-child) {
  /* Style for date lines - only when em is the only child of the first paragraph after h1 */
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

/* Mermaid diagram styling */
.markdown-content :deep(.mermaid-diagram) {
  text-align: center;
  margin: 20px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e1e8ed;
}

.markdown-content :deep(.mermaid-diagram svg) {
  max-width: 100%;
  height: auto;
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
