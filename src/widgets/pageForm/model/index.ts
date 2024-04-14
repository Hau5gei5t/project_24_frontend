import { z } from "zod";

const PageSchema = z.object({
  name: z.string(),
  title: z.object({ ru: z.string() }).optional(),
  description: z.object({ ru: z.string() }).optional(),
});

type PageModel = z.infer<typeof PageSchema>;

export type { PageModel };
