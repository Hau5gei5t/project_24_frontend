import { z } from "zod";
import { PageSchema } from "@/widgets/pageForm";
import { ElementSchema } from "@/widgets/elementForm";
import { SurveySchema } from "@/widgets/generalForm";
// import { default as baseModel } from "@/shared/model/zodSchema";

// type BaseModel = z.infer<typeof baseModel>;

// const obj: BaseModel = {};
export const createFormSchema = SurveySchema.extend({
    pages: z.array(PageSchema.extend({
        elements: z.array(ElementSchema)
    }))
    
});
export type createFormModel = z.infer<typeof createFormSchema>;








// const formSchema = z.object({
//   questionName: z.string().trim().min(5, { message: "Слишком короткое ID" }),
//   questionTitle: z.string().trim().min(3, { message: "Слишком короткое имя" }),
//   questionDescription: z.optional(z.string().trim()),
//   questionRequired: z.optional(z.boolean()),
//   questionType: z.enum(["text", "checkbox"]),
//   questionInputType: z.optional(z.enum(["text", "number", "tel"])),
// });

export type {  };
