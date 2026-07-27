import { Request, Response } from "express";
import prisma from "../config/prisma.js";

export const getReport = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const userId = req.user.id;

    const income = await prisma.income.aggregate({
      where: {
        userId,
      },
      _sum: {
        amount: true,
      },
    });

    const expense = await prisma.expense.aggregate({
      where: {
        userId,
      },
      _sum: {
        amount: true,
      },
    });

    const totalIncome = income._sum.amount ?? 0;
    const totalExpense = expense._sum.amount ?? 0;
    const savings = totalIncome - totalExpense;
const categoryBreakdown = await prisma.expense.groupBy({
  by: ["category"],
  where: {
    userId,
  },
  _sum: {
    amount: true,
  },
  orderBy: {
    _sum: {
      amount: "desc",
    },
  },
});
const highestCategory =
  categoryBreakdown.length > 0
    ? categoryBreakdown[0].category
    : "No expenses";
    const totalTransactions = await prisma.expense.count({
  where: {
    userId,
  },
});
const averageExpense =
  totalTransactions > 0
    ? totalExpense / totalTransactions
    : 0;

    res.status(200).json({
  success: true,
  summary: {
    totalIncome,
    totalExpense,
    savings,
  },
  totalTransactions,
  averageExpense,
  highestCategory,
  categoryBreakdown,
});
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};