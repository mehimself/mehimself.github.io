import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('renders properly', () => {
    const wrapper = mount(Home)
    expect(wrapper.exists()).toBe(true)
  })

  it('has the correct component name', () => {
    const wrapper = mount(Home)
    expect(wrapper.vm.$options.name).toBe('Home')
  })
})
