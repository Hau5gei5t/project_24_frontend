import { SubmitHandler, useForm } from "react-hook-form";
import { PageModel, PageSchema } from "../model";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";

import { ElementModel } from "@/widgets/elementForm";
import { createFormModel } from "@/FSDPages/createForm";
import { useSurveysStore } from "@/FSDApp/providers/surveys-store-provider";
import useStore from "@/FSDApp/stores/useStore";

interface IPageFormProps {
  index?: number;
  page?: createFormModel["pages"][0];
}

export default function Pageform(props: IPageFormProps) {
  const { setSurveys, deleteSurvey, setCurrentSurvey, updateSurvey } =
    useSurveysStore((state) => state);
  const surveyEdit = useStore(useSurveysStore, (state) => state.surveyEdit);
  let survey, oldSurvey;
  if (surveyEdit !== undefined) {
    survey = surveyEdit.currentSurvey;
    oldSurvey = surveyEdit.oldSurvey;
  }

  const { page, index } = props;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PageModel>({
    resolver: zodResolver(PageSchema),
    defaultValues: props.page,
  });
  const onSubmit: SubmitHandler<PageModel> = (data) => {
    if (page === undefined && index === undefined) {
      const fd = { ...survey };
      const newPage = { ...data, elements: [] };
      fd.pages = [...fd.pages, newPage];
      setCurrentSurvey({...fd});
      document.getElementById("pageModalCreate")?.close();
      reset();
    }
    if (page !== undefined && index !== undefined) {
      const fd = { ...survey };
      const res = { ...data };
      const a = fd.pages.map((p, i) => {
        if (i === index) return {...res, elements: p.elements};
        return p;
      });
      fd.pages = [...a];

      setCurrentSurvey({...fd});
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
