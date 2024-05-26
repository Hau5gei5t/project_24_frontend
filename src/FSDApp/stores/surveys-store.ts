import { createFormModel } from "@/FSDPages/createForm/model";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
export type SurveysState = {
  surveys: createFormModel[];
  surveyEdit: { currentSurvey?: createFormModel; oldSurvey?: createFormModel };
};

export type SurveysActions = {
  addSurvey: (survey: createFormModel) => void;
  deleteSurvey: (title: string) => void;
  updateSurvey: (title: string, survey: createFormModel) => void;
  setSurveys: (surveys: createFormModel[]) => void;
  setCurrentSurvey: (survey: createFormModel) => void;
  setOldSurvey: (survey: createFormModel) => void;
};

export type SurveysStore = SurveysState & SurveysActions;

export const defaultInitState: SurveysState = {
  surveys: [],
  surveyEdit: {},
};

export const createSurveysStore = (
  initState: SurveysState = defaultInitState
) => {
  return create<SurveysStore>()(
    persist(
      (set, get) => ({
        ...initState,
        addSurvey: (survey: createFormModel) =>
          set({
            surveys: [...get().surveys, { ...survey }],
          }),
        deleteSurvey: (title: string) =>
          set({
            surveys: get().surveys.filter((item) => item.title !== title),
          }),
        updateSurvey: (title: string, survey: createFormModel) =>
          set({
            surveys: get().surveys.map((s) => (s.title === title ? survey : s)),
          }),
        setSurveys: (surveys: createFormModel[]) => set({ surveys: surveys }),
        setCurrentSurvey: (survey: createFormModel) =>
          set({ surveyEdit: { ...get().surveyEdit, currentSurvey: survey } }),
        setOldSurvey: (survey: createFormModel) =>
          set({ surveyEdit: { ...get().surveyEdit, oldSurvey: survey } }),
      }),
      {
        name: "surveys",
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          surveys: state.surveys ,
          surveyEdit: {...state.surveyEdit},
        }),
      }
    )
  );
};
