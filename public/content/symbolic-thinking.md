# Symbolic Reasoning

*June 21, 2025*

When LLMs reason, they do so as disembodied mechanic minds with a fractured representation of our complex world. Large chunks of their internalized knowledge match reasonably well with our reality, while gaps in knowledge are filled with assumptions and rationalizations. This fundamental limitation affects the reliability and scalability of AI reasoning systems.

## Why fragmented?

LLMs are not efficient at capturing facts in a retrievable fashion. Estimates range from 100-1000 parameters required per persistently memorized fact. Another practical limit to model-based memory is trust. In his recent keynote at San Francisco Startup School Andrej Karpathy [describes LLM intelligence as *jagged intelligence*](https://youtu.be/LCEmiRjPEtQ?si=nl50N-IIirOuKw3B&t=980). LLM generations are useful, but users can not reliably verify if a fact has been retrieved from persistent memory, or rehydrated (read: hallucinated) from a generalization, or projected through rationalization.

This fragmentation creates a cascade of problems that becomes particularly evident when models attempt complex reasoning tasks. 

## How does fragmentation impede reasoning?

When a model reasons it traces pathways from a problem to candidate solutions. These traces rely on its understanding of our world. Our laws, conventions, practices and exceptions and the messy multitude of divergent perspectives comprise its model of our world. The better a model's *formal grounding* (micro- and macro alignment with our world), the more accurate and complete its representation of our world is, the more efficient model reasoning will be.

Any discrepancy will cause errors that compound as reasoning progresses. This causes debilitating defects whenever a misaligned detail is considered in the latent space of a model's reasoning. To understand this better, let's examine how reasoning actually works.    

## Reasoning Paths

While there are many different patterns in which reasoning progresses, we can use one basic pattern to illustrate the underlying mechanism. Reasoning often poses problems based on the pattern `what is A to B as X is to Y`. This pattern enters the world model at a specific triplet `(X)-[effect]->(Y)` and seeks to find which unknown `A` affords the same `effect` on `B`. What `X` and `A` have in common is an abstraction in the form of a transient commonality. If `A` and `effect` exist we will find short associative paths between `X` and `A`. Efficient reasoning will then search paths breadth-first from `B` until `effect` is found.

Any discrepancy between our world and a world model along this reasoning path will cripple reasoning (by producing false positives and false negatives). As mentioned above, LLMs tend to compensate by completing a response with hallucinated claims projecting unviable or even non-existing reasoning paths.

Understanding these limitations helps us appreciate why better grounding matters so much. 

## Why does it matter?

A *formally grounded* *world model* will have much fewer defects and allow much longer reasoning chains, more precise summaries, and powerful symbolic representations of complex issues. This applies to both training and inference. Training could become much more efficient where simple 'surprise-algorithms' could allow the capture of a fact about the world in a simple encounter. In agentic reasoning architectures the model iterates between memory and attention management steps. Both require an overhead for stabilization and error correction.

The benefits would be transformative:

- **Attention costs would decline**, because large contexts could be efficiently compressed without the need for quadratically scaling training exposure.
- **Reasoning chains could be much longer** with lower error correction overhead. 
- **Symbolic intermediary graphs** would be internalized as basic laws - finetuning and expert delegation could be greatly minimized or even abolished. 

The intimate grasp of physics and mathematics as symbolic foundation for STEM work would make reasoning very reliable, efficient, and scalable. While there are complicating dimensions to grounding, any progress in this matter likely produces exponential growth in model intelligence.

However, achieving this alignment faces fundamental limitations.


## The limits of alignment

When a model is fractured its reasoning becomes inconsistent, because cause-effect chains are not leading to the same conclusions across similar contexts. This inconsistency stems from the fundamental challenge of maintaining coherent world representations at scale.

The core problem is that perfect alignment with our complex, contradictory, and constantly evolving world may be theoretically impossible. Different perspectives, cultural contexts, and evolving knowledge create inherent tensions that any world model must navigate. This leads us to consider practical approaches for improvement. 

## How to align a model with our world

*One additional step of common sense*

Working memory should not be black boxed since the provenance of details used for reasoning and tasks need to remain traceable for synergistic human-centered collaboration. The alternative could be browseable **knowledge graphs** with shards made up of entities and their prolific relationships in a graph. The graph nodes and vertices are generated by generative shard definitions comprised of verbatim quote/name, contextual definition and if applicable a 'canonical' abstraction supplied by the LLM.

The purpose of the canonical abstraction is to ground idiosyncratic terms while maintaining overloaded definitions in locally relevant contexts. By asking the LLM "what does this mean in context" and "what are features called in other contexts", generated shard definitions draw on the model's internal abstractions, which also are used in reasoning chains.

This multi-resolution approach—terms in local context and global contexts—reflects the model's understanding of our world, adding a rhizome of abstraction relationships aligning the embeddings of our knowledge shards with common sense-making patterns, conventions, laws, and practices.

## LLM-informed world model building

The practical construction of such knowledge graphs can leverage LLMs themselves as reasoning engines to hydrate and align knowledge shards into coherent models. Rather than relying purely on statistical relationships, we can use targeted reasoning prompts to ground generated triplets through the model's internal reasoning chains.

This approach works by presenting the LLM with knowledge fragments and asking it to:

- **Verify relational consistency**: "Given that X relates to Y through Z, what other relationships should logically follow?"
- **Identify missing connections**: "What intermediate concepts bridge A and B in this domain?"
- **Validate chain integrity**: "Does this reasoning path from premise to conclusion hold under scrutiny?"
- **Establish local coherence**: "How does this new knowledge shard fit with existing relationships in this cluster?"

While these internal reasoning chains remain proprietary black boxes, they are specifically optimized for tasks like verification, consistency checking, and coherence validation. The LLM can trace through its learned associations to identify where new knowledge creates contradictions or gaps in the existing graph structure.

For example, when adding a new concept like "quantum entanglement" to a physics knowledge graph, the LLM can be prompted to generate not just the definition, but also:
- Its relationships to existing quantum mechanics concepts
- Potential conflicts with classical physics principles already in the graph  
- Missing intermediate concepts needed to maintain logical pathways
- Cross-domain connections to information theory or philosophy

This creates a feedback loop where the LLM's reasoning capabilities are used to maintain the very knowledge structures that will eventually enhance reasoning reliability. The resulting world model becomes more than the sum of its parts—a coherent, internally consistent representation that leverages the LLM's optimized reasoning chains while remaining transparent and navigable.

By implementing such knowledge graphs, we create a foundation where symbolic reasoning can operate more reliably, bridging the gap between current LLM capabilities and the robust world models needed for trustworthy AI reasoning.
