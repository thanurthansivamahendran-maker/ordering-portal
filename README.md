# ordering-portal
📦 Ordering Portal (Full Stack CRUD Application)
📌 Overview

This is a simple full-stack Ordering Portal built as part of an evaluation task.
The application demonstrates a basic CRUD workflow for managing orders using a React frontend and an Express.js backend with TypeScript.

⚙️ Tech Stack

Frontend
React (Vite)
JavaScript (JSX)
CSS (inline styling)

Backend
Node.js
Express.js
TypeScript
📁 Project Structure

ordering-portal/
│
├── backend/
│   ├── src/
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
├── .gitignore
└── README.md

🚀 Features
🖥 Backend (API)
Create a new order
Retrieve all orders
Update an existing order
Delete an order
REST API built with Express + TypeScript

🌐 Frontend (UI)
Add new orders (customer, item, quantity)
View all orders in a list
Edit existing orders
Delete orders
Automatically updates UI after actions

🔌 API Endpoints

Base URL:

http://localhost:5000
Orders
Method	Endpoint	Description
GET	    /orders	     Get all orders
POST	/orders     Create a new order
PUT	    /orders/:id	  Update an order
DELETE	/orders/:id	 Delete an order


▶️ How to Run the Project
1. Clone Repository
git clone https://github.com/your-username/ordering-portal.git
cd ordering-portal
2. Run Backend
cd backend
npm install
npx ts-node src/server.ts

Backend runs at:

http://localhost:5000
3. Run Frontend
cd frontend
npm install
npm run dev

Frontend runs at:

http://localhost:5173
🔗 Frontend–Backend Connection

The frontend communicates with the backend using:

http://localhost:5000/orders

Make sure the backend is running before using the frontend.

🧠 Key Concepts Demonstrated
Full-stack CRUD application
React state management (useState, useEffect)
REST API development with Express
TypeScript backend setup
Frontend-backend integration
Git version control workflow

📌 Notes
Data is stored in-memory (no database used)
Restarting the backend will reset all orders
Ensure CORS is enabled for frontend communication
Project follows basic separation of frontend and backend
👨‍💻 Author

Thanurthan Sivamahendran

📊 Status

✔ Backend completed
✔ Frontend completed
✔ CRUD functionality working
✔ GitHub repository ready