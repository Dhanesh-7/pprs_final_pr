# 🏛️ Public Problem Reporting System

A full-stack web application that enables citizens to report municipal issues online while allowing administrators to efficiently manage, track, and resolve complaints.

---

## 📌 Features

### 👤 Citizen Features

* Submit complaints through a simple 4-step form
* Upload images as evidence
* Track complaint status using a unique complaint number
* View complaint progress in real time
* Responsive design for desktop and mobile devices

### 🛠️ Admin Features

* Secure administrator login using JWT authentication
* Dashboard with complaint statistics and charts
* View and manage all complaints
* Filter complaints by category, priority, and status
* Update complaint status
* Assign priorities
* Full-screen Google Maps view of complaint locations
* Image management using Cloudinary
* Email notifications for complaint updates

---

# 🚀 Quick Start

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/public-problem-reporting-system.git
cd public-problem-reporting-system
```

---

## 2️⃣ Setup the Server

```bash
cd server
npm install
cp .env.example .env
```

Fill in your environment variables inside **server/.env**.

Seed the database:

```bash
node seed.js
```

Start the development server:

```bash
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

## 3️⃣ Setup the Client

```bash
cd client
npm install
cp .env.example .env
```

Fill in your environment variables inside **client/.env**.

Start the React application:

```bash
npm run dev
```

Client runs on:

```
http://localhost:5173
```

---

# ⚙️ Environment Variables

## Server (.env)

```env
PORT=5000

MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/municipal

JWT_SECRET=your_long_random_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your_gmail_app_password

CLIENT_URL=http://localhost:5173
```

---

## Client (.env)

```env
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_MAPS_KEY=your_google_maps_key
```

---

# 👨‍💼 Default Admin Account

After running:

```bash
node seed.js
```

Use the following credentials:

| Field    | Value                                             |
| -------- | ------------------------------------------------- |
| URL      | http://localhost:5173/admin/login                 |
| Email    | [admin@municipal.gov](mailto:admin@municipal.gov) |
| Password | Admin@123                                         |

---

# 📄 Application Pages

| Route                   | Description               |
| ----------------------- | ------------------------- |
| `/`                     | Home Page                 |
| `/report`               | Submit Complaint          |
| `/track/:no`            | Track Complaint           |
| `/admin/login`          | Admin Login               |
| `/admin/dashboard`      | Dashboard with Analytics  |
| `/admin/complaints`     | Complaint Management      |
| `/admin/complaints/:id` | Complaint Details         |
| `/admin/map`            | Full-screen Complaint Map |

---

# 🛠️ Tech Stack

### Frontend

* React 18
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT (JSON Web Tokens)

### File Storage

* Cloudinary

### Maps

* Google Maps API

### Email Service

* Nodemailer (Gmail SMTP)

---

# 📁 Project Structure

```
public-problem-reporting-system/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── uploads/
│   ├── seed.js
│   └── package.json
│
└── README.md
```

---

# 🔒 Security Features

* JWT Authentication
* Protected Admin Routes
* Environment Variable Configuration
* Secure Password Hashing
* Image Upload Validation
* Server-side Input Validation

---

# 📸 Screenshots

You can add screenshots here after deployment.

Example:

```
screenshots/
├── home.png
├── report-form.png
├── tracking.png
├── dashboard.png
├── complaints.png
└── map.png
```

---

# 📦 Build for Production

### Client

```bash
npm run build
```

### Server

```bash
npm start
```

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Dhanesh**

Built with ❤️ using React, Node.js, Express, MongoDB, and Tailwind CSS.
