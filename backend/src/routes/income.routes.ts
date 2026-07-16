import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { incomeSchema } from "../validation/income.validation.js";
import { createIncome, deleteIncome, getIncome, getIncomeById, updateIncome } from "../controllers/income.controller.js";
import { validate } from "../middleware/validate.middleware.js";

const router = Router()

router.post("/", authMiddleware, validate(incomeSchema), createIncome);

router.get("/", authMiddleware, getIncome);

router.get("/:id", authMiddleware, getIncomeById);

router.put("/:id", authMiddleware, validate(incomeSchema), updateIncome);

router.delete("/:id", authMiddleware, deleteIncome);


export default router;