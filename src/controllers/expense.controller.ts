import { Request, Response } from "express";

export const getExpenses = (
    req: Request, res: Response) => {
        res.json({message: "Get Expenses"})
    }