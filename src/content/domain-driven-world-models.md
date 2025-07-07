# Domain-Driven World Models

*January 15, 2025*

At NVIDIA GTC 2025 Yann LeCun exclaimed that he was "not so interested in LLMs anymore." He goes on appraising world model simulation-based AI models. What are the implications for software developers today?

## Beyond language - Symbolic Reasoning

GPT-based LLMs have effectively solved language and even offer spurious _reasoning_. However, for many developers the agentic AI experience feels like flirting with insanity. LLMs, the basic component of agentic AI tooling, heavily prioritize completion and syntactical integrity over _rigorous reasoning_ and _factual grounding_.

Even "_Reasoning models_" are essentially improvised architectures, cobbling together small _reasoning capacities_ in meshed LLM runs to produce acceptable but poorly scalable results. The key challenge, therefore, is to manage complexity by breaking _reasoning work_ into delegatable, manageable, and validatable (controllable) tasks and steps. GPTs excel at language generation but are less suited for abstract thinking in that language. Optimally the reasoning model would be explainable.

One suitable solution for abstract thinking is _symbolic reasoning_ with a **_world model_**. A **_world model_** maintains connections between knowledge and its abstractions (**reasoning symbols**), potentially aligned with **reasoning traces** forming deduced and induced relationships:

- an **(apple)** is a **(physical object)** are governed by **(physical laws)** featuring **(gravity)**
- thus **(gravity)** applies to **{apples}**

These _traces_ represent physical, social, phenomenological, and epistemological relationships to a **_knowledge term_** in varying degrees of abstraction. The goal is to form an alignment between entries and viable chain-of-thought pathways. In contrast, LLMs neither maintain explicit references to specific **_terms_** nor provide connections readily interpretable by human minds. They learn from written language, which often includes "poisonous" patterns for reasoning: figures of speech, sarcasm, creative writing, personal accounts, and similar that do not necessarily cohere into a congruent core model of the world.

This structure is a classical knowledge graph. The great advantages lies in the freedom to select entry points and explore outwards (breadth first) or to jump into the deep and see where it takes you (depth first). In combination with semantic annotation and indexing (vectorization) the graph delivers us search technology that can be compared with human memory. The way graph nodes are represented is much more LLM friendly too, since you can reduce them to concise formulations using significantly fewer tokens than retrieved chunks.

## Canonical Core

Generating and maintaining a Vulcan-like account of humanity's world promises more efficient navigation in the abstract plane of common-sense problem solving. Such basic canonical techno-positivistic observations would form the core of our **_world model_**. Here problem solving follows curved reasoning paths starting with a specific issue extrapolating into abstract ultimately _symbolic reasoning_ and arrives at potential specific solutions. This would service causal regression and heuristic approaches to problem solving. Higher temperature in the core lead to more abstract thinking allowing to evaluate increasingly abstract/symbolic reasoning for a given solution.

## Setting Life to the World Model

The Vulcan's impeccable logic does not serve wicked social issues though. Our **_world model_** needs to be lived in before we can attempt to address social issues. The challenge here is that our individually perceived realities do not align very well. To account for this, we must extend the technological positivistic (canonical) core with subjective accounts from individual users. These outer layers trace individual stakes and user experiences with deep connections to the core. Here higher temperature could extend search to multiple subjectivities aiming for better social fitness.

## Explainability

In practice, a LLM-informed Neural Network (LLMINN) might process a set of **_knowledge terms_** (e.g., an English dictionary) across a limited set of abstractions with anchor **_terms_** for human intelligibility. Its pipeline would escalate term processing strategies based on the criteria above, prompting a reasoning model or even requesting human input for particularly challenging or **_contested terms_**.

Knowledge indexing ultimately hinges on memory management. In social contexts, ground truth is neither static nor purely objective, which introduces data quality challenges and overheads. Abstract projections can mitigate some of these concerns, but evolving beyond a static snapshot requires synchronization work. Planting **_anchor terms_** to link key lemmas and symbols fosters explainability, regressible trees of thought, and testable outputs.

## Synergistic Compatibility

The notion "world model" thus describes an index of **_canonical and subjective terms_** and connections, focusing on quality rather than sheer scale. They resolve **_terms and relationships_** as intelligible annotated structures. The best thing about world models is their intuitive nature, modular extensible composition, and the affordance to be maintained, extended, and reviewed by human operators. Maximizing _intelligibility_ empowers us also to reach optimal reasoning with current LLMs with semantic retrievals. This allows us to:

a) use current LLMs to integrate annotated knowledge graphs already today for specific use cases.  
b) optimize reasoning in runs with today's LLMs

Short of training such model with gigantic compute demands at home, we can contruct it as analog in a graph database fx. with neo4j and naturally integrate it as a RAG extension to any domain-driven LLM-based app. As a matter of fact, the requirement of online models with intelligible reasoning paths would be well supported by classically scaling hardware.

## Initial Experience

I have conducted a series of experiments with MCP tooling to explore viable integration strategies across data types, and text document structures. I have written knowledge integrators for formal reference- and verbose texts, user-defined indexes for typed data, and custom digestion engines for highly structured data in streamed event architectures.

Especially deeply structural data, such as Abstract Syntax Trees (AST) cross referenced with scope annotations and symbol-reference tracing, offer an extremely promising reduction in complexity by offering navigatable and selectable textures. This stabilizes reasoning with genAI models and supports sustained agentic code maintenance with a developer piloting it. The setup requires an experienced programmer / architect.
