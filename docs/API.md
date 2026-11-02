# API

Base path: `/api/v1`. JSON endpoints use the guest session cookie; callers must preserve credentials (`credentials: include`). Errors return `{ "success": false, "error": "..." }`.

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/health` | API and database status |
| POST | `/cases/generate` | Create a validated, session-owned case |
| GET | `/cases/:caseId` | Case overview, suspects, and evidence summaries |
| GET | `/cases/:caseId/evidence` | Evidence index |
| GET | `/cases/:caseId/evidence/:evidenceId` | Full evidence content |
| PUT | `/cases/:caseId/notes` | Save private session notes |
| POST | `/cases/:caseId/accusation` | Submit the single final suspect accusation |
| GET | `/cases/:caseId/verdict` | Full solution, available only after accusation |

Generation body: `{ "scenario": "...", "category": "general", "difficulty": "medium", "suspectCount": 4 }`. Scenario length is 30–2,000 characters; suspect count is 3–6. The category values are `murder`, `theft`, `disappearance`, `corporate-espionage`, `blackmail`, `psychological`, and `general`.

Accusation body: `{ "suspectId": "SUSPECT-01" }`. The server validates ownership, suspect membership, and the case's investigable status. A resolved case rejects another accusation. Verdict access before resolution is forbidden.

A successful verdict includes score: 100 points for a correct accusation, multiplied by 1 (easy), 1.5 (medium), or 2 (hard); incorrect accusations score 0.
