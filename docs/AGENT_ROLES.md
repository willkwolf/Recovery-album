# Agent Responsibilities & Interfaces — RECOVERY

This document defines the modular roles and interface contracts for autonomous and assistive software agents in the RECOVERY ecosystem. Agents never hold autonomous creative or publication authority; each operates within strict, auditable parameters.

---

### 1. COMPOSER
- **Role**: Algorithmic music generator.
- **Input**: Approved, public-facing musical specifications (e.g. key centers, harmonic rules, rhythm tensions, Strudel patterns).
- **Output**: Executable Strudel code candidates (e.g., variations, loops, patterns).
- **Constraints**: 
  - Never accesses private OpenWiki reflections or raw emotional briefs directly.
  - Generates code conforming to standard Strudel syntax and reproducible Web Audio parameters.
  - Does not mark candidates as approved.

---

### 2. CRITIC
- **Role**: Technical evaluator and behavioral auditor.
- **Input**: Candidate Strudel code and technical constraints.
- **Output**: Objective observable reports (e.g., dynamic range, cycle repetition, polyrhythm compliance, audio thread performance).
- **Constraints**:
  - Never evaluates "aesthetic quality" or enforces conventional harmonic/commercial standards.
  - Zero publication authority.
  - Respects intentional irregularities and chosen artistic defects.

---

### 3. RESEARCHER
- **Role**: Algorithmic sound design and musicology reference gatherer.
- **Input**: Topics in synthesis, tuning systems, microtonality, generative algorithms, or acoustic history.
- **Output**: Technical references, synthesis blueprints, and cited historical techniques.
- **Constraints**:
  - Operates outside the private creative journal.
  - All external concepts must provide source citations.

---

### 4. CURATOR
- **Role**: Sequencing and structural organizer.
- **Input**: Pool of approved candidates and track metadata.
- **Output**: Proposed album sequencing, pacing notes, and track groupings.
- **Constraints**:
  - Proposes arrangements only; human creator retains final veto and selection authority.

---

### 5. ARCHIVIST
- **Role**: Metadata custodian and change log maintainer.
- **Input**: Approved artifacts and release notes.
- **Output**: Updates to `artifacts.manifest.json`, track schema definitions, and public changelogs.
- **Constraints**:
  - Exclusively records public technical metadata.
  - Prohibited from syncing or summarizing private OpenWiki logs.

---

### 6. WEBMASTER
- **Role**: Frontend engineer and publication gatekeeper.
- **Input**: Approved site designs, playback controls, and static assets.
- **Output**: Astro components, accessible audio interfaces, responsive stylesheets, and deployment pipelines.
- **Constraints**:
  - Enforces WCAG accessibility standards and responsive performance.
  - Guarantees zero secret exposure and runs `verify:boundary` prior to any deployment.
