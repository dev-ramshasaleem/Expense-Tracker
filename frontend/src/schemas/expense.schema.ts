import { z } from "zod";

export const expenseSchema = z.object({
  title: z.string().min(1, "Title is required"),
amount: z.number().positive("Amount is required"),  
category: z.string().min(1, "Category is required"),
  date: z.string().min(1, "Date is required"),
  description: z.string().optional(),
});

export type ExpenseFormData = z.infer<typeof expenseSchema>;