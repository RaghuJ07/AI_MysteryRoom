# AI MYSTERY ROOM
## Master Product & Technical Specification
**Document Type:** Product Requirements Document (PRD) + Software Requirements Specification (SRS) + Technical Design Document  
**Version:** 1.0  
**Status:** Initial Development Specification  
**Purpose:** Single Source of Truth for AI-assisted development using OpenAI Codex

---

# 1. PROJECT OVERVIEW

## 1.1 Project Name
**AI Mystery Room**

## 1.2 Product Vision

AI Mystery Room is an AI-powered interactive investigation platform where users become detectives and solve fictional criminal mysteries generated dynamically by artificial intelligence.

Users provide a short story, scenario, or mystery premise. The AI generates a complete fictional investigation containing:

- A crime or mysterious incident.
- A list of suspects.
- A hidden culprit.
- Motives and backstories.
- Evidence and clues.
- WhatsApp conversations.
- Photographic evidence.
- CCTV footage or simulated camera recordings.
- Witness statements.
- Investigation reports.
- A final solution.

The user investigates the case by examining the evidence and identifying the culprit.

The central experience should feel like investigating a real criminal case rather than playing a conventional quiz.

## 1.3 Core Product Concept

**User input → AI generates mystery → User investigates evidence → User identifies culprit → AI reveals the truth.**

The platform should create a new, internally consistent mystery for every investigation.

The AI must determine the culprit before the investigation begins. It must not change the culprit based on the user's decisions.

---

# 2. PRODUCT GOALS

## 2.1 Primary Goals

1. Allow users to generate custom mystery investigations using their own story ideas.
2. Generate realistic fictional evidence using Gemini.
3. Provide an immersive detective investigation experience.
4. Allow users to inspect evidence and connect clues.
5. Allow users to accuse one suspect as the culprit.
6. Evaluate the user's final accusation.
7. Reveal the complete investigation solution.
8. Make each generated mystery logically consistent and solvable.

## 2.2 Secondary Goals

- Provide different mystery difficulty levels.
- Allow users to replay investigations.
- Maintain investigation history.
- Introduce a scoring system.
- Support different crime and mystery genres.
- Make the application extensible for future multiplayer investigations.

## 2.3 Non-Goals for MVP

The following features are explicitly outside the initial release:

- Real-time multiplayer investigations.
- Live human-to-human messaging.
- Real-world criminal investigations.
- Actual police database integrations.
- User-generated evidence uploads.
- Voice conversations with suspects.
- AI-generated real video footage.
- Subscription and payment systems.
- Public community mystery sharing.

These can be considered in future versions.

---

# 3. TARGET USERS

## Primary Audience

People who enjoy:
- Detective stories.
- Murder mysteries.
- Crime investigation games.
- Escape rooms.
- Puzzle-solving.
- Interactive storytelling.
- Psychological thrillers.

## User Roles

### Guest User
Can:
- Access the landing page.
- Generate a mystery.
- Play an investigation.
- View the final verdict.

For MVP, authentication is optional and the application should support guest sessions.

### Registered User (Future-ready)
Can:
- Save investigations.
- View investigation history.
- Track completed cases.
- View statistics and scores.

---

# 4. CORE USER JOURNEY

The application must follow this primary workflow.

## Step 1: Landing Page

The user enters the website.

The landing page introduces AI Mystery Room and explains how the investigation game works.

Primary CTA:

**Start an Investigation**

Secondary information:
- How it works.
- Available mystery categories.
- Example investigations.

## Step 2: Create a Mystery

The user is redirected to the mystery creation screen.

The user provides:

**Required input:**
- Story / Scenario: A short description of the mystery they want to investigate.

**Optional inputs:**
- Mystery category.
- Difficulty level.
- Number of suspects.

Default values:
- Category: General Mystery.
- Difficulty: Medium.
- Suspects: 4.

Supported categories:
- Murder Mystery.
- Theft.
- Disappearance.
- Corporate Espionage.
- Blackmail.
- Psychological Mystery.
- General Mystery.

Difficulty:
- Easy.
- Medium.
- Hard.

Suspect count:
- Minimum: 3.
- Maximum: 6.

The user clicks:

**Generate Mystery**

## Step 3: AI Mystery Generation

The backend sends the user's scenario and configuration to Gemini.

Gemini generates a complete structured investigation.

The generation process must include:

1. Story development.
2. Suspect creation.
3. Culprit selection.
4. Motive development.
5. Timeline creation.
6. Evidence generation.
7. Clue and contradiction generation.
8. Solution generation.
9. Consistency validation.

The culprit must be decided before evidence is generated.

The application must display an engaging loading screen with progress messages such as:

- Establishing the crime scene...
- Identifying suspects...
- Gathering digital evidence...
- Reviewing CCTV recordings...
- Connecting the clues...
- Preparing your investigation...

These messages are UI feedback and should not falsely imply that individual AI tasks have completed unless they actually have.

## Step 4: Investigation Dashboard

Once generation is successful, the user enters the investigation room.

The dashboard is the primary gameplay interface.

It should contain:

### A. Case Overview
- Case ID.
- Case title.
- Crime description.
- Crime location.
- Date and time of incident.
- Difficulty.
- Number of suspects.
- Investigation status.

### B. Suspects

Display suspect cards containing:
- Suspect name.
- Age.
- Occupation.
- Relationship with the victim or incident.
- Short background.
- Profile image or generated avatar.

IMPORTANT: Suspect profiles must not directly reveal the culprit.

### C. Evidence Room

All generated evidence must be available through a categorized evidence interface.

Evidence categories:

1. Digital Messages.
2. Photographs.
3. CCTV / Recordings.
4. Witness Statements.
5. Documents.
6. Forensic Reports.
7. Miscellaneous Clues.

The user can open each evidence item to inspect it.

### D. Investigation Notes

For MVP, provide a simple notes section where users can write their observations and theories.

Notes are private to the current investigation session.

### E. Final Accusation

A persistent action should allow the user to submit their final accusation.

CTA:

**Identify the Culprit**

The user must select one suspect before submitting.

The system should provide a confirmation dialog before locking the accusation.

The accusation can only be submitted once in the MVP.

## Step 5: Final Verdict

After the user submits their accusation:

The backend compares the selected suspect ID with the actual culprit ID.

The result screen displays:

**If correct:**
- Congratulations message.
- Correct culprit.
- Score.
- Explanation of the clues that exposed the culprit.

**If incorrect:**
- Incorrect accusation message.
- Actual culprit.
- Explanation of why the user's selected suspect was incorrect.
- The complete investigation solution.

Both outcomes must reveal the complete truth after the accusation.

## Step 6: Case Resolution

Display:
- Case summary.
- Actual culprit.
- Motive.
- Method.
- Timeline.
- Key evidence.
- Critical clues.
- Explanation of red herrings.
- Final investigation report.

Provide two CTAs:

- Create Another Mystery.
- Return to Home.

---

# 5. FUNCTIONAL REQUIREMENTS

## FR-01: Mystery Creation

The system must accept a user-provided scenario.

Requirements:
- Scenario must not be empty.
- Enforce configurable minimum and maximum character limits.
- Validate optional configuration values.
- Display validation errors.
- Prevent duplicate submissions while generation is running.

Suggested scenario limits:
- Minimum: 30 characters.
- Maximum: 2,000 characters.

## FR-02: AI Story Generation

Gemini must generate a complete fictional investigation based on the user's scenario.

Requirements:
- Preserve the user's original premise.
- Create a coherent narrative.
- Generate a fixed number of suspects based on configuration.
- Select exactly one culprit.
- Give each suspect a believable motive or background.
- Generate a consistent timeline.
- Generate evidence that supports logical deduction.
- Include misleading but fair red herrings.
- Ensure the mystery can be solved using available evidence.

## FR-03: Evidence Generation

The system must generate multiple evidence formats.

### WhatsApp Messages

Each conversation should include:
- Sender name.
- Recipient name.
- Message text.
- Timestamp.
- Optional attachment.
- Conversation grouping.

UI should resemble a fictional messaging interface.

Requirements:
- Messages must be chronological.
- Messages should have natural conversational language.
- Messages must contain clues without directly announcing the culprit.
- Conversations should support opening and reading the complete thread.

### Photographic Evidence

Generate or retrieve fictional scene images where supported.

Examples:
- Crime scene.
- Damaged objects.
- Room interiors.
- Suspicious items.
- Photographs containing hidden clues.

Requirements:
- Every image must have an evidence ID.
- Every image must have a title.
- Every image must have a description.
- Images must be linked to the relevant case.
- Images must not be presented as authentic real-world evidence.

Implementation decision:
Use Gemini image generation capabilities if available through the selected model/API. If image generation is unavailable, integrate a separate image-generation provider or use generated visual placeholders for MVP.

Gemini text generation must never be assumed to produce a real image merely because the response contains an image description.

### CCTV / Camera Recordings

MVP implementation:

Use simulated CCTV recordings rather than requiring actual video generation.

A CCTV evidence item can contain:
- Camera ID.
- Camera location.
- Recording date.
- Recording start time.
- Recording end time.
- Timestamped events.
- Scene description.
- Important observations.
- Optional generated CCTV-style image or short video asset.

Present recordings through a CCTV-style player interface.

If actual video generation is unavailable, render a simulated recording with a timeline, static visual frames, and event descriptions.

Do not display a fake playable video when no video asset exists.

### Witness Statements

Each statement should include:
- Witness name.
- Role.
- Statement.
- Time of statement.
- Related location.
- Potential inconsistencies.

### Documents

Examples:
- Investigation reports.
- Receipts.
- Emails.
- Medical reports.
- Letters.
- Access logs.

Every document should have realistic formatting and relevant clues.

## FR-04: Evidence Inspection

Users must be able to:
- Open evidence.
- Read complete evidence.
- View images.
- Inspect conversation threads.
- Examine CCTV event timelines.
- Navigate between evidence items.
- Return to the investigation dashboard.

## FR-05: Suspect Selection

The user must select exactly one suspect.

Requirements:
- Only suspects belonging to the current case can be selected.
- The user cannot select a non-existent suspect.
- The backend must validate the submitted suspect ID.
- Only one final accusation is allowed.
- The accusation must be persisted.

## FR-06: Verdict Evaluation

The backend must determine whether the accusation is correct.

The actual culprit ID must be stored independently from user-facing evidence.

The evaluation must be deterministic.

Do not ask Gemini to decide whether the user is correct.

## FR-07: Investigation Persistence

For MVP:
- Every case receives a unique ID.
- Case data is persisted in MongoDB.
- Guest users receive a session identifier.
- Users can refresh the page without losing their active investigation.
- Investigation state is maintained.
- Final verdicts are persisted.

## FR-08: Error Handling

The system must handle:
- Gemini API failures.
- Invalid AI responses.
- Generation timeouts.
- Database failures.
- Image generation failures.
- Invalid case IDs.
- Invalid suspect IDs.
- Duplicate accusation submissions.

Display understandable error messages and provide retry options where appropriate.

---

# 6. AI ARCHITECTURE — GEMINI

## 6.1 AI Provider

Primary provider: Google Gemini API.

Use the official Google Gen AI SDK for Node.js.

The model must be configurable using environment variables rather than hardcoded throughout the application.

Example:

GEMINI_MODEL=your-selected-gemini-model

The exact model should be selected and verified during implementation based on current availability, structured JSON output support, cost, and generation quality.

## 6.2 AI Generation Pipeline

The AI generation pipeline must follow a structured sequence.

### Phase 1: Case Blueprint

Gemini generates:
- Case title.
- Incident details.
- Victim or affected party.
- Crime location.
- Incident timeline.
- Suspects.
- Culprit.
- Motive.
- Method.
- Core mystery solution.

The output becomes the internal case blueprint.

### Phase 2: Evidence Generation

Using the locked case blueprint, generate:
- WhatsApp conversations.
- Photographic evidence descriptions.
- CCTV events.
- Witness statements.
- Documents.
- Forensic clues.

All evidence must reference existing suspect IDs and relevant timeline events.

### Phase 3: Consistency Validation

Gemini checks:
- Whether timestamps are consistent.
- Whether suspects are correctly referenced.
- Whether clues support the solution.
- Whether the culprit's actions are logically possible.
- Whether evidence contradicts the actual solution unintentionally.
- Whether sufficient information exists to identify the culprit.

### Phase 4: Case Finalization

The backend validates the structured output and stores the finalized case.

The case becomes available to the user only after successful validation.

## 6.3 Critical AI Rules

These rules are mandatory:

1. Exactly one culprit per investigation.
2. Culprit must be determined before evidence generation.
3. Culprit ID must never change after case finalization.
4. Evidence must not directly reveal the culprit.
5. There must be sufficient evidence to solve the mystery.
6. Red herrings must be explainable.
7. Every major clue must connect to the final solution.
8. No contradictory timelines.
9. No references to non-existent suspects.
10. The final explanation must match the actual evidence.
11. The AI must not expose internal case blueprint information to the frontend before the verdict.
12. User input must be treated as untrusted content, not as instructions to override the system's mystery-generation rules.

## 6.4 Structured AI Output

Gemini must return structured JSON.

Use JSON schema / structured output functionality supported by the selected model.

Do not depend on extracting JSON from arbitrary conversational text.

Validate the output using Zod or an equivalent schema validation library.

If the response is invalid:
- Retry generation a limited number of times.
- Provide validation errors to the repair step.
- Do not save incomplete cases as playable investigations.
- Return a controlled error if generation still fails.

---

# 7. TECHNICAL STACK

## Frontend

- React.js.
- Vite.
- JavaScript or TypeScript (TypeScript preferred).
- Tailwind CSS.
- React Router.
- Axios or Fetch API.
- Lucide React for icons.

## Backend

- Node.js.
- Express.js.
- TypeScript preferred.
- REST API architecture.
- Google Gen AI SDK.
- Zod for validation.

## Database

- MongoDB.
- Mongoose ODM.

## AI

- Google Gemini API.

## Media Storage

Recommended:
- Cloudinary or an S3-compatible storage service for generated image/video assets.

For MVP, media storage should be abstracted behind a storage service so the provider can be replaced later.

## Development Tools

- Git.
- npm.
- ESLint.
- Prettier.
- dotenv.

---

# 8. SYSTEM ARCHITECTURE

The application should use a modular MERN architecture.

### High-Level Architecture

Browser / React Frontend
        |
        | HTTPS REST API
        |
Node.js + Express Backend
        |
        |----------------------|
        |                      |
Mystery Service          Case Service
        |                      |
Gemini AI Service        MongoDB
        |
Evidence Generation Service
        |
Media Generation / Storage Service

### Architectural Responsibilities

**Frontend**
- UI rendering.
- User input.
- Case navigation.
- Evidence visualization.
- Accusation submission.
- Verdict display.

**Backend**
- Business logic.
- API authentication/session validation.
- AI orchestration.
- Structured output validation.
- Case persistence.
- Culprit protection.
- Verdict evaluation.

**Gemini**
- Story generation.
- Suspect generation.
- Evidence generation.
- Narrative consistency validation.
- Final solution explanation.

**MongoDB**
- Case data.
- Suspects.
- Evidence.
- User sessions.
- Accusations.
- Investigation status.

IMPORTANT: Gemini must never be called directly from the React frontend. All AI calls must happen on the backend.

---

# 9. DATABASE DESIGN

Use MongoDB with Mongoose.

## 9.1 Case Collection

Case:

{
  _id: ObjectId,
  caseId: String,
  sessionId: String,
  title: String,
  scenario: String,
  category: String,
  difficulty: String,
  status: String,
  incident: {
    description: String,
    location: String,
    date: String,
    time: String
  },
  suspects: [Suspect],
  evidence: [Evidence],
  blueprint: {
    culpritId: String,
    motive: String,
    method: String,
    solution: String,
    timeline: [TimelineEvent],
    redHerrings: [String]
  },
  verdict: {
    submitted: Boolean,
    accusedSuspectId: String,
    isCorrect: Boolean,
    submittedAt: Date
  },
  createdAt: Date,
  updatedAt: Date
}

The blueprint is private backend data.

It must never be returned through ordinary case or evidence APIs.

## 9.2 Suspect Schema

{
  suspectId: String,
  name: String,
  age: Number,
  occupation: String,
  relationship: String,
  background: String,
  motiveHint: String,
  profileImage: String
}

The suspect schema must not expose an isCulprit property.

## 9.3 Evidence Schema

{
  evidenceId: String,
  type: String,
  title: String,
  description: String,
  timestamp: Date,
  relatedSuspects: [String],
  content: Mixed,
  assetUrl: String,
  importance: String
}

Supported evidence types:
- whatsapp
- image
- cctv
- witness
- document
- forensic

The content structure should be validated according to the evidence type.

## 9.4 Timeline Event Schema

{
  eventId: String,
  timestamp: Date,
  description: String,
  relatedSuspectIds: [String],
  location: String
}

## 9.5 Session Collection

{
  sessionId: String,
  createdAt: Date,
  expiresAt: Date
}

Use a secure random session identifier.

For MVP, guest sessions can be maintained through an HTTP-only cookie.

Do not use predictable session IDs.

---

# 10. API DESIGN

All endpoints should use the prefix:

/api/v1

## 10.1 Generate Mystery

POST /api/v1/cases/generate

Request:

{
  "scenario": "A businessman is found missing from his locked office...",
  "category": "murder",
  "difficulty": "medium",
  "suspectCount": 4
}

Response:

{
  "success": true,
  "data": {
    "caseId": "CASE-12345",
    "title": "The Locked Office",
    "status": "investigating"
  }
}

Do not return the culprit or private blueprint.

Generation can be synchronous initially, with a configurable timeout. If generation takes too long, introduce an asynchronous job architecture with status polling.

## 10.2 Get Case

GET /api/v1/cases/:caseId

Returns:
- Case overview.
- Suspect information.
- Evidence summaries.
- Investigation status.

Must exclude:
- Culprit ID.
- Hidden motive.
- Private solution.
- Internal AI prompts.
- Internal validation information.

## 10.3 Get Evidence

GET /api/v1/cases/:caseId/evidence

Returns the evidence list.

## 10.4 Get Single Evidence

GET /api/v1/cases/:caseId/evidence/:evidenceId

Returns complete evidence content.

## 10.5 Submit Accusation

POST /api/v1/cases/:caseId/accusation

Request:

{
  "suspectId": "SUSPECT-02"
}

Response:

{
  "success": true,
  "data": {
    "isCorrect": true,
    "accusedSuspectId": "SUSPECT-02",
    "actualCulprit": {
      "suspectId": "SUSPECT-02",
      "name": "John Doe"
    },
    "explanation": "..."
  }
}

The actual culprit and explanation may only be returned after successful accusation submission.

The API must reject:
- Invalid suspect IDs.
- Cases belonging to another session.
- Already submitted accusations.
- Cases that are not in an investigable state.

## 10.6 Get Verdict

GET /api/v1/cases/:caseId/verdict

Only available after the accusation is submitted.

Returns the final investigation solution.

## 10.7 Health Check

GET /api/v1/health

Returns server status and basic service availability.

---

# 11. FRONTEND PAGE STRUCTURE

The frontend must contain the following pages.

## Page 1: Home / Landing Page

Route: /

Sections:
1. Navigation bar.
2. Hero section.
3. Main headline.
4. Short product description.
5. Start Investigation CTA.
6. How It Works.
7. Mystery categories.
8. Example investigation.
9. Footer.

Suggested headline:

"Every Mystery Has a Secret. Can You Find It?"

Suggested subheadline:

"Create your own mystery. Examine the evidence. Connect the clues. Unmask the culprit."

Design direction:
Dark detective / crime investigation atmosphere.

## Page 2: Create Investigation

Route: /create

Components:
- Scenario textarea.
- Category selector.
- Difficulty selector.
- Suspect count selector.
- Generate button.
- Input validation.

## Page 3: Investigation Room

Route: /case/:caseId

Layout:

**Sidebar**
- Case overview.
- Suspects.
- Evidence categories.
- Investigation notes.

**Main content**
- Current investigation section.
- Selected evidence.
- Evidence preview.
- Navigation controls.

**Top navigation**
- Case title.
- Case status.
- Progress indicator.

**Persistent action**
- Identify the Culprit.

The investigation room should be responsive and usable on desktop, tablet, and mobile.

## Page 4: Evidence Viewer

Can be implemented as a dedicated route or modal.

Must support different rendering components for each evidence type.

Components:
- WhatsAppViewer.
- ImageViewer.
- CCTVViewer.
- WitnessStatementViewer.
- DocumentViewer.
- ForensicReportViewer.

## Page 5: Final Accusation

Route: /case/:caseId/accuse

Components:
- Suspect selection.
- Confirmation modal.
- Submit accusation.

## Page 6: Verdict

Route: /case/:caseId/verdict

Components:
- Correct/incorrect result.
- Culprit profile.
- Motive.
- Timeline.
- Evidence breakdown.
- Final solution.
- Replay / new mystery CTA.

---

# 12. UI/UX DESIGN SYSTEM

## Design Philosophy

The website should feel like an advanced detective investigation interface.

Visual inspiration:
- Detective case files.
- Crime investigation rooms.
- Classified government documents.
- Digital forensic interfaces.
- Dark mystery games.

## Color Palette

Primary background: #0B0D12

Secondary background: #141821

Card background: #1A202B

Primary accent: #C6A15B

Secondary accent: #8B1E2D

Primary text: #F3F3F3

Secondary text: #A1A8B3

Borders: #303744

Success: #3F9B70

Danger: #C64A4A

## Typography

Suggested:
- Headings: Space Grotesk.
- Body: Inter.
- Evidence metadata: JetBrains Mono.

## UI Requirements

- Dark theme by default.
- Clean typography.
- Strong visual hierarchy.
- Subtle animations.
- Evidence cards with hover states.
- Consistent spacing.
- Loading skeletons.
- Toast notifications.
- Confirmation modals.
- Responsive navigation.
- Accessible color contrast.
- Keyboard-accessible controls.

Avoid making the interface unnecessarily cluttered.

The evidence should remain the primary focus of the investigation room.

---

# 13. SCORING SYSTEM

Implement a basic scoring system for MVP.

Suggested scoring:

Correct culprit: 100 points.

Difficulty multiplier:
- Easy: 1x.
- Medium: 1.5x.
- Hard: 2x.

Final score:

Base score × Difficulty multiplier.

Optional future scoring:
- Time taken.
- Number of evidence items inspected.
- Hints used.
- Number of incorrect theories.

Do not make time-based scoring mandatory in MVP.

---

# 14. SECURITY REQUIREMENTS

Security is critical because the game contains hidden information.

## 14.1 Culprit Protection

The actual culprit must never be exposed through:
- Case API responses.
- Suspect API responses.
- Evidence API responses.
- Frontend state.
- Browser local storage.
- HTML source.
- Client-side configuration.

The frontend must not receive the culprit ID before the verdict.

## 14.2 API Security

Implement:
- Input validation.
- Rate limiting.
- Secure HTTP headers using Helmet.
- CORS restrictions.
- Secure session cookies.
- Request size limits.
- Centralized error handling.
- Protection against NoSQL injection.
- Environment variable management.

## 14.3 Gemini API Security

- Store Gemini API keys only in backend environment variables.
- Never expose API keys to the frontend.
- Apply rate limits to mystery generation.
- Limit prompt and output sizes.
- Validate AI output before saving.
- Handle prompt injection attempts.
- Never execute generated AI content as code.

## 14.4 Fictional Content Safety

All generated investigations must be explicitly fictional.

Avoid:
- Using real private individuals as suspects.
- Presenting fabricated evidence as authentic.
- Generating realistic defamatory allegations about real people.
- Producing instructions for committing real-world crimes.

The product is an entertainment and storytelling platform, not an actual investigation tool.

---

# 15. ERROR STATES

The frontend must support these states:

| Situation | Expected Behaviour |
|---|---|
| Empty scenario | Show validation message |
| Invalid configuration | Reject input |
| Gemini unavailable | Display retry message |
| AI output invalid | Retry generation |
| Generation timeout | Display recoverable error |
| Case not found | Show 404 page |
| Invalid evidence ID | Show evidence unavailable |
| Invalid suspect selection | Show validation error |
| Duplicate accusation | Reject submission |
| Database unavailable | Display service error |
| Missing media asset | Show fallback visual |
| Expired session | Ask user to start a new session |

Errors should never expose API keys, stack traces, prompts, or internal database information.

---

# 16. PROJECT FOLDER STRUCTURE

Use a monorepo with separate frontend and backend directories.

ai-mystery-room/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── layout/
│   │   │   ├── evidence/
│   │   │   └── suspects/
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── CreateCase/
│   │   │   ├── Investigation/
│   │   │   ├── Accusation/
│   │   │   └── Verdict/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── context/
│   │   ├── utils/
│   │   ├── types/
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── services/
│   │   │   ├── gemini/
│   │   │   ├── mystery/
│   │   │   ├── evidence/
│   │   │   └── storage/
│   │   ├── middleware/
│   │   ├── validators/
│   │   ├── prompts/
│   │   ├── types/
│   │   ├── utils/
│   │   ├── app.ts
│   │   └── server.ts
│   └── package.json
│
├── docs/
│   ├── SPEC.md
│   ├── API.md
│   └── AI_GENERATION.md
│
├── .gitignore
├── README.md
└── package.json

The above is the target structure. Codex may introduce additional files when justified, but should preserve the modular separation.

---

# 17. ENVIRONMENT VARIABLES

Backend .env:

PORT=5000

NODE_ENV=development

MONGODB_URI=

GEMINI_API_KEY=

GEMINI_MODEL=

CLIENT_URL=http://localhost:5173

SESSION_SECRET=

MEDIA_STORAGE_PROVIDER=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

Frontend .env:

VITE_API_BASE_URL=http://localhost:5000/api/v1

All secrets must remain on the server.

Provide .env.example files with placeholder values.

Never commit real credentials.

---

# 18. TESTING REQUIREMENTS

## Unit Testing

Test:
- Mystery generation service.
- AI response validation.
- Suspect validation.
- Evidence validation.
- Culprit comparison.
- Verdict evaluation.
- Session validation.

## Integration Testing

Test:
- Generate case API.
- Fetch case API.
- Fetch evidence API.
- Submit accusation API.
- Fetch verdict API.

## Frontend Testing

Test:
- Form validation.
- Mystery generation flow.
- Investigation navigation.
- Evidence viewer rendering.
- Suspect selection.
- Verdict rendering.

## Critical Security Tests

Verify that:
1. The culprit is not returned before accusation.
2. The culprit is not present in frontend payloads.
3. Users cannot access another guest session's case.
4. Users cannot accuse a non-existent suspect.
5. Users cannot submit multiple accusations.
6. Users cannot retrieve verdict information early.

---

# 19. MVP ACCEPTANCE CRITERIA

The MVP is considered complete only when all of the following are satisfied.

### Mystery Creation
- [ ] User can submit a scenario.
- [ ] User can select category.
- [ ] User can select difficulty.
- [ ] User can select suspect count.
- [ ] Gemini generates a valid mystery.
- [ ] Exactly one culprit is selected.
- [ ] Case is stored in MongoDB.

### Investigation
- [ ] User can open a generated case.
- [ ] All suspects are displayed.
- [ ] All evidence is displayed.
- [ ] WhatsApp conversations render correctly.
- [ ] Images display correctly or show fallbacks.
- [ ] CCTV evidence renders correctly.
- [ ] Witness statements render correctly.
- [ ] Documents render correctly.
- [ ] User can write investigation notes.
- [ ] User can refresh without losing the case.

### Accusation
- [ ] User can select one suspect.
- [ ] Confirmation is required.
- [ ] Accusation is saved.
- [ ] Duplicate submissions are blocked.
- [ ] Correct and incorrect accusations are evaluated correctly.

### Verdict
- [ ] Actual culprit is revealed after submission.
- [ ] Motive is revealed.
- [ ] Full timeline is displayed.
- [ ] Evidence explanations are displayed.
- [ ] Correct/incorrect status is displayed.

### Security
- [ ] Gemini key is backend-only.
- [ ] Culprit is hidden before verdict.
- [ ] Case ownership is validated.
- [ ] API validation is implemented.
- [ ] Rate limiting is implemented.

### UI
- [ ] Dark detective theme implemented.
- [ ] Responsive layouts implemented.
- [ ] Loading states implemented.
- [ ] Error states implemented.
- [ ] All main navigation flows work.

---

# 20. DEVELOPMENT PHASES

Codex must build the application incrementally.

## Phase 1: Project Foundation

- Initialize monorepo.
- Configure React + Vite.
- Configure Express + Node.js.
- Configure MongoDB.
- Configure TypeScript.
- Configure Tailwind CSS.
- Configure routing.
- Set up API communication.
- Establish reusable UI components.

Deliverable: Working frontend and backend connected to MongoDB.

## Phase 2: Frontend UI

Build:
- Landing page.
- Mystery creation page.
- Investigation dashboard.
- Suspect cards.
- Evidence room.
- Evidence viewers.
- Accusation page.
- Verdict page.

Use mock data initially.

Deliverable: Fully navigable frontend with realistic mock investigations.

## Phase 3: Gemini Integration

Build:
- Gemini client.
- Prompt management.
- Case blueprint generation.
- Evidence generation.
- Structured output validation.
- Consistency validation.
- Retry handling.

Deliverable: AI-generated investigation data.

## Phase 4: Backend Integration

Build:
- Case APIs.
- Evidence APIs.
- Session management.
- Accusation APIs.
- Verdict APIs.
- Database persistence.

Deliverable: Complete end-to-end application.

## Phase 5: Security and Testing

- Implement API protection.
- Protect culprit data.
- Validate session ownership.
- Test all API flows.
- Test Gemini failure scenarios.
- Fix UI and responsive issues.

Deliverable: Stable MVP.

## Phase 6: Final Polish

- Improve animations.
- Add loading experiences.
- Improve evidence presentation.
- Add sample cases.
- Complete documentation.

Deliverable: Deployment-ready MVP.

---

# 21. FUTURE ROADMAP

The architecture should allow the following features to be added later without major rewrites.

### Version 2
- User registration and login.
- Personal investigation history.
- Saved cases.
- More mystery genres.
- Advanced difficulty.
- Hint system.
- Timed investigations.
- Performance analytics.

### Version 3
- Actual AI-generated short CCTV videos.
- Voice recordings.
- Interactive suspect interrogations.
- AI-powered suspect conversations.
- Evidence cross-referencing.
- Advanced investigation board.

### Version 4
- Multiplayer investigations.
- Invite friends.
- Collaborative evidence analysis.
- Competitive detective rankings.
- Community-created mysteries.

---

# 22. CODEX DEVELOPMENT RULES

The following instructions are mandatory for all AI-assisted development.

## 22.1 Single Source of Truth

This document is the authoritative product and technical specification.

Codex must refer to this document before implementing any feature.

Do not independently change:
- Product functionality.
- API contracts.
- Database architecture.
- AI generation rules.
- Security requirements.
- User journey.

If a requirement is unclear, prefer the simplest implementation consistent with this document.

## 22.2 Code Quality

- Use modular architecture.
- Prefer TypeScript.
- Use reusable React components.
- Keep business logic out of controllers.
- Keep Gemini logic inside dedicated services.
- Keep prompts in separate files.
- Use centralized API error handling.
- Use environment variables for configuration.
- Avoid unnecessary dependencies.
- Avoid duplicated code.
- Use consistent naming conventions.

## 22.3 AI Generation Rules

- Never hardcode a mystery as the production generation mechanism.
- Never allow Gemini to change the culprit after blueprint finalization.
- Never expose private solution data through frontend APIs.
- Never trust unvalidated Gemini responses.
- Never allow the frontend to determine whether an accusation is correct.
- Never return internal prompts or chain-of-thought to users.
- Never use fake media URLs as if they were actual generated assets.

## 22.4 Implementation Discipline

Before implementing a phase:

1. Read this specification.
2. Inspect the existing codebase.
3. Identify the requirements for the current phase.
4. Implement only the necessary features.
5. Run relevant tests.
6. Verify existing functionality has not broken.
7. Update documentation.

Do not generate the entire application in one uncontrolled code-generation step.

## 22.5 Documentation

Maintain:
- README.md for installation and setup.
- SPEC.md for this master specification.
- API.md for endpoint documentation.
- AI_GENERATION.md for prompts and AI generation workflows.

Any approved product requirement changes must be reflected in SPEC.md.

---

# 23. DEFINITION OF DONE

The project is complete when a user can:

1. Open the website.
2. Enter their own mystery scenario.
3. Configure the mystery.
4. Generate an investigation using Gemini.
5. Receive a complete fictional case.
6. Examine suspects.
7. Read WhatsApp messages.
8. Inspect photographic evidence.
9. Review CCTV-style recordings.
10. Read witness statements and documents.
11. Connect the clues.
12. Select a culprit.
13. Submit their accusation.
14. Receive the correct or incorrect result.
15. Read the complete solution.

All of this must work end-to-end with persistent backend data.

**The most important product principle: The user should feel like a detective solving an actual mystery, not someone answering an AI-generated multiple-choice question.**

---

# END OF MASTER SPECIFICATION

**Project:** AI Mystery Room  
**Version:** 1.0  
**Development Stack:** MERN + Google Gemini  
**Development Agent:** OpenAI Codex  
**Document Authority:** Single Source of Truth