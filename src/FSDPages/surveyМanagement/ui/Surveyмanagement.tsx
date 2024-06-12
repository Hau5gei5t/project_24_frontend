import Generalform from "@/widgets/generalForm/ui/Generalform";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import { useSurveysStore } from "@/FSDApp/providers/surveys-store-provider";
import useStore from "@/FSDApp/stores/useStore";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/FSDApp/providers/user-store-provider";
import { SurveysState } from "@/FSDApp/stores/surveys-store";
import { UserState } from "@/FSDApp/stores/user-store";
import axios from "axios";
import { Item } from "@radix-ui/react-select";
export default function Surveyмanagement() {
  const { setSurveys, deleteSurvey, setCurrentSurvey, setOldSurvey } =
    useSurveysStore((state) => state);

  const surveys = useStore(
    useSurveysStore,
    (state: SurveysState) => state.surveys
  );
  const isAuth = useStore(
    useUserStore,
    (state: UserState) => state.isAuthenticated
  );
  const user: UserState["userData"] = useStore(
    useUserStore,
    (state: UserState): UserState["userData"] => state.userData
  );
  const router = useRouter();
  useEffect(() => {
    if (!isAuth && isAuth !== undefined) {
      router.push("/login");
    }
    if (user?.role !== "res") {
      axios
        .get(process.env.NEXT_PUBLIC_SERVER_URL + "/surveysUsers?userId=" + user?.id)
        .then((res) => {
          const tempList = [];
          console.log(res.data);
          res.data.forEach((item: any) => {
            axios
              .get(process.env.NEXT_PUBLIC_SERVER_URL + "/surveys/" + item.surveyId)
              .then((res) => {
                console.log(res.data);
                tempList.push(res.data);
                return tempList;
              })
              .then((res) => {
                setSurveys(res);
              });
          });
        });
    } else {
      axios.get(process.env.NEXT_PUBLIC_SERVER_URL + "/surveys").then((res) => {
        setSurveys(res.data);
      });
    }
  }, [isAuth, router]);

  return (
    <div className="container mx-auto mt-5 min-h-[calc(100dvh-10rem)] flex gap-6 flex-col">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">
          {user?.role === "res" ? "Опросы" : "Управление опросами"}
        </h1>
        <div className="*:btn *:rounded-full w-[50rem] *:grow flex  gap-5">
          {user?.role !== "res" && (
            <>
              <button
                className="btn"
                onClick={() =>
                  document.getElementById("generalModalCreate")?.showModal()
                }
              >
                Создать опрос{" "}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <button>
                Создать шаблон{" "}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <button>
                По умолчанию{" "}
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.51424 1.125C3.51424 1.02554 3.55375 0.930161 3.62408 0.859835C3.6944 0.789509 3.78978 0.75 3.88924 0.75C3.9887 0.75 4.08408 0.789509 4.15441 0.859835C4.22473 0.930161 4.26424 1.02554 4.26424 1.125V10.3448C4.26423 10.4189 4.24225 10.4913 4.20109 10.5529C4.15993 10.6146 4.10143 10.6626 4.03298 10.691C3.96453 10.7194 3.8892 10.7269 3.81649 10.7125C3.74379 10.6982 3.67698 10.6626 3.62449 10.6103L0.138491 7.125C0.103568 7.09017 0.0758611 7.04878 0.0569563 7.00323C0.0380515 6.95767 0.0283203 6.90883 0.0283203 6.8595C0.0283203 6.81017 0.0380515 6.76133 0.0569563 6.71578C0.0758611 6.67022 0.103568 6.62883 0.138491 6.594H0.139991C0.210283 6.52393 0.305488 6.48458 0.404741 6.48458C0.503994 6.48458 0.599199 6.52393 0.669491 6.594L3.51424 9.441V1.125ZM5.76424 1.65525C5.7644 1.5812 5.78649 1.50886 5.8277 1.44734C5.86892 1.38583 5.92743 1.33789 5.99585 1.30958C6.06427 1.28126 6.13954 1.27384 6.21217 1.28824C6.2848 1.30264 6.35155 1.33822 6.40399 1.3905L9.88999 4.875C9.92491 4.90983 9.95262 4.95122 9.97153 4.99677C9.99043 5.04233 10.0002 5.09117 10.0002 5.1405C10.0002 5.18983 9.99043 5.23867 9.97153 5.28423C9.95262 5.32978 9.92491 5.37117 9.88999 5.406H9.88849C9.8182 5.47607 9.72299 5.51542 9.62374 5.51542C9.52449 5.51542 9.42928 5.47607 9.35899 5.406L6.51424 2.5605V10.875C6.51424 10.9745 6.47473 11.0698 6.40441 11.1402C6.33408 11.2105 6.2387 11.25 6.13924 11.25C6.03978 11.25 5.9444 11.2105 5.87408 11.1402C5.80375 11.0698 5.76424 10.9745 5.76424 10.875V1.65525Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button>Сменить тему</button>
            </>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {surveys === undefined ? (
          <>loading...</>
        ) : (
          <>
            {surveys.map((item, i) => {
              const toModelSurvey = new Model(item);
              toModelSurvey.onComplete.add(function (sender, options) {
                // Display the "Saving..." message (pass a string value to display a custom message)
                options.showSaveInProgress();
                axios
                  .post(process.env.NEXT_PUBLIC_SERVER_URL + "/answersUsers", {
                    surveyId: item.id,
                    answers: toModelSurvey.getPlainData(),
                    userId: user?.id,
                  })
                  .then((res) => {
                    options.showSaveSuccess();
                  })
                  .catch((err) => {
                    options.showSaveError();
                  });
              });
              return (
                <div
                  key={item.title}
                  className="card w-72 bg-base-100 shadow-xl relative min-h-40"
                >
                  <div className="card-body">
                    <h2 className="text-xl font-bold card-title">
                      {item.title}
                    </h2>
                    <p className="">{item.description}</p>
                  </div>
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                      className="rounded-b-xl"
                    />
                  </figure>
                  {user?.role === "res" && (
                    <>
                      <button
                        className="btn mt-3 btn-success rounded-xl"
                        onClick={() =>
                          document
                            .getElementById("showSurvey" + item.title)
                            ?.showModal()
                        }
                      >
                        Пройти опрос
                      </button>
                    </>
                  )}
                  {user?.role !== "res" && (
                    <>
                      <div
                        className="btn btn-info btn-sm btn-circle absolute right-[-15px] top-[55px]"
                        onClick={() => {
                          setCurrentSurvey({ ...item });
                          setOldSurvey({ ...item });
                          router.push("management/createForm");
                        }}
                      >
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
                      </div>
                      <div
                        className="btn btn-success btn-sm btn-circle absolute right-[-15px] top-[20px]"
                        onClick={() =>
                          document
                            .getElementById("showSurvey" + item.title)
                            ?.showModal()
                        }
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div
                        className={
                          "absolute top-[-15px] right-[-15px] btn btn-error btn-sm  btn-circle "
                        }
                        onClick={() => {
                          const idToDelete = item.id;

                          axios
                            .delete(
                              process.env.NEXT_PUBLIC_SERVER_URL + "/surveys/" + idToDelete
                            )
                            .then((res) => {
                              deleteSurvey(item.title!);
                            });
                        }}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </>
                  )}

                  <dialog
                    id={"showSurvey" + item.title}
                    className="modal min-h-96"
                  >
                    <div className="modal-box max-w-5xl min-h-96">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <div className="pt-10 min-h-96">
                        <Survey model={toModelSurvey} />
                      </div>
                    </div>
                  </dialog>
                </div>
              );
            })}
          </>
        )}
      </div>
      <dialog id={"generalModalCreate"} className="modal">
        <div className="modal-box w-8/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <Generalform />
        </div>
      </dialog>
    </div>
  );
}
