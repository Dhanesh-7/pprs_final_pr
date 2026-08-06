# 🏛️ Public Problem Reporting System (PPRS) - Municipal Board

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-4.22-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Google Gemini](https://img.shields.io/badge/AI-Google_Gemini-8E75B2?style=for-the-badge&logo=google-gemini&logoColor=white)
![Render](https://img.shields.io/badge/Deployment-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

A full-stack, enterprise-grade civic management portal that empowers citizens to report local municipal issues (potholes, streetlights, garbage, water leakage, drainage) with real-time geolocation tagging, photo evidence, live tracking, and an interactive AI Assistant (*Municipal Buddy*). 

Includes a complete **Administrative Dashboard** featuring data analytics, automated department routing, resolution tracking, interactive heatmaps, and automated email notifications.

---

## ✨ Key Features

### 👥 Citizen Portal
- 📝 **Multi-Step Complaint Submission**: Intuitive 4-step wizard with category selection, description validation, photo uploads, and geolocation mapping.
- 📍 **Interactive Location Tagging**: GPS-assisted automatic geolocation and Leaflet interactive map picker.
- 🔍 **Real-Time Tracking**: Instant complaint lookup using unique complaint tracking IDs (`MUN-YYYY-XXXXX`).
- 🤖 **Municipal Buddy AI Assistant**: Built-in chatbot powered by Google Gemini AI SDK for conversational reporting, tracking assistance, and civic guidance.
- 📱 **Responsive & Glassmorphism Design**: Seamless experience across mobile, tablet, and desktop devices.

### 🛠️ Administrative & Departmental Dashboard
- 🔐 **Secure Role-Based Access**: Role-based access control (SuperAdmin, Supervisor, Department Officer) secured via JSON Web Tokens (JWT) and BCrypt password hashing.
- 📊 **Real-Time Analytics & Charts**: Interactive visualization of complaint volumes, resolution rates, and departmental breakdown using Recharts.
- 🗺️ **Full-Screen Interactive Map View**: Geolocation plot of all active municipal complaints with status badges and quick filters.
- 🔄 **Complaint Lifecycle Management**: Update statuses (`Submitted` ➔ `Under Review` ➔ `Assigned` ➔ `In Progress` ➔ `Resolved` / `Rejected`), attach resolution proof photos, and add public notes.
- 📧 **Automated Email Notifications**: Nodemailer SMTP integration automatically sending HTML status updates to citizens.

---

## 🏗️ Architecture & Tech Stack

```
   ┌───────────────────────────────────────────────────────────┐
   │                    Client (React 18 + Vite)                │
   │      Tailwind CSS  │  Recharts  │  Leaflet  │  Axios       │
   └─────────────────────────────┬─────────────────────────────┘
                                 │ REST API / JSON
   ┌─────────────────────────────▼─────────────────────────────┐
   │                   Server (Node.js + Express)               │
   │    JWT Auth │ Multer Storage │ Nodemailer │ CORS Security  │
   └───────┬─────────────────────┬─────────────────────┬───────┘
           │                     │                     │
 ┌─────────▼─────────┐ ┌─────────▼─────────┐ ┌─────────▼─────────┐
 │   MongoDB Atlas   │ │  Cloudinary API   │ │ Google Gemini AI  │
 │ (Mongoose Models) │ │ (Media Host/CDN)  │ │ (Chatbot Engine)  │
 └───────────────────┘ └───────────────────┘ └───────────────────┘
```

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | React 18, Vite, Tailwind CSS | High-performance SPA with fast HMR |
| **State & Router** | React Context API, React Router DOM v6 | Global auth state management and SPA routing |
| **Maps & Data** | Leaflet, React-Leaflet, Recharts | Interactive map UI and analytics dashboard |
| **Backend API** | Node.js, Express.js | Modular REST API with middleware architecture |
| **Database** | MongoDB Atlas, Mongoose | Schema validation, indexes, geospatial coordinates |
| **AI Integration** | `@google/generative-ai` (Gemini 1.5) | Conversational AI assistant with intent parsing |
| **Media Host** | Cloudinary API | Cloud storage and image optimization |
| **Email Service** | Nodemailer (Gmail / Custom SMTP) | HTML email template delivery |

---

## 📁 Repository Structure

```
pprs_final_pr/
├── client/                     # Frontend React (Vite) Application
│   ├── src/
│   │   ├── components/         # Reusable UI (Chatbot, Maps, Timelines, Badges)
│   │   ├── context/            # AuthContext & Global state
│   │   ├── pages/              # Citizen & Admin pages
│   │   ├── utils/              # Axios API client & helpers
│   │   ├── App.jsx             # Main router & routes
│   │   └── main.jsx            # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Backend Node.js / Express API
│   ├── controllers/            # Admin, Complaint & Chat controllers
│   ├── middleware/             # Auth JWT protection & Multer upload middleware
│   ├── models/                 # Mongoose schemas (Admin, Complaint)
│   ├── routes/                 # Express API routes (/api/complaints, /api/admin, /api/chat)
│   ├── utils/                  # Cloudinary, Mailer & ID generator utilities
│   ├── index.js                # Server entry point & static SPA server
│   ├── seed.js                 # Seed script for initial admin & test data
│   └── package.json
│
├── render.yaml                 # Render Blueprint automated deployment config
├── package.json                # Root build & lifecycle scripts
└── README.md
```

---

## ⚡ Quick Start (Local Setup)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Dhanesh-7/pprs_final_pr.git
cd pprs_final_pr
```

### 2️⃣ Configure Environment Variables

Create `.env` inside the `server/` directory:

```ini
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_jwt_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
GEMINI_API_KEY=your_google_gemini_api_key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
CLIENT_URL=http://localhost:5173
```

Create `.env` inside the `client/` directory:

```ini
VITE_API_URL=http://localhost:5000
```

### 3️⃣ Install Dependencies & Run

#### **Option A: Full Application (Root Command)**
```bash
# Install dependencies for both client & server and build frontend
npm run build

# Start the server (serves both API & Frontend)
npm start
```
Open **`http://localhost:5000`** in your browser.

#### **Option B: Development Mode (Separate Terminals)**

- **Terminal 1 (Backend)**:
  ```bash
  cd server
  npm run dev
  ```
- **Terminal 2 (Frontend)**:
  ```bash
  cd client
  npm run dev
  ```
Open **`http://localhost:5173`** in your browser.

---

## 👨‍💼 Seed Test Admin Account

To seed default categories and create an initial administrator account:

```bash
cd server
node seed.js
```

| Field | Credentials |
| :--- | :--- |
| **Login URL** | `/admin/login` |
| **Email** | `admin@municipal.gov` |
| **Password** | `Admin@123` |

---


## 👨‍💻 Author

**Dhanesh**  
*Full-Stack Software Engineer*  
- GitHub: [@Dhanesh-7](https://github.com/Dhanesh-7)
