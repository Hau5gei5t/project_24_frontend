"use client";
import React, { createContext, useContext, useEffect } from "react";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import { useForm, SubmitHandler } from "react-hook-form";
import Generalform from "@/widgets/generalForm/ui/Generalform";
import Pageform from "@/widgets/pageForm/ui/Pageform";
import { Elementform } from "@/widgets/elementForm";
import { createFormModel } from "../model";
import "survey-core/i18n/russian";

const startData: createFormModel = {
  title: "Новая форма",
  locale: "ru",
  description: "Описание формы",
  pages: [
     
  ],
  logoPosition: "left",
};

type FormDataConextType = {
  formData: createFormModel;
  SetFormData: React.Dispatch<React.SetStateAction<createFormModel>>;
}

const FormDataContext = createContext<FormDataConextType>({formData: startData, SetFormData: () => {}});
export function useFormData() {
  return useContext(FormDataContext);
}
export default function Createform() {
  const [formData, SetFormData] = React.useState<createFormModel>(startData);
  const [survey, setSurvey] = React.useState(new Model());
  useEffect(() => {
    const res = localStorage.getItem("formData") === null?formData:JSON.parse(localStorage.getItem("formData")!);
    setSurvey(new Model(res));
    survey.locale = res.locale!;
    console.log(res);
  }, [formData]);

  return (
    <>
      <div className="container mx-auto mt-10 flex flex-row-reverse gap-8 min-h-[calc(100dvh-10rem)]">
        <div className="p-4 w-80 min-h-[calc(100dvh - 2.2rem)] bg-base-100 text-base-content">
          <FormDataContext.Provider value={{ formData, SetFormData }}>
            <div className="join join-vertical gap-5">
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                  Основные настройки
                </div>
                <div className="collapse-content">
                  <Generalform />
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                  Добавление страницы
                </div>
                <div className="collapse-content">
                  <Pageform />
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                  Добавление вопроса
                </div>
                <div className="collapse-content">
                  <Elementform/>
                </div>
              </div>
            </div>
          </FormDataContext.Provider>
        </div>
        <div className="w-[65%] grow">
          <Survey model={survey} />
        </div>
      </div>
    </>
  );
}
