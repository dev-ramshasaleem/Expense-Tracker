import { Request, Response } from "express";
import prisma from "../config/prisma.js";


export const createIncome = async (
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
source,
  date,
} = req.body;


const income = await prisma.income.create({
  data: {
    title,
    amount,
    source,
    date: new Date(date),
    userId,
  },
});

    res.status(201).json({
  success: true,
  message: "Income created successfully",
  data: income,
});


  } catch(error){
     console.error("Create Income Error:", error);

    res.status(500).json({
      message:"Server error"
    });

  }

};
export const getIncome = async (req: Request, res: Response) => {
    
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 10;

const source = req.query.source as string;
const search = req.query.search as string;
const minAmount = Number(req.query.minAmount);
const maxAmount = Number(req.query.maxAmount);
const startDate = req.query.startDate as string;
const endDate = req.query.endDate as string;
const sortBy = (req.query.sortBy as string) || "date";
const order = (req.query.order as "asc" | "desc") || "desc";

const skip = (page - 1) * limit;

const where: any = {
  userId: req.user.id,
};

// Category filter
if (source) {
  where.source = source;
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
    const income = await prisma.income.findMany({
  where,
  skip,
  take: limit,
  orderBy: {
    [sortBy]: order,
  },
});
   const totalIncome = await prisma.income.count({
  where,
});

   return res.status(200).json({
  success: true,
  page,
  limit,
  totalIncome,
  totalPages: Math.ceil(totalIncome / limit),
  income,
});
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getIncomeById = async (req: Request <{ id: string }>, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const { id } = req.params;

    const income = await prisma.income.findFirst({
      where: {
        id,
        userId: req.user.id,
      },
    });

    if (!income) {
      return res.status(404).json({
        message: "Income not found",
      });
    }

    return res.status(200).json({
      success: true,
      income,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};

export const updateIncome = async (
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
    const { title, amount, source, date } = req.body;

    const existingIncome = await prisma.income.findFirst({
      where: {
        id,
        userId: req.user.id,
      },
    });

    if (!existingIncome) {
      return res.status(404).json({
        message: "Income not found",
      });
    }

    const updatedIncome = await prisma.income.update({
      where: {
        id,
      },
      data: {
        title,
        amount,
        source,
        date: new Date(date),
      },
    });

    return res.status(200).json({
      message: "Income updated successfully",
      income: updatedIncome,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};


export const deleteIncome = async (
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

    const income = await prisma.income.findFirst({
      where: {
        id,
        userId: req.user.id,
      },
    });

    if (!income) {
      return res.status(404).json({
        message: "Income not found",
      });
    }

    await prisma.income.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({
      message: "Income deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};