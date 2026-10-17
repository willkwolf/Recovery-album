# RECOVERY — Experimental Generative Music System

[![Privacy Boundary & Build](https://github.com/willkwolf/Recovery-album/actions/workflows/deploy.yml/badge.svg)](https://github.com/willkwolf/Recovery-album/actions/workflows/deploy.yml)

**RECOVERY** is an experimental algorithmic musical system where the source code, compositional scripts, and sound experiments are constitutive elements of the artwork.

The human creator exercises final authority over aesthetic direction, vibe, conceptual meaning, sequencing, and publication decisions. Software agents assist with implementation, composition tooling, technical evaluation, and site maintenance.

---

## Architecture & Privacy Boundary

This repository represents the **Public Artifact Environment**. It enforces an explicit, auditable separation from the **Private Creative Environment (OpenWiki)**:

- **Private Creative Workspace (OpenWiki)**: Hosts raw research dossiers, unfiltered reflections, creative journals, internal AI model prompts, and unpublished audio drafts. It lives strictly outside this repository.
- **Public Artifact Environment (This Repository)**: Contains exclusively allowlisted, human-approved musical code, static web interfaces, and public technical documentation.

Every release is governed by `artifacts.manifest.json` and validated by `scripts/verify-boundary.mjs`.

For detailed architecture, refer to [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) and [`docs/PUBLICATION_POLICY.md`](docs/PUBLICATION_POLICY.md).

---

## Tech Stack

- **Static Site Generator**: [Astro 5](https://astro.build/) (Static output)
- **Language**: TypeScript & Modern ES Modules
- **Algorithmic Audio Engine**: [Strudel](https://strudel.cc/) / Web Audio API
- **Styling**: Native CSS with custom design tokens, accessible contrast, and zero external runtime bloat
- **CI / Deployment**: GitHub Actions & GitHub Pages (least-privilege permissions)

---

## Local Development

### Prerequisites
- Node.js 20+ (v22 recommended)
- npm 10+

### Setup & Run
```bash
# Clone the repository
git clone https://github.com/willkwolf/Recovery-album.git
cd Recovery-album

# Install locked dependencies
npm install

# Run privacy boundary and publication gate verification
npm run verify:boundary

# Start local development server
npm run dev
```

### Build & Validate
```bash
# Typecheck
npm run check

# Verify privacy boundary
npm run verify:boundary

# Production build
npm run build

# Preview build locally
npm run preview
```

---

## Current Cycle: Single 01 — Backup

The inaugural public experiment implements three algorithmic variations of the single **"Backup"** based on the conceptual tensions of the RECOVERY cycle:

1. **Variación A (Museo)**: *La memoria como reliquia* — Cadencia lenta (72 BPM), texturas filtradas y artefactos de degradación lo-fi.
2. **Variación B (Tránsito)**: *La memoria como combustible* — Motor rítmico percusivo (124 BPM), pulso implacable y administración digital de la memoria.
3. **Variación C (Fork)**: *La memoria ya en otra parte* — Bifurcación polirrítmica asimétrica (110 BPM) con disonancia armónica no resuelta.

All three variations can be auditioned and edited live directly in the [Experimental Lab](https://recovery-music.github.io/lab).

---

## Licensing & Rights

Licensing of software code, musical compositions, sound recordings, and visual art remains **undecided and reserved** until explicitly approved by the human creator.
