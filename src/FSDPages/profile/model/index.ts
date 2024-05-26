import { z } from "zod";

export type { UserModel };
export { UserSchema };

const UserSchema = z.object({
  id: z.string().trim().min(1, { message: "Введите ID" }).optional(),
  email: z
    .string()
    .trim()
    .min(1, { message: "Введите почту" })
    .email({ message: "Некорректная почта" })
    .optional(),
  description: z.string().trim().optional(),
  role: z.enum(["res", "req"], { required_error: "Выберите роль" }),
  avatar: z.string().trim().optional(),
  firstName: z.string().trim().min(1, { message: "Введите имя" }),
  lastName: z.string().trim().min(1, { message: "Введите фамилию" }),
  age: z
    .string()
    .min(1, { message: "Введите возраст" })
    .max(120, { message: "Максимальный возраст 120" }),
  gender: z.enum(["male", "female"], { required_error: "Выберите пол" }),
  education: z.string().trim().min(1, { message: "Введите образование" }),
  occupation: z.string().trim().min(1, { message: "Введите род деятельности" }),
  themes: z
    .array(z.string())
    .min(1, { message: "Выберите интересы" })
    .min(1, { message: "Выберите хотя бы один интерес" }),
});
type UserModel = z.infer<typeof UserSchema>;
