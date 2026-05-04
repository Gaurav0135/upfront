# Upfront - Full Stack Portfolio & CMS

A modern full-stack web application for portfolio management, built with React, Express, and MongoDB.

## Project Structure

```
upfront/
├── frontend/          # React + Vite frontend application
├── admin/             # React + Vite admin panel
├── backend/           # Express.js API server
└── package.json       # Root workspace configuration
```

## Features

- **Frontend**: Responsive portfolio showcase with modern UI
- **Admin Panel**: Content management system for portfolio items and contacts
- **Backend API**: RESTful API with MongoDB integration
- **Loading States**: Skeleton screens and spinners for better UX
- **Database Fallback**: Automatic local MongoDB fallback if Atlas connection fails

## Tech Stack

### Frontend & Admin
- React 18
- Vite (build tool)
- Tailwind CSS (styling)
- Lucide React (icons)
- Framer Motion (animations)
- React Helmet (head management)

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- Morgan (logging)
- CORS (cross-origin support)
- Multer (file uploads)
- Nodemon (dev hot-reload)

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/upfront.git
cd upfront
```

2. **Install dependencies**
```bash
npm install
```

This will install dependencies for all workspaces (frontend, backend, admin).

3. **Configure environment variables**

Copy example files and update with your values:

**Backend** (`backend/.env`):
```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env`:
```env
PORT=5001
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/upfront_local
# For MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
FRONTEND_URL=http://localhost:5176
ADMIN_URL=http://localhost:5175
```

**Frontend** (`frontend/.env`):
```bash
cp frontend/.env.example frontend/.env
```

**Admin** (`admin/.env`):
```bash
cp admin/.env.example admin/.env
```

4. **Start MongoDB** (if using local)
```bash
# Windows
mongod

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### Development

Start all services concurrently:

```bash
npm run dev
```

Or start individual services:

```bash
# Frontend only
npm run dev:frontend

# Backend only
npm run dev:backend

# Admin only
npm run dev:admin
```

Services will be available at:
- **Frontend**: http://localhost:5176
- **Admin**: http://localhost:5175
- **Backend API**: http://localhost:5001/api

## Available Scripts

### Root Level
- `npm run dev` - Start all services (frontend, backend, admin)
- `npm run dev:frontend` - Start frontend
- `npm run dev:backend` - Start backend
- `npm run dev:admin` - Start admin panel
- `npm run build` - Build frontend and admin for production
- `npm run start` - Start backend in production mode

### Backend (`backend/`)
- `npm run dev` - Start with hot-reload (nodemon)
- `npm run start` - Start in production

### Frontend (`frontend/`)
- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Admin (`admin/`)
- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## API Endpoints

### Portfolio
- `GET /api/portfolio` - Get all portfolio items
- `POST /api/portfolio` - Create portfolio item
- `PUT /api/portfolio/:id` - Update portfolio item
- `DELETE /api/portfolio/:id` - Delete portfolio item

### Contacts
- `GET /api/contacts` - Get all contacts
- `POST /api/contacts` - Create contact
- `DELETE /api/contacts/:id` - Delete contact

## Environment Variables

### Backend
| Variable | Default | Description |
|----------|---------|-------------|
| PORT | 5000 | Server port |
| NODE_ENV | development | Environment mode |
| MONGO_URI | - | MongoDB connection string |
| FRONTEND_URL | http://localhost:5176 | Frontend URL for CORS |
| ADMIN_URL | http://localhost:5175 | Admin URL for CORS |

### Frontend & Admin
| Variable | Default | Description |
|----------|---------|-------------|
| VITE_API_URL | http://localhost:5001/api | Backend API base URL |

## Database

### Local MongoDB
The app automatically creates a local database fallback if Atlas connection fails.

### MongoDB Atlas
To use MongoDB Atlas:
1. Create a cluster at https://www.mongodb.com/cloud/atlas
2. Create a database user and get connection string
3. Allow your IP in Network Access
4. Update `MONGO_URI` in `backend/.env`

## Troubleshooting

### Port Already in Use
```bash
# Kill all Node processes
taskkill /F /IM node.exe

# Or find and stop specific process
Get-NetTCPConnection -LocalPort 5001 -State Listen | Select-Object -ExpandProperty OwningProcess | ForEach-Object { Stop-Process -Id $_ -Force }
```

### MongoDB Connection Failed
- Ensure MongoDB is running locally, or
- Check MongoDB Atlas credentials in `.env`
- Verify IP whitelist in Atlas Network Access

### API Connection Issues
- Check that backend is running on port 5001
- Verify `VITE_API_URL` in frontend/admin `.env`
- Check browser console for CORS errors

## Contributing

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit changes (`git commit -m 'Add AmazingFeature'`)
3. Push to branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions, please open an issue on GitHub.

---

**Happy coding!** 🚀
