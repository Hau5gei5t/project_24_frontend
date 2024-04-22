import { SubmitHandler, useForm } from "react-hook-form";
import { PageModel, PageSchema } from "../model";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useFormData } from "@/FSDPages/createForm/ui/Createform";
import { ElementModel } from "@/widgets/elementForm";


export default function Pageform() {
  const { formData, SetFormData } = useFormData();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PageModel>({
    resolver: zodResolver(PageSchema),
  });
  const onSubmit: SubmitHandler<PageModel> = (data) => {
     const page = { ...data, elements: [] };
     SetFormData({ ...formData, pages: [...formData.pages, page] });
    localStorage.setItem("formData", JSON.stringify({ ...formData, pages: [...formData.pages, page] }));
    

    
    
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
