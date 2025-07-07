<template>
  <MarkdownPost :content="markdownContent" />
</template>

<script>
import MarkdownPost from '../MarkdownPost.vue'

export default {
  name: 'DomainDrivenWorldModels',
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
      const response = await fetch('/src/content/domain-driven-world-models.md')
      this.markdownContent = await response.text()
    } catch (error) {
      console.error('Error loading markdown content:', error)
      // Fallback content
      this.markdownContent = `# Domain-Driven World Models

*January 15, 2025*

Error loading content. Please check the markdown file.`
    }
  }
}
</script>
