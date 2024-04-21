import { z } from "zod";

export const PageSchema = z.object({
  name: z.string(),
  // title: z.object({ ru: z.string() }).optional(),
  // description: z.object({ ru: z.string() }).optional(),
  title: z.string().optional(),
  description: z.string().optional(),
});

export type PageModel = z.infer<typeof PageSchema>;
