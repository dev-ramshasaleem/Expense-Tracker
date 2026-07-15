import { z } from "zod";

export const createExpenseSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long"),

  amount: z
    .number()
    .positive("Amount must be greater than 0"),

  category: z
    .string()
    .min(2, "Category is required"),

  description: z
    .string()
    .optional(),

  date: z
    .string()
    .datetime("Invalid date format"),
});