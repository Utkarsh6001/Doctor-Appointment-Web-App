<h1 align="center">🩺 Doctor Appointment App</h1>

<p align="center">
A full-stack Doctor Appointment System built with React, Node.js, Express, and MongoDB.
It allows users to register, log in securely, and book doctor appointments through a simple and responsive interface.
</p>

<p align="center">

![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![NodeJS](https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express.js-API-black?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-Authentication-red?style=for-the-badge&logo=jsonwebtokens)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

</p>

---

# 📸 Project Preview

> Add your project screenshots here.

<p align="center">

<img src="screenshots/home.png" width="700">

</p>

---

# ✨ Features

- 👨 User Registration
- 🔐 Secure Login Authentication
- 🪪 JWT Token Authentication
- 🛡 Protected Routes
- 📅 Book Doctor Appointments
- 🌐 REST API Integration
- ⚡ Fast React Frontend
- 💾 MongoDB Database
- 🔄 Client & Server Communication
- 📱 Clean and Responsive UI

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- CSS

## Backend

- Node.js
- Express.js
- JWT
- bcryptjs
- CORS
- dotenv

## Database

- MongoDB
- Mongoose

---

# 📂 Folder Structure

```text
doctor-app/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ └── index.js
│ │
│ └── package.json
│
├── backend/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ ├── server.js
│ └── package.json
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/doctor-app.git
```

---

## Install Frontend

```bash
cd frontend
npm install
npm start
```

---

## Install Backend

```bash
cd backend
npm install
```

---

## Run Backend

```bash
nodemon server.js
```

or

```bash
node server.js
```

---

# ⚙ Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key
```

---

# 🔗 API Routes

## Authentication

```
POST /api/auth/register

POST /api/auth/login
```

## Appointment

```
POST /api/appointments

GET /api/appointments
```

---

# 📖 What I Learned

- Building Full Stack Applications
- React Routing
- JWT Authentication
- Password Hashing using bcrypt
- REST API Development
- MongoDB Integration
- Express.js Backend
- Protected Routes
- Frontend & Backend Communication

---

# 🔒 Security

- Passwords are encrypted using **bcryptjs**
- JWT is used for secure authentication
- Sensitive information is stored inside **.env**
- API communication is handled securely

---

# 🚀 Future Improvements

- 👨‍⚕ Doctor Dashboard
- 👤 Patient Profile
- 📧 Email Notifications
- 💳 Online Payment
- 📅 Appointment Calendar
- ⭐ Doctor Reviews
- 📱 Mobile Responsive Design

---

# 👨‍💻 Author

**Utkarsh Kaushal**

If you like this project, don't forget to ⭐ the repository.
