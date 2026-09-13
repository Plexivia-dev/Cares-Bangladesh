# Git Commit & Centralized Logging Standards

## IMPORTANT: J:\My Drive\CLIENTS\Cares Bangladesh this is the docs folder, don't wrte docs or md file in the root

## 1. Commit Message Format
Every commit message must strictly follow this structure:
`<LogID>(<type>): <description>`

- **LogID**: The corresponding changelog ID matching the action scope (e.g. `CB01`, `SRV01`, `ADM01`, `WEB01`, `DEP01`, etc.).
- **type (4 letters max)**:
  - `feat` (New feature / capability)
  - `fix`  (Bug fix)
  - `refc` (Refactoring / code cleanup)
  - `docs` (Documentation updates)
  - `perf` (Performance improvements)
  - `chor` (Chores / dependency / build updates)
  - `styl` (Styling / CSS / theme UI changes)
  - `test` (Testing / test scripts)
- **description**: Clear, concise explanation of the change in sentence case.

**Examples**:
- `CB01(feat): setup core express backend routing and mongodb connection`
- `ADM01(feat): initialize react admin dashboard with vite and tailwind`
- `WEB01(fix): update nextjs storefront navigation and responsive layout`

---

## 2. No Lazy Commits
- Never make lazy, generic, or single-word commits (e.g. `up`, `fix`, `test`, `wip`, `temp`, `changes`).
- Every commit must describe the exact business or technical logic changed.

---

## 3. Centralized Logging via Central Hub (Zero Local Docs)
- **NO LOCAL DOCUMENTATION OR BATCH FILES IN `Docs/` FOR LOGS**: We no longer write or maintain markdown changelogs or batch files locally.
- All actions, changes, requirements, and test audits must be logged directly into the Central Hub using the rich logger CLI:
  ```bash
  node client-kit/log.js "<ID>(<type>): <Summary>" \
    --reqs "- Business requirement and problem context" \
    --changes "- File and logic changes breakdown" \
    --notes "Verification and test notes"
  ```
- Refer to `Docs/00_Architecture.md` for full project layout and component breakdown.

---

## 4. Code Style, Commenting & Core Logic Guardrails
- **Arrow Functions**: Always use arrow functions (`const myFunc = () => {}`) for functional components and all custom logic/handlers. Do not use standard `function` declarations.
- **No Inline Comments**: NEVER put inline comments inside code bodies, loops, conditions, or JSX blocks. Keep internal logic clean.
- **Single-Line Preceding Function Comment Only**: Place exactly one concise, single-line relative comment on the line immediately preceding the function declaration.
- **Core Logic Verification**: Always clarify and verify with the user before modifying core architectural, multi-tenant, inventory deduction, or payment logic.

**Example**:
```javascript
// Calculates and returns total discount applied across cart items
const calculateDiscount = (items) => {
  return items.reduce((acc, item) => acc + (item.price - item.discount), 0);
};
```

---

## 5. Deployment Rules (STRICT — NO EXCEPTIONS)
- **NEVER run any VPS build, `docker compose up --build`, or deployment command without user instruction.**
- When user instructs *"ডিপ্লয় দাও"*, execute the deployment commands directly using tools instead of outputting code text.
- **`temp` branch commits and `git push` are fine without confirmation.**
- **Merging `temp` into `Live` and pushing to GitHub is fine without confirmation.**
- **Only the actual VPS build/deploy step requires explicit user command.**

---

## 6. Server Operations & Mandatory Credentials Documentation
- **Central Credentials Storage**: All server-related credentials, connection configurations, SSH keys, database URIs, API tokens, port mappings, and domain records must be documented immediately in:
  `J:\My Drive\CLIENTS\Cares Bangladesh\CREDENTIALS.md`
- **Zero Data Loss**: Whenever a new credential, service password, port, or environment variable is introduced, modified, or discovered during server operations, it must be proactively recorded in the Google Drive credentials documentation.

