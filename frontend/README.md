# 💰 Spendo – Expense Tracker (Frontend)

Spendo is a modern and responsive expense tracking application built with **Next.js** and **TypeScript**. It helps users manage their personal finances through an intuitive dashboard, allowing them to track income, expenses, budgets, and financial reports.

---

## ✨ Features

### 🔐 Authentication

* User Login
* User Registration
* Protected Routes
* JWT-based Authentication

### 📊 Dashboard

* Total Balance
* Total Income
* Total Expenses
* Total Savings
* Recent Transactions
* Quick Action Cards

### 💸 Expense Management

* Add New Expense
* View All Expenses
* Expense Categories
* Transaction History

### 💰 Income Management

* Add Income
* View Income History

### 🎯 Budget Management

* Set Monthly Budget
* View Budget Summary
* Remaining Budget Calculation
* Budget Progress Tracking

### 📈 Reports

* Financial Summary
* Expense Breakdown by Category
* Spending Insights
* Download Reports as PDF


---

# 🛠 Tech Stack

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui
* Axios
* Lucide React
* next-themes
* jsPDF
* jspdf-autotable

---

# 📂 Folder Structure

```text
src/
├── app/
│   ├── dashboard/
│   ├── login/
│   ├── register/
│   
│
├── components/
│   ├── dashboard/
│   ├── expenses/
│   ├── income/
│   ├── budget/
│   ├── reports/
│   └── ui/
│
├── lib/
│   └── axios.ts
│
├── hooks/
│
├── utils/
│
└── types/
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/dev-ramshasaleem/Expense-Tracker.git
```

Move into the frontend directory:

```bash
cd Expense-Tracker
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser:

```text
http://localhost:3000
```

---

# ⚙️ Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

---

# 📄 Available Pages

| Route                 | Description        |
| --------------------- | ------------------ |
| `/login`              | User Login         |
| `/register`           | User Registration  |
| `/dashboard`          | Dashboard Overview |
| `/dashboard/expenses` | Expense Management |
| `/dashboard/income`   | Income Management  |
| `/dashboard/budget`   | Budget Management  |
| `/dashboard/reports`  | Financial Reports  |
| `/dashboard/settings` | User Settings      |

---

# 📊 Dashboard Overview

The dashboard provides a quick overview of the user's financial status, including:

* Current Balance
* Total Income
* Total Expenses
* Total Savings
* Recent Transactions
* Quick Actions

---

# 📄 PDF Reports

Users can generate and download professional PDF reports containing:

* Financial Summary
* Expense Breakdown
* Spending Insights
* Report Generation Date

---

# 🎨 UI Design

The application features:

* Responsive Layout
* Glassmorphism Cards
* Modern Dashboard Interface
* Dark & Light Theme Support
* Mobile-Friendly Design
* Clean Typography
* Reusable UI Components

---

# 🔗 Backend

This frontend communicates with the Express.js backend through REST APIs.

The API base URL is configured using:

```env
NEXT_PUBLIC_API_URL
```

---

# 📸 Screenshots

Add screenshots of:

* Login
* Dashboard
* Expenses
* Income
* Budget
* Reports
* Settings

---

# 🚀 Future Improvements

* Interactive Charts
* CSV Export
* Advanced Search & Filters
* Recurring Transactions
* Multi-Currency Support
* Notifications
* Profile Picture Upload

---

# 👩‍💻 Author

**Ramsha Saleem**

GitHub:
https://github.com/dev-ramshasaleem

LinkedIn:
https://www.linkedin.com/in/ramsha-saleem-6aaa29199/

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
