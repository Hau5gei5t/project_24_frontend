"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { SurveyModel, SurveySchema } from "../model";
import { zodResolver } from "@hookform/resolvers/zod";
import { Model } from "survey-core";

import { useFormData } from "@/FSDPages/createForm/ui/Createform";
import { useSurveysStore } from "@/FSDApp/providers/surveys-store-provider";
import { createFormModel } from "@/FSDPages/createForm/model";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import useStore from "@/FSDApp/stores/useStore";
import { UserState } from "@/FSDApp/stores/user-store";
import { useUserStore } from "@/FSDApp/providers/user-store-provider";

export default function Generalform() {
  const user: UserState["userData"] = useStore(
    useUserStore,
    (state: UserState): UserState["userData"] => state.userData
  );
  const router = useRouter();
  const { addSurvey } = useSurveysStore((state) => state);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<createFormModel>({
    resolver: zodResolver(SurveySchema),
  });
  const onSubmit: SubmitHandler<createFormModel> = (data) => {
    if (data.cookieName === "") delete data.cookieName;
    data.pages = [];

    axios.post("http://localhost:3000/surveys", data).then((res) => {
      addSurvey(res.data);
      axios.post("http://localhost:3000/surveysUsers", {
        surveyId: res.data.id,
        userId: user?.id,
      });
    });
    document.getElementById("generalModalCreate")?.close();
    reset();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 mt-5"
      >
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Новый Опрос</h1>
          <div className="flex flex-row gap-5">
            <label className="form-control">
              <select
                {...register("locale", {
                  required: true,
                })}
                className="select select-bordered select-sm"
              >
                <option value="ru">Ru</option>
                <option value="en">Eng</option>
              </select>
            </label>
            <button className="btn btn-sm">Выбрать шаблон</button>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-4 flex-grow">
            <label className="form-control">
              <input
                {...register("title", {
                  required: true,
                })}
                className="input input-bordered input-sm"
                placeholder="Название"
              />
            </label>
            <label className="form-control">
              <textarea
                {...register("description", {
                  required: false,
                })}
                className="input input-bordered input-sm h-[10rem]"
                placeholder="Описание"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Код для уникальных ответов</span>
              </div>
              <input
                {...register("cookieName", {
                  required: false,
                })}
                className="input input-bordered input-sm"
              />
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-sm">
          Создать
        </button>
      </form>
    </>
  );
}
