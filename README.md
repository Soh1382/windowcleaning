# Aquamarine Window Cleaning

A modern, full-stack window cleaning business solution.

## Structure
- `apps/web`: React + Vite + Tailwind CSS
- `apps/api`: Express + Node.js + Prisma (SQLite)
- `packages/shared`: Shared Types & Zod Schemas

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Setup Environment**
   - Copy `.env.example` to `.env` in `apps/api` (created automatically by Prisma)
   - Ensure `DATABASE_URL="file:./dev.db"`

3. **Database Setup**
   ```bash
   # Run migrations from root
   npm run migrate --workspace=apps/api
   ```
   *Note: Provide a migrate script in api package.json if not present, or run direct command*

4. **Run Development**
   ```bash
   npm run dev
   ```
   This will start both the API (port 3000) and Web (port 5173).

## Features Implemented So Far
- **Auth**: JWT-based auth with Refresh Tokens and Role support.
- **Database**: SQLite with Prisma, fully typed schema.
- **Frontend**: React Router, Tailwind Theme (Aquamarine), Component Library.
- **Shared**: Zod schemas for validation shared between BE/FE.

## Admin Login
(To be implemented: Seeding script)
