import { Router } from "express";
 
import { createBudget, getCurrentBudget, updateBudget } from "../controllers/budget.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, createBudget);
router.get("/current", authMiddleware, getCurrentBudget);
router.put("/:id", authMiddleware, updateBudget);

export default router;