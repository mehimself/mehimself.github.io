# Vibe Coding vs. Agentic Code Copilots

*January 5, 2025*

Vibe coding uses LLMs or reasoning models (LRMs) for code generation. With democratized access to these tools, we can create functional applications in minutes, or maybe within a few hours of chatting. So, what prevents vibe coding from scaling into production?

## Features vs. Qualities

As full-stack developer I have felt the pressure to work "quick and dirty" first, then scale apps into production later, since I started learning the craft in the 90s. Software users and programming learners often judge software based on functionality alone. They aim to implement the features first, then upgrade the code later for security, scalability, and compatibility.

However, code doesn't scale linearly. There is no set of keywords, wrappers, or patterns that can just "plug in" security or performance. If you ask a generative AI tool to refactor code with these concerns in mind, you often end up with a completely rewritten codebase, destroying your cognitive grasp of it.

If app functionality is the payload and your source code is the vehicle, why can't security and performance be added later? Because these are **qualities**, not _features_. They must be addressed globally and persistently, not just layered on. You need to consider them in your architecture and defend them over time. A single hole undermines security; a single bottleneck undermines performance. And production code requires even many more qualities beyond these two.

## Considered Complexity

The hardest part of programming is learning, formalizing, and maintaining best practices—using a language's features and trusted libraries without compromising these qualities. You can implement the same functionality in thousands of ways, but 99.9% will undermine some code quality. The overhead of writing and deploying production-grade code is immense. On complex projects, it can take days to "tune in" to the solution space.

But does this mean all generated code is poor quality? Is production-grade code out of reach for generative models? Are humans inherently better at managing complexity? No. I can't remember all the considerations that shaped a function I wrote two weeks ago. I still look up design patterns. I make mistakes. Generative code could, in theory, address these human lapses.

How might generative AI produce production-grade code? Consider what makes generative AI powerful for software development in the first place: it reads our natural language and outputs functioning code. If you ask it carefully, it can even incorporate best-practice design patterns for a few concerns. This still requires an experienced developer to guide it. Why not write a "book of best practices" for your production environment and create an agent that references those practices?

GPT reasoning models are excellent at text generation—primarily retrieval with limited reasoning. They reproduce and synthesize typical text well. The biggest limitation is considered complexity. Early GPT models struggled with more than five concerns at once (e.g., a database query that filters, sorts, paginates, and counts matched documents). Today's reasoning models handle more complexity but lose stability as complexity grows. In practice, a few hundred lines of code can become expensive and unreliable to edit.

## Polite Programming with Paradigms

Whenever you're introducing new functionality or refactoring existing code, it's vital to maintain its compatibility with the project's future behavior and standards. Before adding features or addressing new requirements, developers need to confirm that the underlying architecture supports them without breaking current contracts or best-practice guidelines. This means revisiting fundamental assumptions about data flow, security posture, and performance expectations. By proactively examining these aspects, teams can avoid costly rework and ensure the code remains robust as demands evolve. For this purpose programmers have summarized hard-learned lessons as paradigms. Personally, I find the most universally applicable to be:

- Separation of Concerns / Occam's Razor
- Function Extraction (avoid flow disjunctions)
- Don't Repeat Yourself
- You ain't gonna need it (YAGNI)

Uncle Bob, a great source for such condensed experience [labeled this style **_"Polite Coding"_**](https://www.youtube.com/watch?v=l-gF0vDhJVI&t=3160s). It produces code that does not require implicit knowledge to make sense to casual readers. The requirement to annotate production code often indicates poor architecture or code quality. There are distinct exceptions to this if quality concerns post programming guides excluding basic language features (like NASA's C guidelines).

## Generation Guidelines

The point of above paradigms is to remove implicit knowledge form any given scope. Well-considered naming, intuitive flow routing, and typing should produce tidy, predictable, three-dimensional code projects. Fundamentally polite code is boring to read, cut into single-concern scopes and types, and predictable flow. When you feel that you can predict next lines, module names, and function headers, you are looking at polite code. The tokenization of your architecture into predictable scopes and interfaces are like doping for LLM-based software development runs. The contextual complexity plummets for scopes and symbol retrieval and scope-stack delimitation, and implicitly forms generation guidelines for code generation. LLMs thrive on predictable patterns, any recurring quality issues can be addressed by maintaining explicit guidelines. In web development there is the unique opportunity to implement the entire stack in a single language (EcmaScript YYYY) which greatly reduces architectural, conceptual, and functional complexity.

## Limits of Automation

When it comes to sustaining high-quality code, a test-driven and piloted approach is critical. No matter how sophisticated generative tools become, software quality is not fully automatable with LLMs. It takes only a single hallucination, or temporary omission to introduce fundamental flaws. Continuous integration, test-driven development, and diligent pilot-testing of newly generated features are essential to catch these potential failures before they reach production. Requirements can change at any time, and a human-in-the-loop process ensures ongoing alignment between evolving user needs and the codebase. My best bet is to implement rigorous test-driven-development (TDD) with an agentic copilot TDD naturally enforces above paradigms and being with generative support could leave the quality control and creative freedom to the human pilot. Human piloting is essential.

## Workflow

So, how do we use these reasoning models for high-quality, scalable development? For best cognitive support we need to globally minimize complexity. Break the work into tasks, and resolve each task into refactoring strategies. These strategies involve nine parts navigation and delimitation, and one part code replacement. When targeting a change in behavior:

- isolate the relevant symbols
- trace their referencing contexts throughout the stack
- identify the behaviors they implement and how you want to change it
- refactor the code
- re-index
- diff mutated files
- summarize the changes in the thread
- _Commit_, _revisit_, or _revert_ changes based on user response

## Capitalizing on Experience

LLM reasoning, which we rely on to generate code, works by finding patterns to use in its generations. Its 'search stamina' is very limited and needs to be contextualized by your prompt to yield worthwhile output. The better you are at projecting which stereotypical design patterns used by developers qualify for your task the better results you will get. System designers, software architects, and programmers, who are trained to communicate prospective state machines, maintain a rich corpus of named design patterns and strategies for this exact purpose. Named patterns prime LLMs to select referenced patterns allowing efficient control over flow, architecture, modality, and functionality. This is how experienced programmers gain more value with LLMs than beginners.

If you try getting-to-work one-shot LLM generated code in a thread and complain about the ~1000 lines (moving goalpost) limitation with code generation tools, you are doing it wrong. Use design patterns to lay out how your code resolves into layers and modules before solving each module across all layers separately, incrementally.

## Navigate Code in Three Dimensions

Code can roughly be spread out in three dimensions. Named design patterns help you specify **_flow and concurrency_**, **_nesting and disjunctions_**, and **_events and exceptions_**. Once you prime reasoning with references to where which dedicated module is supposed to do what, even vague formulations yield great results. In the vast majority programmers all struggle with shared problems. The solutions are out there and have been learnt by LLMs. Being unoriginal, boring, and predictive have been the gold standard in programming since its inception, with LLMs taking over that part us developers can now work out of the box.
