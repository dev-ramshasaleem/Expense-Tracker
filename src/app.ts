import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import expenseRoutes from "./routes/expense.routes";
import { errorMiddleware } from "./middleware/error.middleware";
import authRoutes from "./routes/auth.routes";
import { authMiddleware } from "./middleware/auth.middleware";
import userRoutes from "./routes/user.routes";


dotenv.config()


const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
app.use("/api/auth", authRoutes) //public routes
app.use("/api/users", userRoutes);
app.use("/api/expenses", expenseRoutes, authMiddleware)  //protected routes
app.use(errorMiddleware)  //error handling middleware


app.get('/', (req, res)=>{
    res.send("Expense Tracker API")
})



export default app