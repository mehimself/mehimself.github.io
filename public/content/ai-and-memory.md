# AI and Memory

*January 10, 2025*

LLMs and reasoning will not in the foreseeable future achieve human-level productivity in knowledge work. This why the easiest pickings for end-user value lie in integrations.

## What is a knowledge graph?

Knowledge graphs can be used as persistent online memory for LLMs. Why the "graph"? Let's define **_knowledge_** as data + relevance. Relevance ties data to a purpose or subject resulting in **_knowledge_**. You could say **_knowledge_** is data with an index in subjects. This is analoguous to a graph database, where a topical node may branch out in relationships to data nodes. If we define memory as a topical trigger that yields **_related knowledge_**, our technological analogue turns into picking a topical entry node and finding related nodes by resolving the first layer of relationships.

```cypher
MATCH (topic)--(knowledge) 
RETURN knowledge
```

This is one of the most basic cypher query if you chose to use Neo4j.

## What are the benefits?

In the scope of this post we (in)form the prompting context of LLMs. While LLM models have cut-off dates months or years in the past, knowledge graphs can be operated **_online_** with lags as short as a single LLM interaction.

As a user-centered designer I would ask where you assign most value to improved LLM memory. As a power user of LLMs I would list the following qualities to complement LLM with their inherent limitations:

- **_accuracy_**: I do not want irrelevant or outright false details to derail the LLM
- **_verifiability_**: Enable me to verify reasoning based on the sourced knowledge. Learning by doing.
- **_recall_**: exploratively considering all existing entries without changing the context is priceless
- **_intelligibility_**: allowing me to explore and browsable knowledge
- **_curatability_**: being allowed to balance sources for their content or perspective
- **_access control_**: allow me to declare knowledge sections that have access control

Imagine being able to tell where your blind-spots lie, or which source introduced erroneous facts by simply looking it up.

For a modicum of consideration graph databases give us all of the above. Graphs can be naturally browsed as layers. One layer may contain user accounts, another may contain our product database, and the knowledge base would be residing in yet another sphere. This labeling of layers/data types increases intelligibility and allows us humans to exploratively navigate relationships within- and across layers and topics.

When you upload a product database extract as a JSON file to an LLM and post a simple request such as: "find three items that are ISO 11612 certified (fire retardant) and available in the color red" your LLM response will be very convincing, until you proof-read your data. While this is a simplified example and a moving goal post the fundamental limitation remains. You may get lucky sometimes, but simple filters and other 'complex' cognitive actions impose severe challenges to LLMs.

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

> **_I am not a legal expert. Refer to licensed professionals for legal advice._**

**_GDPR_**. Personalized knowledge ingestion and synthesis probably is what the GDPR is regulating most effectively. If you process personal data at any time you need informed consent. Due to the high degree of freedom with integrated knowledge, individual graph queries may require dedicated formulations. The delimitation of your personal data processing **_will not be trivial and will make or break your venture_**. While this sounds defeatist, the future of scaling AI value lies in knowledge integration. Some may decide to operate in legal limbo until proven right or wrong. In any case: while your knowledge graph may be mutable, your data processing pipelines definitely cannot.

Copyrighted works and intelligible memory design form complications. The internal representation of your graph could count as storage of copyrighted works. A more fragmented corpus design where shared lemmas reference each other, and higher-level layers project the essence of individual works in symbolic unintelligible representations would resemble LLM models. [Both are currently disputed](https://kpmg-law.de/en/ai-and-copyright-what-is-permitted-when-using-llms/) with extremely high stakes for the future of genAI.

It requires a dedicated private LLM instance to process ingested knowledge within a domain you can control. If regional laws apply you may be limited to local or regional vendors of dedicated compute.

## A Modicum of Consideration

As is clear to all of us data comes in different types and along follow respective rights and responsibilities. To accommodate regulations, security, and privacy you need to define privileged access architecture. Graphs have many dimensions. Good architecture prevents unauthorized access on low and redundant levels (dbms + controllers).

With data privileges comes segregation. What constitutes your immutable core graph, and which 'outer layers' reflect online interaction? Which sources do you want to sample once? What do you ingest continuously?

Intelligibility comes with an overhead and should be limited to an entry-node layer. Named entities would be a good point to start. Personal knowledge granularity could be offered in tiers.

Ingesting texts as knowledge into your knowledge graph employs several LLM prompts per term. If you want to be thorough: at least one prompt per reference of a term. This quickly scales out of reasonable proportion unless you apply best practices for normalization, deduplication, lemmatization, etc.

You will want to threshold what constitutes a notable entry. Do you want to set topical limits? Is it enough to remember the meta data and key formulations for a presentation, or are you parsing reference documents, where perfect recall is essential. This type of curation is formative and requires appropriate consideration. Careful database design you will maintain references to your sources which allows you to revisit and review your embedding choices. Deliberate pipeline designs could classify material for dynamic ingestion strategies.

Does your service develop core customer values from synthesizing user inputs and did you find the GDPR loophole? In this case you might want to maintain personalized layers of online knowledge representations for users. This could range from annotated images to messages to LLM personality customizations to vibe coded application settings. Mind compliance with regulations and access privileges before designing the database.

What payload should knowledge database nodes (**_terms_**) hold? Which ontology should we enforce as intelligible index?

Avoid idiosyncratic ontologies and keep type casting limited to a technological necessity.

Online graphs require a constant upkeep, immutable graphs may be generated in an temporary effort.
