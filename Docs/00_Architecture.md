# Project Architecture & Directory Map (`00_Architecture.md`)

> **Note for AI Assistant / LLM**: Read this file to instantly understand the full-stack architecture, folder layout, data flow, and key patterns of this repository without needing to scan every folder.

---

## 1. Project Overview & Multi-App Layout

This repository is a **Monorepo / Multi-App Fullstack System** named **Cares-Bangladesh**. It consists of three primary applications, a central logging toolkit, and root orchestration files.

```
Cares-Bangladesh/
├── server/          # Node.js (>=22, ESM) + Express (v5) + MongoDB (v8) REST API Backend
├── web/             # Next.js (v14) + React (v18) + Tailwind CSS Storefront / Client Web App
├── admin/           # React (v19) + Vite (v8) + Tailwind CSS (v4) Admin Dashboard Panel
├── client-kit/      # Centralized Cloud Logging Client (log.js)
├── Docs/            # Architectural, deployment, and operational documentation
└── GEMINI.md        # AI Agent commit, code style, and deployment guardrails
```

---

## 2. Comprehensive Directory Structure

### 🔹 1. Backend (`/server`)
* **Tech Stack**: Node.js (>=22, `"type": "module"`), Express.js (v5), MongoDB + Mongoose (v8), Zod validation, JWT authentication, Sharp image processing, Pino logger, Nodemailer.
* **Default Port**: `5092`
* **Docker Support**: Containerized via multi-stage `Dockerfile` (`node:22-alpine`).

#### Folder Map:
```
server/
├── src/
│   ├── server.js            # Server entry point
│   ├── database/            # MongoDB connection logic
│   ├── controllers/         # API business logic controllers
│   ├── models/              # Mongoose database models & schemas
│   ├── routes/              # Express API route handlers
│   ├── middlewares/         # Authentication, rate limiting, and validation middlewares
│   └── utils/               # Shared utility functions
├── Dockerfile               # Node 22 alpine multi-stage production container build
├── .env.example             # Environment variable templates
└── package.json
```

---

### 🔹 2. Frontend Storefront (`/web`)
* **Tech Stack**: Next.js (v14 App Router / Pages), React (v18), Tailwind CSS, Radix UI primitives, Lucide React.
* **Purpose**: Customer-facing web application for Cares Bangladesh.

---

### 🔹 3. Admin Dashboard (`/admin`)
* **Tech Stack**: React (v19), Vite (v8), Tailwind CSS (v4), TanStack Query (v5), TanStack Table (v9), Axios, Zustand, Sonner, RemixIcon, Motion.
* **Purpose**: Administrative panel for inventory, order management, customer operations, and reports.

---

### 🔹 4. Centralized Logging (`/client-kit`)
* **Purpose**: Provides centralized activity and changelog telemetry to the central hub.
* **Usage**:
  ```bash
  node client-kit/log.js "<ID>(<type>): <Summary>" \
    --reqs "- Business requirement context" \
    --changes "- Breakdown of file and logic changes" \
    --notes "Verification notes"
  ```

---

## 3. Server & Deployment Reference

* **VPS Name**: `CaresBDVPS`
* **Server Hostname**: `server.caresbd.com`
* **Default User**: `root`
* **Credentials Storage**: Stored securely on Google Drive at `J:\My Drive\CLIENTS\Cares Bangladesh\CREDENTIALS.md`.
