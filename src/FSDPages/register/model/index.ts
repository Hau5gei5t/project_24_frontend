import { z } from "zod";

export type { RegisterModel };
export { RegisterSchema };

const RegisterSchema = z
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
    confirmPassword: z
      .string()
      .trim()
      .min(1, { message: "Подтвердите пароль" }),
  })
  .required({ email: true, password: true, confirmPassword: true }).refine(
    (data) => data.password === data.confirmPassword, {
      message: "Пароли не совпадают",
      path: ["confirmPassword"],
    }
  );
type RegisterModel = z.infer<typeof RegisterSchema>;
