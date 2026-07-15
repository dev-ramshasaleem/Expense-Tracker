import { Request, Response } from "express";
import prisma from "../config/prisma.js";

 

export const createExpense = async (
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

    const {
  title,
  amount,
  category,
  description,
  date,
} = req.body;

const expense = await prisma.expense.create({
  data: {
    title,
    amount,
    category,
    description,
    date: new Date(date),
    userId,
  },
});


    res.status(201).json({
      message:"Expense created successfully",
      expense
    });


  } catch(error){
     console.error("Create Expense Error:", error);

    res.status(500).json({
      message:"Server error"
    });

  }

};
export const getExpenses = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const expenses = await prisma.expense.findMany({
      where: {
        userId: req.user.id,
      },
      orderBy: {
        date: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      count: expenses.length,
      expenses,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};