# MERN Product Store

A full-stack MERN (MongoDB, Express, React, Node.js) CRUD application for managing products, featuring:

- **Backend:** Express.js REST API, MongoDB (Atlas or local), Mongoose
- **Frontend:** React (Vite), Chakra UI, Zustand for state management
- **DevOps:** Docker & Docker Compose for easy local development

---

## Features

- View, create, update, and delete products
- Responsive UI with Chakra UI
- State management with Zustand
- API proxying for smooth frontend-backend integration
- Dockerized for easy setup

---

## Getting Started

### 1. **Clone the repository**

```sh
git clone https://github.com/AbdoSalah22/mern-product-store.git
cd mern-crash-course
```

### 2. **Environment Variables**

Create a `.env` file in the root:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

- For local MongoDB, use: `mongodb://mongo:27017/products`
- For MongoDB Atlas, use your Atlas connection string

---

### 3. **Run with Docker Compose**

Build and start all services (backend, frontend):

```sh
docker-compose up --build
```

- Frontend: [http://localhost:5173](http://localhost:5173) (development mode)
- Backend/API: [http://localhost:5000/api/products](http://localhost:5000/api/products)

**In production, the backend serves the frontend on [http://localhost:5000](http://localhost:5000).**

---

### 4. **Run Locally Without Docker**

#### Backend

```sh
npm install
npm run dev
```

#### Frontend

```sh
cd frontend
npm install
npm run dev
```

---

## Project Structure

```
mern-crash-course/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── vite.config.js
│
├── Dockerfile
├── docker-compose.yml
├── .env
└── package.json
```

---

## Tech Stack

- **Frontend:** React, Vite, Chakra UI, Zustand
- **Backend:** Express.js, Mongoose, MongoDB
- **DevOps:** Docker, Docker Compose

---

## Deployment

- Since backend serves pre-built frontend, you can deploy directly to Render/Railway/Heroku.

---

## Credits

Credits to **Codesistency** on YouTube for creating a crash course project for learning the MERN stack.

---
