# Deployment Guide for Aquamarine

This project consists of two parts: a **Frontend (apps/web)** and a **Backend (apps/api)**. Because the backend is a NodeJS Express server (stateful), it cannot be hosted on standard Netlify (static hosting) without significant changes.

We recommend a **Split Deployment** strategy:
- **Frontend** -> Netlify
- **Backend (API)** -> Render.com (or Railway/Fly.io/Heroku)

## 1. Frontend Deployment (Netlify)

This part is ready to go!

1.  Connect your GitHub repository to **Netlify**.
2.  Select the repository.
3.  Netlify should automatically detect the settings from the `netlify.toml` file we added:
    - **Base directory:** `apps/web`
    - **Build command:** `npm run build`
    - **Publish directory:** `dist`
4.  **Important:** You need to tell the Frontend where your Backend lives.
    - Go to **Site Settings > Environment Variables**.
    - Add a variable named `VITE_API_URL`.
    - Set the value to your deployed Backend URL (e.g., `https://aquamarine-api.onrender.com`).
    - *Note: For now, you can leave this blank or point to localhost if testing locally, but it won't work for real users until the backend is live.*

## 2. Backend Deployment (Render.com)

Since your API uses an SQLite database (`dev.db`), it requires a **Persistent Disk** if you want to keep data between restarts. Without a disk, your database will reset every time you deploy.

### Option A: Use Render with a Disk (Easiest for SQLite)
1.  Create a **Web Service** on Render connected to your repo.
2.  **Settings:**
    - **Root Directory:** `apps/api`
    - **Build Command:** `npm install && npm run build` (or just `npm run build` if deps installed)
    - **Start Command:** `npm start`
    - **Environment Variables:**
        - `NODE_ENV`: `production`
3.  **Add a Disk:**
    - Go to Disks section in Render service settings.
    - Mount a disk at `/data` (or similar).
    - Update `prisma/schema.prisma` to point to the disk: `url = "file:/data/prod.db"`.
    - Run migrations: `npx prisma migrate deploy`.

### Option B: Switch to PostgreSQL (Recommended for Production)
SQLite is great for dev, but Postgres is better for production.
1.  Get a free PostgreSQL database from **Render**, **Neon.tech**, or **Supabase**.
2.  Update `apps/api/prisma/schema.prisma`:
    - Change `provider = "sqlite"` to `provider = "postgresql"`.
    - Change `url` to read from env: `url = env("DATABASE_URL")`.
3.  Deploy to Render (Web Service) and add the `DATABASE_URL` environment variable.

## Summary

1.  **Deploy Backend first** (e.g. to Render).
2.  Get the Backend URL (e.g., `https://my-api.onrender.com`).
3.  **Deploy Frontend to Netlify**.
4.  Set `VITE_API_URL` on Netlify to `https://my-api.onrender.com`.
