import { mount } from '@vue/test-utils'
import MarkdownPost from '@/components/MarkdownPost.vue'

// Mock Mermaid
jest.mock('mermaid', () => ({
  initialize: jest.fn(),
  render: jest.fn().mockResolvedValue({ svg: '<svg>test</svg>' })
}))

describe('MarkdownPost.vue', () => {
  it('renders markdown content correctly', async () => {
    const wrapper = mount(MarkdownPost, {
      props: {
        content: '# Test Heading\n\nThis is a test paragraph.'
      }
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.find('.markdown-content').exists()).toBe(true)
  })

  it('handles mermaid content', async () => {
    const mermaidContent = '# Test\n\n```mermaid\ngraph TD\nA-->B\n```'
    
    const wrapper = mount(MarkdownPost, {
      props: {
        content: mermaidContent
      }
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.vm.displayContent).toContain('mermaid')
  })

  it('prioritizes content prop over other sources', () => {
    const wrapper = mount(MarkdownPost, {
      props: {
        content: 'Priority content',
        initialContent: 'Initial content',
        markdownFile: 'test.md'
      }
    })

    expect(wrapper.vm.displayContent).toBe('Priority content')
  })

  it('falls back to initialContent when content is empty', () => {
    const wrapper = mount(MarkdownPost, {
      props: {
        initialContent: 'Fallback content',
        markdownFile: 'test.md'
      }
    })

    expect(wrapper.vm.displayContent).toBe('Fallback content')
  })

  it('shows loading state when loading markdown file', async () => {
    const wrapper = mount(MarkdownPost, {
      data() {
        return {
          loading: true
        }
      }
    })

    expect(wrapper.find('.loading').text()).toBe('Loading...')
  })

  it('shows error state when there is an error', async () => {
    const wrapper = mount(MarkdownPost, {
      data() {
        return {
          error: 'Test error'
        }
      }
    })

    expect(wrapper.find('.error').text()).toContain('Test error')
  })
})
