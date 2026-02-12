# &nbsp;![PricePulse Logo](https://img.icons8.com/fluency/48/orange/price-tag-usd.png) PricePulse - Smart Price Tracker

<div align="center">

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<h3>Fighting Inflation, One Drop at a Time.</h3>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#env-variables">Env Variables</a> •
  <a href="#screenshots">Screenshots</a>
</p>

</div>

---

## 🚀 Overview

**PricePulse** is Sri Lanka's premier price tracking application designed to help smart shoppers save money on electronics. By monitoring real-time price changes on major online stores like **Wasi.lk** and **SimplyTek**, PricePulse ensures you never miss a deal.

Whether you're eyeing a new laptop or the latest smartphone, PricePulse tracks the price 24/7 and sends you an **instant email alert** the moment it drops to your target.

## ✨ Key Features

-   **🔍 Real-Time Tracking**: Automatically monitors product prices from supported e-commerce sites.
-   **📩 Instant Alerts**: Get notified via email immediately when a price drops.
-   **📊 Visual Analytics**: View price history charts to identify trends and the best time to buy.
-   **🔥 Popular Drops**: Explore trending products and recent price drops in the community.
-   **🛡️ Admin Dashboard**: Comprehensive admin tools to manage users, products, and system stats.
-   **📱 Responsive Design**: A beautiful, mobile-friendly interface built with Tailwind CSS.

## 🛠️ Tech Stack

### Frontend
-   **Framework**: React (Vite)
-   **Styling**: Tailwind CSS, PostCSS
-   **Routing**: React Router DOM
-   **State/Http**: Axios, React Hooks
-   **Visualization**: Chart.js, React-Chartjs-2
-   **Utilities**: React Toastify, React Icons, jsPDF

### Backend
-   **Runtime**: Node.js
-   **Framework**: Express.js
-   **Database**: MongoDB (Mongoose)
-   **Scraping**: Puppeteer, Cheerio
-   **Scheduling**: Node-cron
-   **Email**: Nodemailer
-   **Auth**: JWT (JSON Web Tokens), BcryptJS

## ⚡ Getting Started

Follow these steps to set up the project locally.

### Prerequisites
-   **Node.js** (v16 or higher)
-   **MongoDB** (Local instance or Atlas URI)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Tasuntha-Chathunika/PricePulse-Project.git
    cd PricePulse-Project
    ```

2.  **Install Backend Dependencies**
    ```bash
    cd backend
    npm install
    ```

3.  **Install Frontend Dependencies**
    ```bash
    cd ../frontend
    npm install
    ```

### Running the Application

1.  **Start the Backend Server**
    ```bash
    cd backend
    npm start
    # Server runs on http://localhost:5000
    ```

2.  **Start the Frontend Development Server**
    ```bash
    cd frontend
    npm run dev
    # Client runs on http://localhost:5173
    ```

## 🔐 Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/pricepulse
JWT_SECRET=your_jwt_secret_key_here
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
CLIENT_URL=http://localhost:5173
```

## 📸 Screenshots

*(Add your screenshots here)*

| Landing Page | Dashboard |
|:---:|:---:|
| ![Landing Page](/screenshots/screenshots1.png) | ![Dashboard](/screenshots/screenshots2.png) |

| Product Page | Mobile View |
|:---:|:---:|
| ![Product Page](/screenshots/screenshots3.png) | ![Mobile View](/screenshots/screenshots4.png) |

## 🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/Tasuntha-Chathunika">Tasuntha Chathunika</a>
</div>
