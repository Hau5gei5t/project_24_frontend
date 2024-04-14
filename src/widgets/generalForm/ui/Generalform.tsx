import { SubmitHandler, useForm } from "react-hook-form";
import { SurveyModel, SurveySchema } from "../model";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Generalform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SurveyModel>({
    resolver: zodResolver(SurveySchema),
  });
  const onSubmit: SubmitHandler<SurveyModel> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <label className="form-control">
        <div className="label">
          <span className="label-text">Локализация</span>
        </div>
        <select
          {...register("locale")}
          className="select select-bordered select-sm"
        >
          <option value="ru">Русский</option>
          <option value="en">English</option>
        </select>
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Название опроса</span>
        </div>
        <input
          {...register("title")}
          className="input input-bordered input-sm"
        />
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Описание</span>
        </div>
        <input
          {...register("description")}
          className="input input-bordered input-sm"
        />
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Код для уникальных ответов</span>
        </div>
        <input
          {...register("cookieName")}
          className="input input-bordered input-sm"
        />
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Позиция логотипа</span>
        </div>
        <select
          {...register("logoPosition", { value: "left", required: true })}
          className="select select-bordered select-sm"
        >
          <option value="left">Слева</option>
          <option value="right">Справа</option>
          <option value="top">Сверху</option>
          <option value="bottom">Снизу</option>
        </select>
      </label>
      <button type="submit" className="btn btn-primary btn-sm">Сохранить</button>
    </form>
  );
}
