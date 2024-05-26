import { SubmitHandler, useForm } from "react-hook-form";
import { ElementModel, ElementSchema } from "../model";
import { zodResolver } from "@hookform/resolvers/zod";
import { Model } from "survey-core";
import { useFormData } from "@/FSDPages/createForm/ui/Createform";
import { useEffect, useState } from "react";
import { createFormModel } from "@/FSDPages/createForm";
import { useSurveysStore } from "@/FSDApp/providers/surveys-store-provider";
import useStore from "@/FSDApp/stores/useStore";

interface IElementFormProps {
  index: number;
  currentElement?: createFormModel["pages"][0]["elements"][0];
  pageIndex?: number;
}
export default function Elementform(props: IElementFormProps) {
  const { index, currentElement, pageIndex } = props;
  const { setSurveys, deleteSurvey, setCurrentSurvey, updateSurvey } =
    useSurveysStore((state) => state);
  const surveyEdit = useStore(useSurveysStore, (state) => state.surveyEdit);
  let survey, oldSurvey;
  if (surveyEdit !== undefined) {
    survey = surveyEdit.currentSurvey;
    oldSurvey = surveyEdit.oldSurvey;
  }

  const [element, setElement] = useState<
    createFormModel["pages"][0]["elements"][0] | undefined
  >(currentElement);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ElementModel>({
    resolver: zodResolver(ElementSchema),
    defaultValues: element,
  });

  const onSubmit: SubmitHandler<ElementModel> = (data) => {
    if (element === undefined) {
      const fd = { ...survey };
      const res = { ...data };
      if (res.type === "rating") delete res.inputType;
      const a = fd.pages.map((p, i) => {
        if (i === index) {
          return { ...p, elements: [...p.elements, res] };
        }
        return p;
      });
      fd.pages = [...a];
      setCurrentSurvey({ ...fd });
      document.getElementById("elementModalCreate" + index)?.close();
      reset();
    } else {
      const fd = { ...survey };
      const res = { ...data };
      if (res.type === "rating") delete res.inputType;
      const a = fd.pages.map((p, i) => {
        if (i === pageIndex) {
          return {
            ...p,
            elements: p.elements.map((e, j) => {
              if (j === index) return res;
              return e;
            }),
          };
        }
        return p;
      })
      setElement(res);
      // fd.pages[pageIndex!].elements[index] = res;
      fd.pages = [...a];
      setCurrentSurvey({ ...fd });
      document
        .getElementById(`elementModalEdit_${pageIndex}_${index}`)
        ?.close();
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
