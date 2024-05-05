import { SubmitHandler, useForm } from "react-hook-form";
import { PageModel, PageSchema } from "../model";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useFormData } from "@/FSDPages/createForm/ui/Createform";
import { ElementModel } from "@/widgets/elementForm";
import { createFormModel } from "@/FSDPages/createForm";

interface IPageFormProps {
  index?: number;
  page?: createFormModel["pages"][0];
}

export default function Pageform(props: IPageFormProps) {
  const { page, index } = props;
  const { formData, SetFormData } = useFormData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PageModel>({
    resolver: zodResolver(PageSchema),
    defaultValues: props.page,
  });
  const onSubmit: SubmitHandler<PageModel> = (data) => {
    if (page === undefined && index === undefined) {
      const fd = formData;
      const newPage = { ...data, elements: [] };
      fd.pages.push(newPage);

      SetFormData({ ...fd });
      localStorage.setItem("formData", JSON.stringify({ ...fd }));
      document.getElementById("pageModalCreate")?.close();
    }
    if (page !== undefined && index !== undefined) {
      const fd = formData;
      const res = { ...data };
      fd.pages[index] = { ...res, elements: page.elements };

      SetFormData({ ...fd });
      localStorage.setItem("formData", JSON.stringify({ ...fd }));
      document.getElementById("pageModalEdit" + index)?.close();
    }
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
          <span className="label-text">Название</span>
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
      <button type="submit" className="btn btn-primary btn-sm">
        Сохранить
      </button>
    </form>
  );
}
