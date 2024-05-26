import { useUserStore } from "@/FSDApp/providers/user-store-provider";
import useStore from "@/FSDApp/stores/useStore";
import { UserState } from "@/FSDApp/stores/user-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { UserModel, UserSchema } from "../model";
import { Multiselect } from "multiselect-react-dropdown";
import { useRouter } from "next/navigation";

const THEMES = [
  "theme 1",
  "theme 2",
  "theme 3",
  "theme 4",
  "theme 5",
  "theme 6",
];

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const user: UserState["userData"] = useStore(
    useUserStore,
    (state) => state.userData
  );
   const isAuth = useStore(useUserStore, (state) => state.isAuthenticated);

   const router = useRouter();
   useEffect(() => {
     if (!isAuth && isAuth !== undefined) {
       router.push("/login");
     }
   }, [isAuth, router]);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<UserModel>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      ...user,
    },
  });

  if (user === undefined) return <>loading...</>;
  const onSubmit: SubmitHandler<UserModel> = (data) => {
    alert("asd")
    // alert(JSON.stringify(data));

    reset();
  };
  return (
    <>
      <div className="container mx-auto mt-5 min-h-[calc(100dvh-10rem)] flex gap-6 flex-col">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Профиль</h1>
          {!isEditing && (
            <button
              className="btn"
              onClick={() => {
                setIsEditing(!isEditing);
                if (isEditing) {
                  // const fd = { ...survey };
                  // const title = document.getElementById("surveyTitle")!.value;
                  // fd.title = title;
                  // setCurrentSurvey({ ...fd });
                }
              }}
            >
              {"Редактировать"}
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          )}
        </div>
        <div className="flex items-center justify-center ">
          <div className="card bg-base-100 shadow-xl relative w-full min-h-[calc(60dvh-10rem)]">
            {isEditing ? (
              <>
                <div className="card-body gap-5">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <p>{errors.age?.message}</p>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Имя</span>
                      </label>
                      <input
                        {...register("firstName")}
                        type="text"
                        placeholder="Имя"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Фамилия</span>
                      </label>
                      <input
                        {...register("lastName")}
                        type="text"
                        placeholder="Фамилия"
                        className="input input-bordered"
                      ></input>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Возраст</span>
                      </label>
                      <input
                        {...register("age")}
                        type="number"
                        placeholder="Возраст"
                        className="input input-bordered"
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Пол</span>
                      </label>
                      <select
                        {...register("gender")}
                        className="select select-bordered"
                      >
                        <option value="male">Мужской</option>
                        <option value="female">Женский</option>
                      </select>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Уровень образования</span>
                      </label>
                      <input
                        {...register("education")}
                        type="text"
                        placeholder="Уровень образования"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Род деятельности</span>
                      </label>
                      <input
                        {...register("occupation")}
                        type="text"
                        placeholder="Род деятельности"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Интересы</span>
                      </label>
                      <Controller
                        control={control}
                        name="themes"
                        render={({ field: { onChange, value } }) => (
                          <>
                            <Multiselect
                              options={THEMES}
                              selectedValues={value}
                              onSelect={onChange}
                              onRemove={onChange}
                              isObject={false}
                              style={{
                                searchBox: { background: "#1F202A" },
                                optionContainer: { background: "#1F202A" },
                                option: { background: "#1F202A" },
                              }}
                            />
                          </>
                        )}
                      />
                    </div>
                    <div className="form-control ">
                      <button type="submit" className="btn btn-primary mt-5">
                        Войти
                      </button>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              <div className="card-body gap-5">
                <h2 className="card-title">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="flex-grow-0">Возраст: {user.age}</p>
                <p className="flex-grow-0">
                  Пол: {user.gender === "male" ? "Мужской" : "Женский"}
                </p>
                <p className="flex-grow-0">
                  Уровень образования: {user.education}
                </p>
                <p className="flex-grow-0">
                  Род деятельности: {user.occupation}
                </p>
                <div>
                  <p>Интересы:</p>
                  <div className="flex flex-wrap flex-row gap-x-7 gap-y-3 mt-3 w-[60%] items-center">
                    {user.themes.map((theme) => (
                      <div key={theme} className="badge badge-neutral badge-lg">
                        {theme}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
