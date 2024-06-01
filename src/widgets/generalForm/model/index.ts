import { z } from "zod";

export const SurveySchema = z.object({
  locale: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  cookieName: z.string().optional(),
  widthMode: z.enum(["static", "responsive"]).optional(),
  logo: z
    .object({
      ru: z.string(),
    })
    .optional(),
  logoWidth: z.string().optional(),
  logoHeight: z.string().optional(),
  logoFit: z
    .enum(["contain", "cover", "fill", "none"])
    .default("contain")
    .optional(),
  logoPosition: z.enum(["left", "right", "top", "bottom"]).default("left"),
  width: z.string().optional(),
  questionsOrder: z.enum(["random"]).optional(),
  completedHtml: z.object({ ru: z.string() }).optional(),
  completedBeforeHtml: z.object({ ru: z.string() }).optional(),
  loadingHtml: z.object({ ru: z.string() }).optional(),
  id: z.number().optional(),
});
export type SurveyModel = z.infer<typeof SurveySchema>;

