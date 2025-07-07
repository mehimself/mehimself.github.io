# Max Roald Eckardt

I am Senior Software Engineer at the [Center for Hybrid Intelligence](https://mgmt.au.dk/center-for-hybrid-intelligence/). See my [CV on LinkedIn](https://www.linkedin.com/in/max-roald-eckardt-69706071/).

I use this page as a blog for commentary on topics close to my interests. 

# Domain-Driven World Models
At NVIDIA GTC 2025 Yann LeCun excalaimed that he was "not so interested in LLMs anymore." He goes on appraising world model simulation-based AI models. What are the implications for software developers today?

## Beyond language - Symbolic Reasoning
GPT-based LLMs have effectively solved language and even offer spurious _reasoning_. However, for many developers the agentic AI experience feels like flirting with insanity. LLMs, the basic component of agentic AI tooling, heavily prioritize completion and syntactical integrity over _rigorous reasoning_ and _factual grounding_. 

Even "_Reasoning models_" are essentially improvised architectures, cobbling together small _reasoning capacities_ in meshed LLM runs to produce acceptable but poorly scalable results. The key challenge, therefore, is to manage complexity by breaking _reasoning work_ into delegatable, manageable, and validatable (controllable) tasks and steps. GPTs excel at language generation but are less suited for abstract thinking in that language. Optimally the reasoning model would be explainable.

One suitable solution for abstract thinking is _symbolic reasoning_ with a ___world model___. A ___world model___ maintains connections between knowledge and its abstractions (__reasoning symbols__), potentially aligned with __reasoning traces__ forming deduced and induced relationships:

- an __(apple)__ is a __(physical object)__ are governed by __(physical laws)__ featuring __(gravity)__
- thus __(gravity)__ applies to __{apples}__

These _traces_ represent physical, social, phenomenological, and epistemological relationships to a ___knowledge term___ in varying degrees of abstraction. The goal is to form an alignment between entries and viable chain-of-thought pathways. In contrast, LLMs neither maintain explicit references to specific ___terms___ nor provide connections readily interpretable by human minds. They learn from written language, which often includes “poisonous” patterns for reasoning: figures of speech, sarcasm, creative writing, personal accounts, and similar that do not necessarily cohere into a congruent core model of the world.

This structure is a classical knowledge graph. The great advantages lies in the freedom to select entry points and explore outwards (breadth first) or to jump into the deep and see where it takes you (depth first). In combination with semantic annotation and indexing (vectorization) the graph delivers us search technology that can be compared with human memory. The way graph nodes are represented is much more LLM friendly too, since you can reduce them to concise formulations using significantly fewer tokens than retrieved chunks.

## Canonical Core
Generating and maintaining a Vulcan-like account of humanity’s world promises more efficient navigation in the abstract plane of common-sense problem solving. Such basic canonical techno-positivistic observations would form the core of our ___world model___. Here problem solving follows curved reasoning paths starting with a specific issue extrapolating into abstract ultimately _symbolic reasoning_ and arrives at potential specific solutions. This would service causal regression and heuristic approaches to problem solving. Higher temperature in the core lead to more abstract thinking allowing to evaluate increasingly abstract/symbolic reasoning for a given solution.

## Setting Life to the World Model
The Vulcan's impeccable logic does not serve wicked social issues though. Our ___world model___ needs to be lived in before we can attempt to address social issues. The challenge here is that our individually perceived realities do not align very well. To account for this, we must extend the technological positivistic (canonical) core with subjective accounts from individual users. These outer layers trace individual stakes and user experiences with deep connections to the core. Here higher temperature could extend search to multiple subjectivities aiming for better social fitness. 

## Explainability
In practice, a LLM-informed Neural Network (LLMINN) might process a set of ___knowledge terms___ (e.g., an English dictionary) across a limited set of abstractions with anchor ___terms___ for human intelligibility. Its pipeline would escalate term processing strategies based on the criteria above, prompting a reasoning model or even requesting human input for particularly challenging or ___contested terms___.

Knowledge indexing ultimately hinges on memory management. In social contexts, ground truth is neither static nor purely objective, which introduces data quality challenges and overheads. Abstract projections can mitigate some of these concerns, but evolving beyond a static snapshot requires synchronization work. Planting ___anchor terms___ to link key lemmas and symbols fosters explainability, regressible trees of thought, and testable outputs.

## Synergistic Compatibility
The notion “world model” thus describes an index of ___canonical and subjective terms___ and connections, focusing on quality rather than sheer scale. They resolve ___terms and relationships___ as intelligible annotated structures. The best thing about world models is their intuitive nature, modular extensible composition, and the affordance to be maintained, extended, and reviewed by human operators. Maximizing _intelligibility_ empowers us also to reach optimal reasoning with current LLMs with semantic retrievals. This allows us to: 

a) use current LLMs to integrate annotated knowledge graphs already today for specific use cases.
b) optimize reasoning in runs with today's LLMs 

Short of training such model with gigantic compute demands at home, we can contruct it as analog in a graph database fx. with neo4j and naturally integrate it as a RAG extension to any domain-driven LLM-based app. As a matter of fact, the requirement of online models with intelligible reasoning paths would be well supported by classically scaling hardware.

## Initial Experience 
I have conducted a series of experiments with MCP tooling to explore viable integration strategies across data types, and text document structures. I have written knowledge integrators for formal reference- and verbose texts, user-defined indexes for typed data, and custom digestion engines for highly structured data in streamed event architectures. 

Especially deeply structural data, such as Abstract Syntax Trees (AST) cross referenced with scope annotations and symbol-reference tracing, offer an extremely promising reduction in complexity by offering navigatable and selectable textures. This stabilizes reasoning with genAI models and supports sustained agentic code maintenance with a developer piloting it. The setup requires an experienced programmer / architect.



# AI and Memory
LLMs and reasoning will not in the foreseeable future achieve human-level productivity in knowledge work. This why the easiest pickings for end-user value lie in integrations. Frameworks incorporating genAI in their production logic rely on privileged curated knowledge. Moats are evaporating with decreased cost of production (software) systems, so your value lies increasingly in niche intelligence. Curation helps narrow foci for efficient reliable LLM prompts and action calling. how do you curate knowledge? What does that mean technically? What does it encompass to acquire knowledge? Are snapshots ok, or do you need to keep it updated? in real-time? 

## What is a knowledge graph?
Knowledge graphs can be used as persistent online memory for LLMs. Why the "graph"? Let's define ___knowledge___ as data + relevance. Relevance ties data to a purpose or subject resulting in ___knowledge___. You could say ___knowledge___ is data with an index in subjects. This is analoguous to a graph database, where a topical node may branch out in relationships to data nodes. If we define memory as a topical trigger that yields ___related knowledge___, our technological analogue turns into picking a topical entry node and finding related nodes by resolving the first layer of relationships. 
```cypher
MATCH (topic)--(knowledge) 
RETURN knowledge
```
This is one of the most basic cypher query if you chose to use Neo4j.  

## What are the benefits?
In the scope of this post we (in)form the prompting context of LLMs. While LLM models have cut-off dates months or years in the past, knowledge graphs can be operated ___online___ with lags as short as a single LLM interaction. 

As a user-centered designer I would ask where you assign most value to improved LLM memory. As a power user of LLMs I would list the following qualities to complement LLM with their inherent limitations:

 - ___accuracy___: I do not want irrelevant or outright false details to derail the LLM
 - ___verifiability___: Enable me to verify reasoning based on the sourced knowledge. Learning by doing.
 - ___recall___: exploratively considering all existing entries without changing the context is priceless
 - ___intelligibility___: allowing me to explore and browsable knowledge
 - ___curatability___: being allowed to balance sources for their content or perspective
 - ___access control___: allow me to declare knowledge sections that have access control

Imagine being able to tell where your blind-spots lie, or which source introduced erroneous facts by simply looking it up. 

For a [modicum of consideration](https://github.com/mehimself/mehimself/tree/main?tab=readme-ov-file#a-modicum-of-consideration) graph databases give us all of the above. Graphs can be naturally browsed as layers. One layer may contain user accounts, another may contain our product database, and the knowledge base would be residing in yet another sphere. This labeling of layers/data types increases intelligibility and allows us humans to exploratively navigate relationships within- and across layers and topics. 

When you upload a product database extract as a JSON file to an LLM and post a simple request such as: "find three items that are ISO 11612 certified (fire retardant) and available in the color red" your LLM response will be very convincing, until you proof-read your data. While this is a simplified example and a moving goal post the fundamental limtation remains. You may get lucky sometimes, but simple filters and other 'complex' cognitive actions impose severe challenges to LLMs. 

Using knowledge graphs with mixed types (knowledge entries and typed (product-) data) enables you to ask the LLM to express your request in cypher: 

```cypher
MATCH (product)
  WHERE product.certifications INCLUDES 'ISO 611712' 
    AND product.availableColors INCLUDES 'red'
RETURN product LIMIT 3
```

For more complex and idiosyncratic data structures you may have to provide schemas, or instruct the LLM to retrieve them itself. 

In my experience LLMs are great at generating cypher queries. The top tier LLMs reproduce complex queries with hundreds of lines that took me days to refine in mere minutes. Combined with homomorphic encryption this approach allows your data to remain private even when using vendors without data processing agreement. This should also apply to SQL DBMS.

This integration of knowledge goes way beyond corrective RAGs (CRAG).

By vectorizing text fields, custom annotations, and document texts, you can embed products alongside knowledge terms for a dense and efficient memory architecture compatible with LLM prompt contexts. Such knowledge integration lays the foundation for a plethora of next-generation services.

## Legal Considerations
___I am not a legal expert. Refer to licensed professionals for legal advice.___

___GDPR___. Personalized knowledge ingestion and synthesis probably is what the GDPR is regulating most effectively. If you process personal data at any time you need informed consent. Due to the high degree of freedom with integrated knowledge, individual graph queries may require dedicated formulations. The delimitation of your personal data processing ___will not be trivial and will make or break your venture___. While this sounds defeatist, the future of scaling AI value lies in knowledge integration. Some may decide to operate in legal limbo until proven right or wrong. In any case: while your knowledge graph may be mutable, your data processing pipelines definitely cannot. 

Copyrighted works and intelligible memory design form complications. The internal representation of your graph could count as storage of copyrighted works. A more fragmented corpus design where shared lemmas reference each other, and higher-level layers project the essence of individual works in symbolic unintelligible representations would resemble LLM models. [Both are currently disputed](https://kpmg-law.de/en/ai-and-copyright-what-is-permitted-when-using-llms/) with extremely high stakes for the future of genAI.

It requires a dedicated private LLM instance to process ingested knowledge within a domain you can control. 
If regional laws apply you may be limited to local or regional vendors of dedicated compute. 

## [A Modicum of Consideration]()

As is clear to all of us data comes in different types and along follow respective rights and responsibilities. To accomodate regulations, security, and privacy you need to define privileged access architecture. Graphs have many dimensions. Good architecture prevents unauthorized access on low and redundant levels (dbms + controllers). 

With data privileges comes segregation. What constitutes your immutable core graph, and which 'outer layers' reflect online interaction? Which sources do you want to sample once? What do you ingest continuously?

Intelligibility comes with an overhead and should be limited to an entry-node layer. Named entities would be a good point to start. Personal knowledge granularity could be offered in tiers.

Ingesting texts as knowledge into your knowledge graph employs several LLM prompts per term. If you want to be thorough: at least one prompt per reference of a term. This quickly scales out of reasonable proportion unless you apply best practices for normalization, deduplication, lemmatization, etc. 

You will want to threshold what constitutes a notable entry. Do you want to set topical limits? Is it enough to remember the meta data and key formulations for a presentation, or are you parsing reference documents, where perfect recall is essential. This type of curation is formative and requires appropriate consideration. Careful database design you will maintain references to your sources which allows you to revisit and review your embedding choices. Deliberate pipeline designs could classify material for dynamic ingestion strategies.

Does your service develop core customer values from synthesizing user inputs and did you find the GDPR loophole? In this case you might want to maintain personalized layers of online knowledge representations for users. This could range from annotated images to messages to LLM personality customizations to vibe coded application settings. Mind compliance with regulations and access privileges before designing the database.

What payload should knowledge database nodes (___terms___) hold? Which ontology should we enforce as intelligible index? 

Avoid idiosyncratic ontologies and keep type casting limited to a technological necessity. 

Online graphs require a constant upkeep, immutable graphs may be generated in an temporary effort.



# Vibe Coding vs. Agentic Code Copilots
Vibe coding uses LLMs or reasoning models (LRMs) for code generation. With democratized access to these tools, we can create functional applications in minutes, or maybe within a few hours of chatting. So, what prevents vibe coding from scaling into production?

## Features vs. Qualities
As full-stack developer I have felt the pressure to work “quick and dirty” first, then scale apps into production later, since I started learning the craft in the 90s. Software users and programming learners often judge software based on functionality alone. They aim to implement the features first, then upgrade the code later for security, scalability, and compatibility.

However, code doesn’t scale linearly. There is no set of keywords, wrappers, or patterns that can just “plug in” security or performance. If you ask a generative AI tool to refactor code with these concerns in mind, you often end up with a completely rewritten codebase, destroying your cognitive grasp of it.

If app functionality is the payload and your source code is the vehicle, why can’t security and performance be added later? Because these are __qualities__, not _features_. They must be addressed globally and persistently, not just layered on. You need to consider them in your architecture and defend them over time. A single hole undermines security; a single bottleneck undermines performance. And production code requires even many more qualities beyond these two.

## Considered Complexity
The hardest part of programming is learning, formalizing, and maintaining best practices—using a language’s features and trusted libraries without compromising these qualities. You can implement the same functionality in thousands of ways, but 99.9% will undermine some code quality. The overhead of writing and deploying production-grade code is immense. On complex projects, it can take days to “tune in” to the solution space.

But does this mean all generated code is poor quality? Is production-grade code out of reach for generative models? Are humans inherently better at managing complexity? No. I can’t remember all the considerations that shaped a function I wrote two weeks ago. I still look up design patterns. I make mistakes. Generative code could, in theory, address these human lapses.

How might generative AI produce production-grade code? Consider what makes generative AI powerful for software development in the first place: it reads our natural language and outputs functioning code. If you ask it carefully, it can even incorporate best-practice design patterns for a few concerns. This still requires an experienced developer to guide it. Why not write a “book of best practices” for your production environment and create an agent that references those practices?

GPT reasoning models are excellent at text generation—primarily retrieval with limited reasoning. They reproduce and synthesize typical text well. The biggest limitation is considered complexity. Early GPT models struggled with more than five concerns at once (e.g., a database query that filters, sorts, paginates, and counts matched documents). Today’s reasoning models handle more complexity but lose stability as complexity grows. In practice, a few hundred lines of code can become expensive and unreliable to edit.

## Polite Programming with Paradigms
Whenever you’re introducing new functionality or refactoring existing code, it’s vital to maintain its compatibility with the project’s future behavior and standards. Before adding features or addressing new requirements, developers need to confirm that the underlying architecture supports them without breaking current contracts or best-practice guidelines. This means revisiting fundamental assumptions about data flow, security posture, and performance expectations. By proactively examining these aspects, teams can avoid costly rework and ensure the code remains robust as demands evolve. For this purpose programmers have summarized hard-learned lessons as paradigms. Personally, I find the most universally applicable ro be:
- Separation of Concerns / Occam's Razor
- Function Extraction (avoid flow disjunctions)
- Don't Repeat Yourself
- You ain't gonna need it (YAGNI)

Uncle Bob, a great source for such condensed experience [labeled this style ___"Polite Coding"___](https://www.youtube.com/watch?v=l-gF0vDhJVI&t=3160s). It produces code that does not require implicit knowledge to make sense to casual readers. The requirement to annotate production code often indicates poor architecture or code quality. There are distinct exceptions to this if quality concerns post programming guides excluding basic language features (like NASA's C guidelines). 

## Generation Guidelines
The point of above paradigms is to remove implicit knowledge form any given scope. Well-considered naming, intuitive flow routing, and typing should produce tidy, predictable, three-dimensional code projects. Fundamentally polite code is boring to read, cut into single-concern scopes and types, and predictable flow. When you feel that you can predict next lines, module names, and function headers, you are looking at polite code. The tokenization of your architecture into predictable scopes and interfaces are like doping for LLM-based software development runs. The contextual complexity plummets for scopes and symbol retrieval and scope-stack delimitation, and implicitly forms genereation guidelines for code generation. LLMs thrive on predictable patterns, any recurring quality issues can be addressed by maintaining explicit guidelines. In web development there is the unique opportunity to implement the entire stack in a single language (EcmaScript YYYY) which greatly reduces architectural, conceptual, and functional complexity.

## Limits of Automation
When it comes to sustaining high-quality code, a test-driven and piloted approach is critical. No matter how sophisticated generative tools become, software quality is not fully automatable with LLMs. It takes only a single hallucination, or temporary omission to introduce fundamental flaws. Continuous integration, test-driven development, and diligent pilot-testing of newly generated features are essential to catch these potential failures before they reach production. Requirements can change at any time, and a human-in-the-loop process ensures ongoing alignment between evolving user needs and the codebase. My best bet is to implement rigorous test-driven-development (TDD) with an agentic copilot TDD naturally enforces above paradigms and being with generative support could leave the quality control and creative freedom to the human pilot. Human piloting is essential 

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

If you try getting-to-work one-shot LLM generated code in a thread and complain about the ~1000 lines (moving goalpost) limitation with code generation tools, you are doing it wrong. Use design patterns to lay out how your code resolves into layers and modules before soving each module across all layers separately, incrementally. 

## Navigate Code in Three Dimensions
Code can roughly be spread out in three dimensions. Named design patterns help you specify ___flow and concurrency___, ___nesting and disjunctions___, and ___events and exceptions___. Once you prime reasoning for with referenes to where which dedicated module is supposed to do what, even vague formulations yield great results. In the vast majorit programmers all struggle with shared problems. The solutions are out there and have been learnt by LLMs. Being unoriginal, boring, and predictive have been the gold standard in programming since its inception, capitalize on it! 


