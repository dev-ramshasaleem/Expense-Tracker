import { z } from "zod";

export const incomeSchema = z.object({
  title: z.string().min(2),
  amount: z.number().positive(),
  category: z.string(),
  description: z.string().optional(),
  date: z.date(),
});