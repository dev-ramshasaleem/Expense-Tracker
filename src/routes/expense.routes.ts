import { Router } from "express";
import { createExpense, getExpenses } from "../controllers/expense.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", authMiddleware, getExpenses);
router.post(
 "/",
authMiddleware,
 createExpense
);


export default router;