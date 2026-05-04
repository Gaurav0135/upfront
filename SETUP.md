# GitHub Upload Checklist & Setup

## Pre-Upload Verification

Before pushing to GitHub, verify the following:

### ✅ Environment Files
- [ ] `.env` files are listed in `.gitignore` (they are!)
- [ ] `.env.example` files exist in each workspace
- [ ] No sensitive credentials in example files

### ✅ Ignored Files
- [ ] `node_modules/` is ignored
- [ ] `dist/` and `build/` are ignored  
- [ ] `.DS_Store`, `Thumbs.db` are ignored
- [ ] IDE files (`.vscode`, `.idea`) are ignored
- [ ] Test files and logs are ignored

### ✅ Documentation
- [ ] README.md is comprehensive
- [ ] SETUP.md (this file) exists
- [ ] LICENSE file exists
- [ ] .gitattributes for line endings

### ✅ Configuration
- [ ] `.gitignore` is properly configured
- [ ] `.gitattributes` ensures consistent line endings
- [ ] All `.env.example` files are up-to-date

## First-Time Setup After Clone

1. **Install dependencies across all workspaces**
   ```bash
   npm install
   ```

2. **Setup environment files**
   ```bash
   # Backend
   cp backend/.env.example backend/.env
   
   # Frontend
   cp frontend/.env.example frontend/.env
   
   # Admin
   cp admin/.env.example admin/.env
   ```

3. **Update environment variables** (backend/.env)
   - Set `MONGO_URI` for your local or Atlas database
   - Adjust ports if needed (default: 5001 for backend, 5175-5176 for UIs)

4. **Start MongoDB** (if using local)
   ```bash
   # Windows - open separate terminal
   mongod
   
   # macOS
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   ```

5. **Start development servers**
   ```bash
   npm run dev
   ```

   This will start:
   - Backend on http://localhost:5001
   - Frontend on http://localhost:5176
   - Admin panel on http://localhost:5175

## Deploying to GitHub

### Initial Upload
```bash
git add .
git commit -m "Initial commit: Upfront full-stack application"
git remote add origin https://github.com/yourusername/upfront.git
git branch -M main
git push -u origin main
```

### After Initial Upload
```bash
# Make changes
git add .
git commit -m "Your commit message"
git push
```

## Security Notes

**DO NOT COMMIT:**
- `.env` files (they're ignored)
- API keys or credentials
- Private database URLs
- Sensitive configuration

**These are safely ignored:**
- `.env` - Your actual credentials
- `node_modules/` - Dependencies
- `dist/` - Build outputs
- `.DS_Store` - OS files

## Environment Setup Details

### Backend (.env)
```
PORT=5001                    # Server port
NODE_ENV=development         # Environment
MONGO_URI=...               # Database connection (NEVER commit this!)
FRONTEND_URL=...            # Frontend CORS URL
ADMIN_URL=...               # Admin CORS URL
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5001/api
```

### Admin (.env)
```
VITE_API_URL=http://localhost:5001/api
```

## MongoDB Setup

### Local Development
No setup needed - app will use local fallback

### MongoDB Atlas (Production)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Create a database user
4. Copy connection string
5. Update `MONGO_URI` in `backend/.env`:
   ```
   mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/upfront?retryWrites=true&w=majority
   ```

## Troubleshooting Setup

### Port conflicts
```bash
# Find processes on port 5001
Get-NetTCPConnection -LocalPort 5001 -State Listen

# Kill them
taskkill /F /IM node.exe
```

### MongoDB not found
- Ensure MongoDB is installed and running
- Check if it's listening on port 27017
- Or use MongoDB Atlas instead (no local setup needed)

### npm install fails
```bash
# Clear npm cache
npm cache clean --force
npm install
```

## Next Steps

1. Update GitHub repository settings to add description/topics
2. Add badges to README (build status, license, etc.)
3. Set up branch protection rules
4. Configure GitHub Actions for CI/CD (optional)
5. Create GitHub Issues/Discussions

## Support

For detailed information, see [README.md](README.md)
