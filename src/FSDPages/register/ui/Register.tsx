import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterModel, RegisterSchema } from "../model";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { RegisterUser } from "../api";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/FSDApp/providers/user-store-provider";

export default function Register() {
  const { login, setUserData } = useUserStore((state) => state);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterModel>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<RegisterModel> = async (data) => {
    const response = await RegisterUser(data);
    if (response.status !== 201) {
      alert("Почта уже занята");
    }
    Cookies.set("token", response.data.accessToken);
    setUserData(response.data.user);
    login();
    localStorage.setItem("newAccount", JSON.stringify(true));
    router.push("/profile");
  };

  return (
    <div className="hero min-h-[calc(100dvh-10rem)]">
      <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <form className="card-body gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                {...register("email", {
                  required: true,
                })}
                type="email"
                placeholder="examle@ex.com"
                className="grow"
              />
            </label>
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              Password
              <input
                {...register("password", {
                  required: true,
                })}
                type="password"
                placeholder="password"
                className="grow"
              />
            </label>
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              Confirm password
              <input
                {...register("confirmPassword", {
                  required: true,
                })}
                type="password"
                placeholder="password"
                className="grow max-w-48"
              />
            </label>
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div className="form-control items-center">
            <button type="submit" className="btn btn-primary w-fit">
              Зарегистрироваться
            </button>
          </div>
          <p className="text-center">
            Уже есть аккаунт?{" "}
            <Link href="/login" className="link ">
              Войти!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
