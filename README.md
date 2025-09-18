# Personal Finance WebApp

A full-stack personal finance management application built with **Node.js**, **Express**, **React**, and **Tailwind CSS**.  
The backend uses **Mongoose** with **MongoDB Atlas** for database management.

---

## 🚀 Features
- User authentication (JWT-based)
- Add, edit, and delete income/expenses
- Dashboard with financial summary
- Responsive UI with Tailwind CSS
- MongoDB Atlas integration via Mongoose

---

## 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (via Mongoose)
- **Authentication:** JWT

---

## ⚙️ Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/iamhimanshusharma/personal-finance-webapp.git
cd personal-finance-webapp
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:

```env
PORT=5000
DB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/personal_finance
JWT_SECRET=your_jwt_secret
```

> Replace `<username>` and `<password>` with your MongoDB Atlas credentials.

Run backend server:
```bash
npm run dev   # or npm start
```

---

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
```

Create a `.env` file inside the `frontend/` folder:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

Run frontend app:
```bash
npm run dev
```

---

## 🗄️ Database Setup (MongoDB Atlas with Mongoose)

1. Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a free cluster.
3. Add a database user & whitelist your IP.
4. Copy your connection string (example):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/personal_finance
   ```
5. Paste it into the `DB_URI` variable in your `backend/.env` file.

The backend connects to Atlas via **Mongoose** automatically.

---

## ▶️ Running the Project

1. Start the backend (from `/backend`):
   ```bash
   npm run dev
   ```
   Backend runs on: `http://localhost:5000`

2. Start the frontend (from `/frontend`):
   ```bash
   npm start
   ```
   Frontend runs on: `http://localhost:3000`

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
Contributions are welcome!  
- Fork the repo  
- Create a new branch (`feature/your-feature`)  
- Commit your changes  
- Open a Pull Request  

---

## 📜 License
This project is licensed under the **MIT License**.

---
