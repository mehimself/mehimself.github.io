# Vibe Coding vs. Agentic Code Copilots

*March 5, 2025*

Vibe coding uses LLMs or reasoning models (LRMs) for code generation. With democratized access to these tools, we can create functional applications in minutes, or maybe within a few hours of chatting. So, what prevents vibe coding from scaling into production?

## Features vs. Qualities

As full-stack developer I have felt the pressure to work "quick and dirty" first, then scale apps into production later, since I started learning the craft in the 90s. Software users and programming learners often judge software based on functionality alone. They aim to implement the features first, then upgrade the code later for security, scalability, and compatibility.

However, code doesn't scale linearly. There is no set of keywords, wrappers, or patterns that can just "plug in" security or performance. If you ask a generative AI tool to refactor code with these concerns in mind, you often end up with a completely rewritten codebase, destroying your cognitive grasp of it.

If app functionality is the payload and your source code is the vehicle, why can't security and performance be added later? Because these are *qualities*, not _features_. They must be addressed globally and persistently, not just layered on. You need to consider them in your architecture and defend them over time. A single hole undermines security; a single bottleneck undermines performance. And production code requires even many more *qualities* beyond these two.

## Considered Complexity

The hardest part of programming is learning, formalizing, and maintaining best practices—using a language's features and trusted libraries without compromising these qualities. You can implement the same functionality in thousands of ways, but 99.9% will undermine some code quality. The overhead of writing and deploying production-grade code is immense. On complex projects, it can take days to "tune into" the solution space.

But does this mean all generated code is poor quality? Is production-grade code out of reach for generative models? Are humans inherently better at managing complexity? No. I can't remember all the considerations that shaped a function I wrote two weeks ago. I still look up design patterns. I make mistakes. Generative code could, in theory, address such human lapses. Emergent task decomposition, delegation, and management in today's agentic vibe coding systems already show great control within their scope of attention, but staying within it often feels like herding kittens. 

## Agent Attention Deficit
GPT reasoning models are excellent at text generation, primarily retrieval with limited reasoning. The limits become obvious when a closing <xml> tag is missing or dublicated, when a request for information leads to comprehensive refactoring, or when the goals for a work package are forgotten once the files required for a feature have been read. 

GPT models reproduce and synthesize structured text well. The biggest limitation is considered complexity. Early GPT models struggled with more than five concerns at once (e.g., a database query that filters, sorts, paginates, and counts matched documents). Today's vibe coding agents handle more complexity but lose stability as complexity grows. In practice, a few hundred lines of code and half a dozen files can become expensive and unreliable to edit.

## How the humans do it
Whenever you're introducing new functionality or refactoring existing code, it's vital to maintain its compatibility with the project's future behavior and standards. Before adding features or addressing new requirements, developers need to confirm that the underlying architecture supports them without breaking current contracts or best-practice guidelines. This means revisiting fundamental assumptions about data flow, security posture, and performance expectations. By proactively examining these aspects, teams can avoid costly rework and ensure the code remains robust as demands evolve. For this purpose programmers have summarized hard-learned lessons as paradigms. Personally, I find the most universally applicable to be:

- Separation of Concerns / Occam's Razor
- Function Extraction (avoid flow disjunctions)
- Don't Repeat Yourself
- You ain't gonna need it (YAGNI)

Uncle Bob, a great source for such condensed experience [labeled this style "Polite Coding"](https://www.youtube.com/watch?v=l-gF0vDhJVI&t=3160s). It produces code that does not require implicit knowledge to make sense to casual readers. The requirement to annotate production code often indicates poor architecture or code quality. There are distinct exceptions to this if quality concerns post programming guides excluding basic language features (like NASA's C guidelines).

## Generation Guidelines

The point of above coding paradigms is to minimize implicit knowledge from any given scope. Well-considered naming, intuitive flow routing, and discriminatory typing should produce tidy, predictable, three-dimensional code projects. Fundamentally polite code is boring to read, cut into single-concern scopes and types, and predictable flow. When you feel that you can predict next lines, function headers, module names, and layer responsibilities, you are looking at *polite* code. The tokenization of your architecture combined with sensible naming for traversed parts acts like doping for your vibe coding environment. 

- it simplifies retrieving scopes, symbols, and flow paths 
- it provides texture for navigating complex architectures and use-case flows  
- it implicitly forms guidelines for code generation. 

LLMs thrive on predictable patterns, any recurring quality issues can be addressed by maintaining explicit guidelines.

## Piloting the copilot

So, how do we pilot reasoning models for high-quality, scalable development? For best cognitive support we need to globally minimize complexity. Break the work into tasks, and resolve each task into refactoring strategies. These strategies involve nine parts navigation and delimitation, and one part code replacement. When targeting a change in behavior:

- isolate the relevant symbols
- trace their referencing contexts throughout the stack
- identify the behaviors they implement and how you want to change it
- refactor the code
- re-index
- diff mutated files
- summarize the changes in the thread
- _Commit_, _revisit_, or _revert_ changes based on user response

This is largely how Cline, and Github Copilot interface with your project and IDE. 

## Capitalizing on Experience

LLM reasoning works by finding patterns to use in its generations. Its 'search stamina' is very limited and needs to be contextualized by your prompt to yield worthwhile output. The better you are at dividing architectures into distinct named structures the better results you will get vibe coding. System designers, software architects, and programmers, who have most experience in communicating prospective state machines across time and modalities, and use-cases maintain a rich corpus of named design patterns and use case conventions for this exact purpose. 

## Agent Attention Management across Three Dimensions in Source Code

In the past programmers all struggled with the same problems. Learning was slow and personal. Being unoriginal, and predictable has been long the gold standard for programming. These conventions and patterns have now been acquired by coding models and can be harnessed if you speak the right language. 

Code can roughly be spread out in three dimensions. Named design patterns help you specify _flow and concurrency_, _nesting and disjunctions_, and _events and exceptions_. All three dimensions can be resolved further with conventional and use-case-specific taxonomies. LLM-bourne agentic tooling for software development develop a lot of stamina when you introduce a _lingua franca_ that lets you locate, navigate, and delimitate essential portions of your code base.  

For example to resolve API backend request flow you can offer the following nomenclature for traversed layers and scopes:

- pre-router middleware 
- API router
- API middleware
- service router
- endpoint middleware
- action endpoint
- endpoint handler
- service action controller
- data controller
- post-controller middleware
- post-router middleware

When an agent is tasked to work on a specific action, you may specify a layer, or scope type, alongside the flow path to limit refactorings and generation.
Prime your reasoning agent with references to where which module holds what responsibility in your code base. Ask him to classify responsibilities with a simple taxonomy embedded into code file names. 

# Beyond Semantic Nomenclature
If you want to go even further you can map entire abstract syntax tree resolving (block-like) scopes, symbols, and their references alongside annotations for use cases and localized responsibility. Piloting coding agents becomes more controllable, hallucinations become detectable and preventable, and scope creep can be prevented by outsourcing memory and retrieval to conventional data repositories.   
