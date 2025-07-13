# Mermaid Diagram Test

*December 15, 2024*

This is a test post to demonstrate Mermaid diagram support in the blog.

## Flowchart Example

```mermaid
graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> B
    C --> E[End]
```

## Sequence Diagram

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant Database
    
    User->>Frontend: Request data
    Frontend->>Backend: API call
    Backend->>Database: Query
    Database-->>Backend: Results
    Backend-->>Frontend: Response
    Frontend-->>User: Display data
```

## Class Diagram

```mermaid
classDiagram
    class MarkdownPost {
        +String content
        +String markdownFile
        +Boolean loading
        +loadMarkdownFile()
        +renderMermaidDiagrams()
    }
    
    class Mermaid {
        +initialize()
        +render()
    }
    
    MarkdownPost --> Mermaid : uses
```

## Gantt Chart

```mermaid
gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    section Development
    Setup         :done, setup, 2024-01-01, 2024-01-07
    Implementation :active, impl, 2024-01-08, 2024-01-21
    Testing       :testing, after impl, 7d
    section Deployment
    Build         :build, after testing, 3d
    Deploy        :deploy, after build, 1d
```

This demonstrates various types of Mermaid diagrams working within the markdown content system.
