import { z } from "zod";

export const incomeSchema = z.object({
  title: z.string().min(3),
  amount: z.number().positive(),
  source: z.string().min(2),
  description: z.string().optional(),
  date: z.string(),
});