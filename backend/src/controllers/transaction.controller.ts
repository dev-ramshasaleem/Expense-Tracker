import { Request, Response } from "express";
import prisma from "../config/prisma.js";

export const getTransactions = async (
  req: Request,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const userId = req.user.id;

    // Fetch expenses
    const expenses = await prisma.expense.findMany({
      where: {
        userId,
      },
      orderBy: {
        date: "desc",
      },
    });

    // Fetch incomes
    const incomes = await prisma.income.findMany({
      where: {
        userId,
      },
      orderBy: {
        date: "desc",
      },
    });

    // Format expenses
    const formattedExpenses = expenses.map((expense) => ({
      id: expense.id,
      title: expense.title,
      amount: expense.amount,
      category: expense.category,
      description: expense.description,
      date: expense.date,
      type: "expense" as const,
    }));

    // Format incomes
    const formattedIncomes = incomes.map((income) => ({
      id: income.id,
      title: income.title,
      amount: income.amount,
      category: "Income",
      description: income.description,
      date: income.date,
      type: "income" as const,
      source: income.source,
    }));

    // Merge & sort by latest date
    const transactions = [
      ...formattedExpenses,
      ...formattedIncomes,
    ].sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    );

    return res.status(200).json({
      success: true,
      count: transactions.length,
      transactions,
    });
  } catch (error) {
    console.error("Get Transactions Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};