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
import Link from "next/link";
import Pagedata from "@/widgets/pageData/ui/Pagedata";
import { useSurveysStore } from "@/FSDApp/providers/surveys-store-provider";
import useStore from "@/FSDApp/stores/useStore";
import { useRouter } from "next/navigation";
import axios from "axios";

const startData: createFormModel = {
  title: "Новая форма",
  locale: "ru",
  description: "Описание формы",
  pages: [],
  logoPosition: "left",
};

export default function Createform() {
  const { setSurveys, deleteSurvey, setCurrentSurvey, updateSurvey } =
    useSurveysStore((state) => state);
  const router = useRouter();
  const surveyEdit = useStore(useSurveysStore, (state) => state.surveyEdit);
  let survey, oldSurvey;
  if (surveyEdit !== undefined) {
    survey = surveyEdit.currentSurvey;
    oldSurvey = surveyEdit.oldSurvey;
  }
  const [isEditing, setIsEditing] = React.useState(false);
  if (survey === undefined) {
    return <>loading...</>;
  }

  return (
    <>
      <div className="container mx-auto mt-5 min-h-[calc(100dvh-10rem)] flex gap-6 flex-col">
        <div className="text-md breadcrumbs">
          <ul>
            <li>
              <Link href="/">Главная</Link>
            </li>
            <li>
              <Link href="/management">Управление</Link>
            </li>
            <li>Редактирование опроса {survey.title}</li>
          </ul>
        </div>
        <div className="flex justify-between">
          <input
            type="text"
            className="input input-ghost text-lg"
            defaultValue={survey.title}
            disabled={!isEditing}
            id={"surveyTitle"}
          />
          <div className="flex gap-4 ">
            <div className="form-control">
              <label className="label cursor-pointer gap-3">
                <span className="label-text">Принимать ответы</span>
                <input type="checkbox" className="toggle" />
              </label>
            </div>

            <button
              className="btn rounded-3xl p-4"
              onClick={() => {
                if (isEditing) {
                  const fd = { ...survey };
                  const title = document.getElementById("surveyTitle")!.value;
                  fd.title = title;
                  setCurrentSurvey({ ...fd });
                }
                setIsEditing(!isEditing);
              }}
            >
              {isEditing ? "Сохранить" : "Редактировать"}
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {survey.pages.length > 0 &&
          survey.pages.map((page, i) => (
            <Pagedata
              key={page.name}
              page={page}
              isEditing={isEditing}
              index={i}
            />
          ))}
        {isEditing && (
          <button
            className="btn btn-block mb-5 btn-info"
            onClick={() =>
              document.getElementById("pageModalCreate")?.showModal()
            }
          >
            Добавить страницу
          </button>
        )}
        <div className="flex flex-row-reverse gap-7">
          <button
            className="btn btn-primary w-[25rem] rounded-full"
            onClick={() => {
              if (survey.title === oldSurvey.title) {
                updateSurvey(survey.title, { ...survey });
              } else {
                updateSurvey(oldSurvey.title, { ...survey });
              }
              axios.patch(
                process.env.NEXT_PUBLIC_SERVER_URL + "/surveys/" + survey.id,
                {
                  ...survey,
                }
              );
              router.push("/management");
            }}
          >
            Готово
          </button>
          <button
            className="btn btn-neutral w-[25rem] rounded-full"
            onClick={() => {
              // setCurrentSurvey({ ...oldSurvey }); //ok
              router.push("/management");
            }}
          >
            Отмена
          </button>
        </div>
      </div>
      <dialog id={"pageModalCreate"} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <Pageform />
        </div>
      </dialog>
    </>
  );
}
