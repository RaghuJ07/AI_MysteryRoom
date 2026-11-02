# AI generation

`server/src/services/generation.ts` implements a staged Gemini flow with JSON-mode responses and Zod validation:

1. Generate and validate the locked blueprint: incident, suspects, one culprit, motive, method, solution, and timeline.
2. Generate evidence against that finalized blueprint. Require existing suspect references, at least eight evidence items, fair clues, and explainable red herrings.
3. Run an independent consistency review for timeline conflicts, culprit leakage, suspect references, and whether the evidence fairly supports the solution.

The server stores the complete private case. API projections omit culprit and solution fields until an accusation has been accepted. Model selection is configured with `GEMINI_MODEL`; the API key is only read by the server. Invalid structured output receives one bounded retry and then a controlled failure. User premises are treated as untrusted story data.

Generated image evidence is currently a text description, not an image asset. CCTV entries are simulated event logs. No fake media URLs or playable-video controls are supplied.
