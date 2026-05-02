# Upfront MERN Project

A production-style MERN monorepo with separate `frontend`, `backend`, and `admin` apps.

## Stack

- Frontend: React + Vite + Tailwind CSS
- Backend: Node.js + Express + MongoDB (Mongoose) using MVC structure
- Admin: React + Vite + Tailwind CSS

## Folder Structure

- `frontend/`: Public business website
- `backend/`: API server with MVC architecture
- `admin/`: Admin dashboard for contact and portfolio management

## Backend MVC Layout

- `backend/src/models`: Mongoose models
- `backend/src/controllers`: Request handlers
- `backend/src/routes`: API routes
- `backend/src/config`: DB connection and startup config
- `backend/src/middleware`: Error handling middleware

## API Endpoints

- `GET /api/health`
- `GET /api/portfolio`
- `POST /api/portfolio`
- `GET /api/contacts`
- `POST /api/contacts`

## Local Database

Default local MongoDB URI:

- `mongodb://127.0.0.1:27017/upfront_local`

## Run Project

1. Install dependencies:

```bash
npm install
```

2. Create backend env file from sample and set values.

3. Run all apps:

```bash
npm run dev
```

## Ports

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`
- Admin: `http://localhost:5174`
