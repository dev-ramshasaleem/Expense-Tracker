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
const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 10;

const category = req.query.category as string;
const search = req.query.search as string;
const minAmount = Number(req.query.minAmount);
const maxAmount = Number(req.query.maxAmount);
const startDate = req.query.startDate as string;
const endDate = req.query.endDate as string;

const skip = (page - 1) * limit;

const where: any = {
  userId: req.user.id,
};

// Category filter
if (category) {
  where.category = category;
}

// Amount filter
if (!isNaN(minAmount)) {
  where.amount = {
    ...where.amount,
    gte: minAmount,
  };
}

if (!isNaN(maxAmount)) {
  where.amount = {
    ...where.amount,
    lte: maxAmount,
  };
}

// Date filter
if (startDate) {
  where.date = {
    ...where.date,
    gte: new Date(startDate),
  };
}

if (endDate) {
  where.date = {
    ...where.date,
    lte: new Date(endDate),
  };
}

// Search
if (search) {
  where.OR = [
    {
      title: {
        contains: search,
        mode: "insensitive",
      },
    },
    {
      description: {
        contains: search,
        mode: "insensitive",
      },
    },
  ];
}
    const expenses = await prisma.expense.findMany({
  where,
  skip,
  take: limit,
  orderBy: {
    date: "desc",
  },
});
   const totalExpenses = await prisma.expense.count({
  where,
});

   return res.status(200).json({
  success: true,
  page,
  limit,
  totalExpenses,
  totalPages: Math.ceil(totalExpenses / limit),
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

export const getExpenseById = async (req: Request <{ id: string }>, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const { id } = req.params;

    const expense = await prisma.expense.findFirst({
      where: {
        id,
        userId: req.user.id,
      },
    });

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    return res.status(200).json({
      success: true,
      expense,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};

export const updateExpense = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const { id } = req.params;
    const { title, amount, category, description, date } = req.body;

    const existingExpense = await prisma.expense.findFirst({
      where: {
        id,
        userId: req.user.id,
      },
    });

    if (!existingExpense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    const updatedExpense = await prisma.expense.update({
      where: {
        id,
      },
      data: {
        title,
        amount,
        category,
        description,
        date: new Date(date),
      },
    });

    return res.status(200).json({
      message: "Expense updated successfully",
      expense: updatedExpense,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};


export const deleteExpense = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const { id } = req.params;

    const expense = await prisma.expense.findFirst({
      where: {
        id,
        userId: req.user.id,
      },
    });

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    await prisma.expense.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({
      message: "Expense deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};