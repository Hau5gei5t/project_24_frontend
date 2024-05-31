import { z } from "zod";

export type { UserModel, EditUserModel };
export { UserSchema, EditUserSchema };

const UserSchema = z.object({
  id: z.string().trim().min(1, { message: "Введите ID" }).optional(),
  email: z
    .string()
    .trim()
    .min(1, { message: "Введите почту" })
    .email({ message: "Некорректная почта" })
    .optional(),
  description: z.string().trim().optional(),
  role: z.enum(["res", "req"], { required_error: "Выберите роль" }).optional(),
  avatar: z.string().trim().optional(),
  firstName: z.string().trim().min(1, { message: "Введите имя" }),
  lastName: z.string().trim().min(1, { message: "Введите фамилию" }),
  age: z
    .string(),
  gender: z.enum(["male", "female"], { required_error: "Выберите пол" }),
  education: z.string().trim().min(1, { message: "Введите образование" }),
  occupation: z.string().trim().min(1, { message: "Введите род деятельности" }),

});
const EditUserSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Введите почту" })
    .email({ message: "Некорректная почта" })
    .optional(),
  description: z.string().trim().optional(),

  firstName: z.string().trim().min(1, { message: "Введите имя" }),
  lastName: z.string().trim().min(1, { message: "Введите фамилию" }),
  age: z.string(),
  gender: z.enum(["male", "female"], { required_error: "Выберите пол" }),
  education: z.string().trim().min(1, { message: "Введите образование" }),
  occupation: z.string().trim().min(1, { message: "Введите род деятельности" }),
  themes: z.array(z.string()).optional(),
});
type UserModel = z.infer<typeof UserSchema>;
type EditUserModel = z.infer<typeof EditUserSchema>;