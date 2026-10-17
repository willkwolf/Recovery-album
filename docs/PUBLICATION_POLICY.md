# Publication Gate Policy — RECOVERY

## 1. Core Principle
Nothing enters the public repository or deployment pipeline by default. All public materials are treated as deliberate artistic or architectural disclosures requiring explicit human authorization.

## 2. Requirements for Publication

An artifact (musical code, audio recording, visual asset, or documentation) may be published if and only if:

1. **Explicit Human Approval**: The artifact has been evaluated and approved by the human creator.
2. **Cataloged in Manifest**: An entry exists in `artifacts.manifest.json` with `humanApproval.approved: true`.
3. **No Private Residue**: The artifact contains no raw prompts, agent conversation logs, private reflections, or internal file paths.
4. **Boundary Verification Passes**: The repository passes `npm run verify:boundary` with zero violations.
5. **Clean Commit Description**: The git commit message follows minimal, artifact-oriented conventions (e.g. `feat: publish track 01`, `music: add rhythm variation`).

## 3. Prohibited Content

The following items are strictly forbidden from entering the repository or any public build:
- `.env` or credential files of any variety.
- The `Research/` or `OpenWiki/` directories and their subcomponents.
- Internal AI agent prompts, system prompt instructions, or reasoning transcripts.
- Intermediate evaluation scores or rejected musical sketches.
- Personal journal entries or unfiltered creative notes.

## 4. Leak Remediation Protocol

If a private document, credential, or unapproved artifact is inadvertently placed in the repository workspace:
1. **Halt Immediate Action**: Do not automatically rewrite git history or silently delete files.
2. **Report to Creator**: Alert the human creator immediately with the exact path and nature of the affected file.
3. **Quarantine**: If uncommitted, move the file immediately outside the repository into the private OpenWiki folder.
4. **Credential Rotation**: If a sensitive token or key was exposed, revoke and rotate it immediately at the provider level.
5. **Verify Clean Tree**: Re-run `npm run verify:boundary` to ensure the workspace is clean.

## 5. Commit Standards
Commit messages must remain strictly artifact-focused:
- Acceptable: `feat: add track 01 schema`, `music: update Strudel pattern for Backup`, `docs: clarify boundary policy`
- Unacceptable: `fix: adjust model prompt after bad output`, `chore: add camilo's private reflections on 2016-2026`, `experiment: try prompt v4`
