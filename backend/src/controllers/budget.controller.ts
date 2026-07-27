import { Request, Response } from "express";
import prisma from "../config/prisma.js";

export const createBudget = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const { amount, month, year } = req.body;

    const existingBudget = await prisma.budget.findFirst({
      where: {
        userId: req.user.id,
        month,
        year,
      },
    });

    if (existingBudget) {
      res.status(400).json({
        message: "Budget already exists for this month.",
      });
      return;
    }

    const budget = await prisma.budget.create({
      data: {
        amount,
        month,
        year,
        userId: req.user.id,
      },
    });

    res.status(201).json({
      success: true,
      budget,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};


export const getCurrentBudget = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const budget = await prisma.budget.findFirst({
      where: {
        userId: req.user.id,
        month,
        year,
      },
    });

    if (!budget) {
      res.status(404).json({
        message: "No budget found for this month.",
      });
      return;
    }

    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 1);

    const expenses = await prisma.expense.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        userId: req.user.id,
        date: {
          gte: startDate,
          lt: endDate,
        },
      },
    });

    const spent = expenses._sum.amount ?? 0;
    const remaining = budget.amount - spent;
    const percentageUsed =
      budget.amount > 0 ? (spent / budget.amount) * 100 : 0;

    res.status(200).json({
      success: true,
      budget,
      spent,
      remaining,
      percentageUsed,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const updateBudget = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

const id = req.params.id as string;   
 const { amount } = req.body;

    const budget = await prisma.budget.findFirst({
      where: {
        id,
        userId: req.user.id,
      },
    });

    if (!budget) {
      res.status(404).json({
        message: "Budget not found.",
      });
      return;
    }

    const updatedBudget = await prisma.budget.update({
      where: {
        id,
      },
      data: {
        amount,
      },
    });

    res.status(200).json({
      success: true,
      budget: updatedBudget,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};