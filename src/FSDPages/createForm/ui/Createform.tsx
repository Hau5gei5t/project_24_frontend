"use client";
import React, { useEffect } from "react";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import { useForm, SubmitHandler } from "react-hook-form";
import Generalform from "@/widgets/generalForm/ui/Generalform";

export default function Createform() {
  useEffect(() => {}, []);

  return (
    <>
      <div className="container mx-auto mt-10 flex flex-row-reverse gap-8 min-h-[calc(100dvh-10rem)]">
        <div className="menu p-4 w-80 min-h-[calc(100dvh - 2.2rem)] bg-base-100 text-base-content">
          <div className="join join-vertical">
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
                <Generalform />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[65%] grow">{/* <Survey model={survey} /> */}</div>
      </div>
    </>
  );
}
