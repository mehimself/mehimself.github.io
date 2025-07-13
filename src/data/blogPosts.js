import SymbolicThinking from '../components/posts/SymbolicThinking.vue'
import DomainDrivenWorldModels from '../components/posts/DomainDrivenWorldModels.vue'
import AiAndMemory from '../components/posts/AiAndMemory.vue'
import VibeCodingVsAgenticCopilots from '../components/posts/VibeCodingVsAgenticCopilots.vue'

export const blogPosts = [
  {
    id: 'symbolic-thinking',
    title: 'Symbolic Thinking',
    date: '2025-07-06',
    excerpt: 'LLMs are not efficient at capturing facts in a retrievable fashion. Working memory should not be black boxed since the provenance of details used for reasoning and tasks need to remain traceable for synergistic human-centered collaboration.',
    component: SymbolicThinking,
    path: '/blog/symbolic-thinking'
  },
  {
    id: 'domain-driven-world-models',
    title: 'Domain-Driven World Models',
    date: '2025-05-07',
    excerpt: 'At NVIDIA GTC 2025 Yann LeCun exclaimed that he was "not so interested in LLMs anymore." He goes on appraising world model simulation-based AI models. What are the implications for software developers today?',
    component: DomainDrivenWorldModels,
    path: '/blog/domain-driven-world-models'
  },
  {
    id: 'ai-and-memory',
    title: 'AI and Memory',
    date: '2025-04-14',
    excerpt: 'LLMs and reasoning will not in the foreseeable future achieve human-level productivity in knowledge work. This why the easiest pickings for end-user value lie in integrations.',
    component: AiAndMemory,
    path: '/blog/ai-and-memory'
  },
  {
    id: 'vibe-coding-vs-agentic-copilots',
    title: 'Vibe Coding vs. Agentic Code Copilots',
    date: '2025-03-05',
    excerpt: 'Vibe coding uses LLMs or reasoning models (LRMs) for code generation. With democratized access to these tools, we can create functional applications in minutes, or maybe within a few hours of chatting. So, what prevents vibe coding from scaling into production?',
    component: VibeCodingVsAgenticCopilots,
    path: '/blog/vibe-coding-vs-agentic-copilots'
  }
];
