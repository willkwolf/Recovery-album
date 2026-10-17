# System Architecture — RECOVERY

## 1. Project Overview & Philosophy
**RECOVERY** is an experimental, generative musical system and public artifact. The codebase, sound experiments, algorithmic scripts, and web environment are integral components of the creative artwork.

The human creator exercises absolute creative authority over vibe, artistic identity, sequencing, and publication decisions. Software agents function strictly as assistive tools for implementation, composition tooling, technical verification, and site maintenance.

```
+--------------------------------------------------------------+
|                PRIVATE CREATIVE ENVIRONMENT                  |
|                 (OpenWiki / Local Knowledge)                 |
|  - Unfiltered vibe notes and conceptual dossiers             |
|  - Raw agent prompts & private reflections                   |
|  - Unpublished iterations & rejected sonic experiments      |
+------------------------------+-------------------------------+
                               |
                   Human Creative Authorization
                     (Explicit Gate / Allowlist)
                               |
                               v
+--------------------------------------------------------------+
|                 PUBLIC ARTIFACT ENVIRONMENT                  |
|                (GitHub Repository & Pages)                   |
|  - Approved musical source code (Strudel / Web Audio)        |
|  - Curated sound experiments & structural variations         |
|  - Minimal artifact-oriented Git commit history             |
|  - Static web presentation & architecture documentation      |
+--------------------------------------------------------------+
```

## 2. Privacy Boundary & Separation of Concerns

The system enforces a physical and operational boundary between two environments:

### A. Private Creative Environment (OpenWiki)
- Resides outside of the public git repository.
- Contains original prompt logs, creative journals, historical iterations, and personal reflections.
- Remains completely inaccessible to public build scripts, continuous integration (CI), and deployed web code.

### B. Public Artifact Environment (This Repository)
- Contains only deliberately approved, finalized source code, sound scripts, and selected audio.
- Governed by `artifacts.manifest.json` and verified on every commit and build via `scripts/verify-boundary.mjs`.
- Never stores or processes private credentials, model API keys, or private prompts.

### What Is Intentionally Withheld
To preserve artistic integrity and creative privacy, the following materials are strictly omitted from public distribution:
- Unfiltered creative prompt transcripts and model interactions.
- Intermediate rejected acoustic sketches and evaluation scores.
- Private reflections and philosophical journaling maintained in OpenWiki.

## 3. Technology Stack & Rationale

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Static Framework** | Astro | Static-first performance, zero client-side JavaScript overhead by default, modular component model. |
| **Language & Types** | TypeScript | Strict validation of track metadata, manifest schemas, and runtime assertions. |
| **Algorithmic Music** | Strudel (TidalCycles in JS) | Transparent, browser-runnable musical source code allowing direct auditioning and live algorithmic manipulation. |
| **User Interface** | Semantic HTML & Native CSS | Accessible, responsive, brutalist-inspired UI prioritizing legibility and functional clarity without stock startup templates. |
| **Hosting & CI** | GitHub Actions & Pages | Least-privilege automated static deployment (`contents: read`, `pages: write`, `id-token: write`). |

## 4. Publication Gate Workflow

Every artifact published to the public web must follow this lifecycle:

1. **Generation / Sketching**: Developed under creative direction in the private environment or proposed as an experimental candidate.
2. **Human Evaluation**: The human creator approves or rejects the piece based on aesthetic criteria rather than automated scores.
3. **Manifest Entry**: The approved artifact is registered in `artifacts.manifest.json` with an explicit `humanApproval` record.
4. **Boundary Verification**: `npm run verify:boundary` executes locally and in CI to guarantee that no private files, keys, or unapproved assets are present.
5. **Static Compilation**: Astro builds the production bundle into `dist/`.
6. **Publication**: With explicit human consent, changes are committed with minimal, artifact-focused commit messages and deployed to GitHub Pages.

## 5. Licensing Status
Licensing of the software code, algorithmic compositions, audio recordings, and visual presentation remains **undecided and reserved** until explicitly designated by the human creator.
