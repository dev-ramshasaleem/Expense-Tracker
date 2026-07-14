import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import expenseRoutes from "./routes/expense.routes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import authRoutes from "./routes/auth.routes.js";
import { authMiddleware } from "./middleware/auth.middleware.js";
import userRoutes from "./routes/user.routes.js";


dotenv.config()
console.log("DATABASE_URL loaded:", !!process.env.DATABASE_URL);
console.log(
  "DATABASE_URL starts with:",
  process.env.DATABASE_URL?.substring(0, 30)
);


const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
app.use("/api/auth", authRoutes) //public routes
app.use("/api/users", userRoutes);
app.use("/api/expenses", authMiddleware, expenseRoutes);  //protected routes
app.use(errorMiddleware)  //error handling middleware


app.get('/', (req, res)=>{
    res.send("Expense Tracker API")
})



export default app