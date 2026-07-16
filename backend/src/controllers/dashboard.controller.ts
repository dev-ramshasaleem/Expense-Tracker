import { Request, Response } from "express";
import prisma from "../config/prisma.js";

export const getDashboard = async (
  req: Request,
  res: Response
) => {
    try{
if (!req.user) {
  return res.status(401).json({
    message: "Unauthorized",
  });
}

const userId = req.user.id;

const total = await prisma.expense.aggregate({
  where: {
    userId,
  },
  _sum: {
    amount: true,
  },
});

const transactionCount = await prisma.expense.count({
  where: {
    userId,
  },
});

const highestExpense = await prisma.expense.aggregate({
  where: {
    userId,
  },
  _max: {
    amount: true,
  },
});

const lowestExpense = await prisma.expense.aggregate({
  where: {
    userId,
  },
  _min: {
    amount: true,
  },
});

const averageExpense = await prisma.expense.aggregate({
  where: {
    userId,
  },
  _avg: {
    amount: true,
  },
});
const now = new Date();

const firstDayOfMonth = new Date(
  now.getFullYear(),
  now.getMonth(),
  1
);
const thisMonth = await prisma.expense.aggregate({
  where: {
    userId,
    date: {
      gte: firstDayOfMonth,
    },
  },
  _sum: {
    amount: true,
  },
});

const firstDayLastMonth = new Date(
  now.getFullYear(),
  now.getMonth() - 1,
  1
);

const lastDayLastMonth = new Date(
  now.getFullYear(),
  now.getMonth(),
  0
);

const lastMonth = await prisma.expense.aggregate({
  where: {
    userId,
    date: {
      gte: firstDayLastMonth,
      lte: lastDayLastMonth,
    },
  },
  _sum: {
    amount: true,
  },
});
return res.status(200).json({
  success: true,
  data: {
    totalExpenses: total._sum.amount ?? 0,
    transactionCount,
    highestExpense: highestExpense._max.amount ?? 0,
    lowestExpense: lowestExpense._min.amount ?? 0,
    averageExpense: averageExpense._avg.amount ?? 0,
    thisMonthExpenses: thisMonth._sum.amount ?? 0,
    lastMonthExpenses: lastMonth._sum.amount ?? 0,
  },
});
}catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
}