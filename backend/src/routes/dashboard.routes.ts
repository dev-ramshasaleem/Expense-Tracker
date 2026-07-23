import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { getDashboard, getRecentTransactions } from "../controllers/dashboard.controller.js";

const router = Router()
router.get("/", authMiddleware, getDashboard)
router.get("/recent-transactions", authMiddleware, getRecentTransactions);


export default router