import { z, ZodType } from 'zod';

export const chatGenerateSchema = z.object({
  text: z.string(),
});

export type ChatGenerateSchema = z.infer<typeof chatGenerateSchema>;
