import { z } from "zod";

export type { LoginModel };
export { LoginSchema };

const LoginSchema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, { message: "Введите почту" })
      .email({ message: "Некорректная почта" }),
    password: z
      .string()
      .trim()
      .min(1, { message: "Введите пароль" })
      .min(8, { message: "Минимальная длина пароля 8 символов" })
      .max(32, { message: "Максимальная длина пароля 32 символа" }),
    rememberMe: z.boolean(),
  })
  .required({ email: true, password: true });
type LoginModel = z.infer<typeof LoginSchema>;
