import { mount } from '@vue/test-utils'
import About from '@/views/About.vue'

describe('About.vue', () => {
  it('renders properly', () => {
    const wrapper = mount(About)
    expect(wrapper.exists()).toBe(true)
  })

  it('has the correct component name', () => {
    const wrapper = mount(About)
    expect(wrapper.vm.$options.name).toBe('About')
  })
})
