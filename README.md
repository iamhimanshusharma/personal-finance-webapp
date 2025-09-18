# Personal Finance WebApp

A full-stack personal finance management application.  
- **Backend:** Node.js + Express  
- **Frontend:** React  
- **Styling:** Tailwind CSS  

---

## 🚀 Getting Started

### Clone Repository
```bash
git clone https://github.com/iamhimanshusharma/personal-finance-webapp.git
cd personal-finance-webapp
```

---

## ⚙️ Backend Setup (Node.js + Express)

1. Navigate into backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file inside `backend/`:
   ```env
   PORT=5000
   DB_URI=your_database_url
   JWT_SECRET=your_secret
   ```

4. Start server:
   ```bash
   # Development
   npm run dev    # ← Replace with your actual dev script
   # Production
   npm run start  # ← Replace with your actual start script
   ```

By default backend runs on:  
👉 `http://localhost:5000`

---

## 🎨 Frontend Setup (React + Tailwind CSS)

1. Open a new terminal, go to frontend:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file inside `frontend/`:
   ```env
   REACT_APP_API_BASE_URL=http://localhost:5000/api
   ```

4. Start frontend:
   ```bash
   npm start   # ← Replace with your actual start script
   ```

By default frontend runs on:  
👉 `http://localhost:3000`

---

## 📂 Folder Structure

```
personal-finance-webapp/
├── backend/   # Node.js + Express server
├── frontend/  # React + Tailwind CSS client
└── README.md
```

---

## 📜 Scripts

### Backend (`backend/package.json`)
| Script | Description |
|--------|-------------|
| `dev` → *replace with your actual command* | Run backend in development (e.g., using nodemon) |
| `start` → *replace with your actual command* | Run backend in production |
| `test` → *replace with your actual command* | Run backend tests |

### Frontend (`frontend/package.json`)
| Script | Description |
|--------|-------------|
| `start` → *replace with your actual command* | Run React development server |
| `build` → *replace with your actual command* | Build frontend for production |
| `test` → *replace with your actual command* | Run frontend tests |

---

## 🔧 Troubleshooting
- Ensure backend is running before frontend API calls.  
- Check `.env` variables if connection fails.  
- For CORS issues, configure backend `cors` to allow `http://localhost:3000`.  
- If Tailwind CSS styles don’t apply, verify `tailwind.config.js` and `index.css` are configured properly.  

---

## 🤝 Contributing
1. Fork repo  
2. Create feature branch (`git checkout -b feature/your-feature`)  
3. Commit changes (`git commit -m "Add feature"`)  
4. Push branch (`git push origin feature/your-feature`)  
5. Open Pull Request  

---

## 📜 License
This project is open-source under the MIT License.
