# 💰 Spendo – Expense Tracker

Spendo is a full-stack expense tracking application that helps users manage their personal finances by tracking income, expenses, budgets, and financial reports. It provides a clean dashboard, budget management, analytics, and PDF report generation.

---

## 🚀 Features

### 🔐 Authentication
- User registration
- User login
- JWT authentication
- Protected routes

### 💵 Income Management
- Add income
- View all income
- Income history

### 💸 Expense Management
- Add expenses
- View all expenses
- Categorize expenses
- Transaction history

### 📊 Dashboard
- Total Balance
- Total Income
- Total Expenses
- Savings
- Recent Transactions
- Quick Actions

### 🎯 Budget Management
- Set monthly budget
- Update budget
- Budget summary
- Remaining budget calculation

### 📈 Reports
- Income summary
- Expense summary
- Savings summary
- Expense breakdown by category
- Highest spending category
- Average expense
- Total transactions
- Export report as PDF

---

# 🛠 Tech Stack

## Frontend
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Axios
- Lucide React
- jsPDF
- jspdf-autotable

## Backend
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL (Neon)
- JWT Authentication
- bcrypt

---

# 📂 Project Structure

```
Expense-Tracker/

├── client/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── utils/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   ├── validations/
│   ├── prisma/
│   └── config/
│
└── README.md
```

---

# 📦 Installation

## Clone the repository

```bash
git clone https://github.com/dev-ramshasaleem/Expense-Tracker.git
```

## Frontend

```bash
cd client

npm install

npm run dev
```

Runs on:

```
http://localhost:3000
```

---

## Backend

```bash
cd server

npm install

npm run dev
```

Runs on:

```
http://localhost:3001
```

---

# ⚙️ Environment Variables

## Frontend

Create `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

---

## Backend

Create `.env`

```env
DATABASE_URL=your_database_url

JWT_SECRET=your_jwt_secret

PORT=3001
```

---

# 🗄 Database

The project uses **PostgreSQL** with **Prisma ORM**.

Run migrations:

```bash
npx prisma migrate dev
```

Generate Prisma Client:

```bash
npx prisma generate
```

---

# 📡 API Endpoints

## Authentication

```
POST /api/auth/register

POST /api/auth/login
```

---

## Expenses

```
GET /api/expenses

POST /api/expenses

PUT /api/expenses/:id

DELETE /api/expenses/:id
```

---

## Income

```
GET /api/income

POST /api/income

PUT /api/income/:id

DELETE /api/income/:id
```

---

## Budget

```
POST /api/budgets

GET /api/budgets/current

PUT /api/budgets/:id
```

---

## Reports

```
GET /api/reports
```

---

## Profile

```
GET /api/users/profile

PUT /api/users/profile
```

---

# 📄 PDF Export

Users can download a professional PDF report containing:

- Financial Summary
- Category Breakdown
- Insights
- Report Generation Date

---


# 🔒 Security

- JWT Authentication
- Password Hashing with bcrypt
- Protected API Routes
- Prisma ORM
- Input Validation
- Secure Environment Variables

---

# 🔮 Future Improvements

- Charts and Analytics
- CSV Export
- Recurring Transactions
- Multiple Currency Support
- Email Reports
- Notifications
- Profile Picture Upload
- Search & Filters

---

🌐 Live Demo

👉 https://expense-tracker-coral-omega.vercel.app/

---

# 👩‍💻 Author

**Ramsha Saleem**

GitHub:
https://github.com/dev-ramshasaleem

LinkedIn:
https://www.linkedin.com/in/ramsha-saleem-6aaa29199/

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
