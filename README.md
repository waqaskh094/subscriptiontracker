# Subscription Tracker API

A **production-ready Node.js backend API** for managing user subscriptions — built as a hands-on learning project by following the [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) tutorial.

---

## 📋 Table of Contents

- [📖 Introduction](#-introduction)
- [⚙️ Tech Stack](#️-tech-stack)
- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
  - [📦 Prerequisites](#-prerequisites)
  - [🔗 Clone the Repository](#-clone-the-repository)
  - [📥 Install Dependencies](#-install-dependencies)
  - [🗝️ Set Up Environment Variables](#️-set-up-environment-variables)
  - [▶️ Run the Project](#️-run-the-project)
- [🔑 Useful Links](#-useful-links)
- [🙌 Credits](#-credits)

---

## 📖 Introduction

This project demonstrates how to build a **Subscription Management System API** using modern Node.js practices.  
It handles real-world features like user authentication, subscriptions, rate limiting, bot protection, global error handling, email reminders, and more.

I built this project step-by-step to practice **API architecture**, **security**, and **database integration** — a solid foundation for real production backends.

---

## ⚙️ Tech Stack

- **Node.js** — Server-side JavaScript runtime
- **Express.js** — Minimal and flexible Node.js web application framework
- **MongoDB & Mongoose** — NoSQL database and object modeling
- **JWT Authentication** — Secure login and authorization
- **Arcjet** — Bot protection and advanced rate limiting
- **Upstash** — Email workflows and reminders
- **Nodemailer** — Sending transactional emails

---

## ✨ Features

✅ **Advanced Rate Limiting & Bot Protection** — Secure your API endpoints with Arcjet.  
✅ **Robust Database Modeling** — User and subscription models with MongoDB and Mongoose.  
✅ **JWT Authentication** — Manage users securely with login, registration, and CRUD operations.  
✅ **Global Error Handling** — Input validation, reusable error handlers, and middleware.  
✅ **Logging & Debugging** — Improve monitoring and maintenance.  
✅ **Automated Email Reminders** — Schedule smart email notifications with Upstash.  
✅ **Scalable Architecture** — Organized file structure for easy maintenance and expansion.

---

## 🚀 Quick Start

### 📦 Prerequisites

Make sure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

---

### 🔗 Clone the Repository

```bash
git clone https://github.com/waqaskh094/subscriptiontracker.git
cd subscriptiontracker
```

---

### 📥 Install Dependencies

```bash
npm install
```

---

### 🗝️ Set Up Environment Variables

Create a `.env` file in the root folder and add the following keys:

```env
# Server
PORT=5500
NODE_ENV=development
SERVER_URL=http://localhost:5500

# Database
DB_URI=

# JWT Authentication
JWT_SECRET=
JWT_EXPIRES_IN=1d

# Arcjet
ARCJET_KEY=
ARCJET_ENV=development

# Upstash
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

# Nodemailer
EMAIL_PASSWORD=
```

> ⚠️ **Note:** Never commit your `.env` file to GitHub — your `.gitignore` should already exclude it.

---

### ▶️ Run the Project

```bash
npm run dev
```

Your API will be running on **[http://localhost:5500](http://localhost:5500)** — test it with Postman, Insomnia, or any HTTP client.

---

## 🔑 Useful Links

- **Arcjet:** [Bot protection & rate limiting](https://launch.arcjet.com/4g2R2e4)  
- **Upstash:** [Email workflows](https://bit.ly/42ealiN)  
- **MongoDB:** [NoSQL database](https://www.mongodb.com/)  
- **JavaScript Mastery:** [Tutorial Channel](https://www.youtube.com/@javascriptmastery)

---

## 🙌 Credits

- This project was built by following the [JavaScript Mastery Subscription Tracker API](https://www.youtube.com/@javascriptmastery) tutorial.
- All tutorial content and learning resources are owned by the JSMastery team.
- This repo is for **educational purposes** to showcase my understanding of building a secure, production-ready Node.js API.

---

**🚀 Happy Coding!**  
_Connect with me on [GitHub](https://github.com/waqaskh094)_ , [LinkedIn](www.linkedin.com/in/waqas-khalid-62b431305)
