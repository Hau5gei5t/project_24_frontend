import { SubmitHandler, useForm } from "react-hook-form";
import { ElementModel, ElementSchema } from "../model";
import { zodResolver } from "@hookform/resolvers/zod";
import { Model } from "survey-core";
import { useFormData } from "@/FSDPages/createForm/ui/Createform";

export default function Elementform() {
  const { formData, SetFormData } = useFormData();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ElementModel>({
    resolver: zodResolver(ElementSchema),
  });
  const onSubmit: SubmitHandler<ElementModel> = (data) => {
    const fd = formData;
    const res = { ...data };
    if (res.type === "rating") delete res.inputType;

    fd.pages[fd.pages.length - 1].elements.push(res);
    console.log(fd);

    SetFormData({ ...fd });
    localStorage.setItem("formData", JSON.stringify({ ...fd }));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <label className="form-control">
        <div className="label">
          <span className="label-text">ID</span>
        </div>
        <input
          {...register("name", { required: true })}
          className="input input-bordered input-sm"
        />
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Вопрос</span>
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
        <label className="label cursor-pointer">
          <span className="label-text">Обязательный вопрос</span>
          <input
            {...register("isRequired")}
            type="checkbox"
            className="checkbox checkbox-md"
          />
        </label>
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Тип вопроса</span>
        </div>
        <select
          {...register("type", { required: true })}
          className="select select-bordered select-sm"
        >
          <option value="text">Ввод текста</option>
          {/* <option value="radiogroup">Выбор варианта</option> */}
          <option value="rating">Рейтинг</option>
        </select>
      </label>
      {watch("type") === "rating" ? (
        <>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Вариант ввода</span>
            </div>
            <select
              {...register("rateType")}
              className="select select-bordered select-sm"
            >
              <option value="labels">Текст</option>
              {/* <option value="stars">Звезды</option>
              <option value="smiles">Смайлики</option> */}
            </select>
          </label>
        </>
      ) : (
        <>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Вариант ввода</span>
            </div>
            <select
              {...register("inputType", { value: undefined })}
              className="select select-bordered select-sm"
            >
              <option value="text">Текст</option>
              <option value="number">Число</option>
              <option value="range">Отрезок</option>
            </select>
          </label>
        </>
      )}
      <button type="submit" className="btn btn-primary btn-sm">
        Сохранить
      </button>
    </form>
  );
}
