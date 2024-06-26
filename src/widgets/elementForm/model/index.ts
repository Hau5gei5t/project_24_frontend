import { z } from "zod";

export const ElementSchema = z.object({
  type: z.enum(["text", "radiogroup", "rating"]),
  inputType: z.enum(["text", "number", "range"]).optional(),
  rateType: z.enum(["labels", "stars", "smileys"]).optional(),
  choices: z.array(z.string()).optional(),
  name: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  isRequired: z.boolean().optional(),
  placeholder: z.string().optional(),
});

export type ElementModel = z.infer<typeof ElementSchema>;


