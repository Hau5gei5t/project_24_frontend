import { SubmitHandler, useForm } from "react-hook-form";
import { LoginModel, LoginSchema } from "../model";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useUserStore } from "@/FSDApp/providers/user-store-provider";
import { useRouter } from "next/navigation";
import { UserModel } from "@/FSDPages/profile/model";
import Cookies from "js-cookie";
import axios from "axios";

const mockData: UserModel[] = [
  {
    id: "1",
    email: "example@ex.com",
    description: "some description",
    firstName: "Name 1",
    lastName: "LastName 1",
    themes: ["theme 1", "theme 2"],
    age: 42,
    gender: "male",
    education: "education 1",
    occupation: "occupation 1",
    avatar: "avatar 1",
    role: "req",
  },
  {
    id: "2",
    email: "example2@ex.com",
    description: "some description2",
    firstName: "Name 2",
    lastName: "LastName 2",
    themes: ["theme 3", "theme 4"],
    age: 44,
    gender: "male",
    education: "education 2",
    occupation: "occupation 2",
    avatar: "avatar 2",
    role: "res",
  },
];

export default function Login() {
  const { login, setUserData } = useUserStore((state) => state);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginModel>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  const onSubmit: SubmitHandler<LoginModel> = async (data) => {
    axios
      .post("http://localhost:3000/login", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        login();
        Cookies.set("token", res.data.accessToken);
        setUserData(res.data.user);
        if (res.data.user.role === "res") {
          router.push("/profile");
        } else {
          router.push("/management");
        }
      });
    reset();
  };
  console.log(errors);

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
            <label className="label mt-5">
              <div className="form-control ">
                <button type="submit" className="btn btn-primary">
                  Войти
                </button>
              </div>
              <div className="flex items-center gap-3">
                <span className="label-text cursor-pointer">
                  Запомнить меня
                </span>
                <input
                  {...register("rememberMe", {
                    value: false,
                  })}
                  type="checkbox"
                  className="checkbox"
                />
              </div>
            </label>
          </div>

          <p className="text-center">
            Еще нет аккаунта?{" "}
            <Link href="/register" className="link ">
              Зарегистрируйтесь!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
