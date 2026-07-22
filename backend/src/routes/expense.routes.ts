import { Router } from "express";
import { createExpense, deleteExpense, getExpenseById, getExpenses, updateExpense } from "../controllers/expense.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createExpenseSchema } from "../validation/expense.validation.js";
import { validate } from "../middleware/validate.middleware.js";
const router = Router();

router.get("/", authMiddleware, getExpenses,);
router.get("/:id", authMiddleware, getExpenseById);
router.put("/:id", authMiddleware, updateExpense);
router.delete("/:id", authMiddleware, deleteExpense);
router.post( "/",authMiddleware, validate(createExpenseSchema), createExpense);

export default router;