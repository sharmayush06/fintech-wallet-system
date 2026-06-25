💳 Fintech Wallet System

A full-stack digital wallet application built using React, Spring Boot, and MySQL that allows users to securely register, manage wallets, transfer money, and track transaction history.

---

🚀 Features

- 👤 User Registration & Login
- 💼 Automatic Wallet Creation
- 💰 Wallet Balance Management
- 🔄 Peer-to-Peer Money Transfer
- 📜 Transaction History
- 🛡️ Spring Security Integration
- ⚠️ Global Exception Handling
- 🔗 RESTful APIs
- 📱 Responsive React UI

---

🛠️ Tech Stack

Frontend

- React.js
- Tailwind CSS
- Axios
- React Router
- Zustand

Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- Hibernate
- Maven

Database

- MySQL

Tools

- Git
- GitHub
- Postman
- Docker

---

📂 Project Structure

fintech-wallet-system
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   ├── store
│   └── App.jsx
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── model
│   ├── dto
│   ├── exception
│   ├── security
│   ├── config
│   └── WalletApplication.java
│
└── README.md

---

📊 Database Design

Tables

- Users
- Wallets
- Transactions
- Roles
- Audit Logs

Relationships

- One User → One Wallet
- One Wallet → Many Transactions
- One Role → Many Users

---

⚙️ Backend APIs

Authentication

Method| Endpoint
POST| "/api/auth/register"
POST| "/api/auth/login"

Wallet

Method| Endpoint
GET| "/api/wallet/{userId}"
GET| "/api/wallet/{userId}/balance"

Transactions

Method| Endpoint
POST| "/api/transaction/transfer"
GET| "/api/transaction/history/{userId}"

---

🖥️ Frontend Pages

- Home
- Login
- Register
- Dashboard
- Wallet
- Transfer Money
- Transaction History

---

🏗️ Installation

Clone Repository

git clone https://github.com/sharmayush06/fintech-wallet-system.git

Backend

cd backend
mvn clean install
mvn spring-boot:run

Frontend

cd frontend
npm install
npm run dev

---

🗄️ Database Configuration

Create a MySQL database:

CREATE DATABASE fintech;

Update "application.properties"

spring.datasource.url=jdbc:mysql://localhost:3306/fintech
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

---


🔒 Security


- Spring Security
- BCrypt Password Encryption
- Exception Handling

---

📚 What I Learned

- Spring Boot REST API Development
- Spring Security Fundamentals
- Entity Relationships with JPA
- Exception Handling
- Database Design
- React State Management
- API Integration
- Git & GitHub Collaboration
- Debugging Real-World Backend Issues

---

👨‍💻 Author

Ayush Sharma

- GitHub: https://github.com/sharmayush06

---

⭐ If you found this project helpful, consider giving the repository a star!
