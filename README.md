# AI Mystery Room

A fictional detective investigation game. Players submit a premise, inspect AI-generated suspects and evidence, make one final accusation, and unlock the case solution.

## Requirements

- Node.js 20 or newer and npm
- MongoDB (local or hosted)
- A Gemini API key for case generation

## Run locally

1. Copy `server/.env.example` to `server/.env` and set `MONGODB_URI`, `GEMINI_API_KEY`, and a long random `SESSION_SECRET`.
2. Copy `client/.env.example` to `client/.env` if the API is not at `http://localhost:5000/api/v1`.
3. From the repository root, run `npm install`, then `npm run dev`.
4. Open `http://localhost:5173`. The API listens at `http://localhost:5000`.

The backend refuses to start without MongoDB configuration and returns a controlled configuration error if Gemini is not configured. Image descriptions and simulated CCTV event logs are presented as such; the application does not claim to generate image or video assets. The default media provider is intentionally a placeholder.

## Structure

- `client/` — React, TypeScript, Vite, responsive detective room UI.
- `server/` — Express API, MongoDB persistence, session ownership, Gemini generation and validation.
- `spec.md` — Product and technical source of truth.

Guest cases and notes are scoped to a signed, HTTP-only session cookie. The private culprit, motive, method, and solution are excluded from case and evidence-list responses. Submitting an accusation is a one-time operation that unlocks the verdict.

See [API.md](docs/API.md) and [AI_GENERATION.md](docs/AI_GENERATION.md) for implementation details.
