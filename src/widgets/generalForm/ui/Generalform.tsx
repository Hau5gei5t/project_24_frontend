"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { SurveyModel, SurveySchema } from "../model";
import { zodResolver } from "@hookform/resolvers/zod";
import { Model } from "survey-core";

import { useFormData } from "@/FSDPages/createForm/ui/Createform";

export default function Generalform() {
  const { formData, SetFormData } = useFormData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SurveyModel>({
    resolver: zodResolver(SurveySchema),
  });
  const onSubmit: SubmitHandler<SurveyModel> = (data) => {
    if (data.cookieName === "") delete data.cookieName;
    localStorage.setItem("formData", JSON.stringify({ ...formData, ...data }));
    SetFormData({ ...formData, ...data });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <label className="form-control">
        <div className="label">
          <span className="label-text">Локализация</span>
        </div>
        <div>
          <label className="label cursor-pointer">
            <span className="label-text">Русская</span>
            <input
              type="radio"
              value={"ru"}
              {...register("locale", { value: formData.locale })}
              className="radio"
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Английская</span>
            <input
              type="radio"
              value={"en"}
              {...register("locale")}
              className="radio"
            />
          </label>
        </div>
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Название опроса</span>
        </div>
        <input
          {...register("title", { required: true, value: formData.title })}
          className="input input-bordered input-sm"
        />
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Описание</span>
        </div>
        <input
          {...register("description", {
            required: false,
            value: formData.description,
          })}
          className="input input-bordered input-sm"
        />
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Код для уникальных ответов</span>
        </div>
        <input
          {...register("cookieName", {
            required: false,
            value: formData.cookieName,
          })}
          className="input input-bordered input-sm"
        />
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Позиция логотипа</span>
        </div>
        <select
          {...register("logoPosition", {
            value: formData.logoPosition,
            required: true,
          })}
          className="select select-bordered select-sm"
        >
          <option value="left">Слева</option>
          <option value="right">Справа</option>
          <option value="top">Сверху</option>
          <option value="bottom">Снизу</option>
        </select>
      </label>
      <button type="submit" className="btn btn-primary btn-sm">
        Сохранить
      </button>
    </form>
  );
}
