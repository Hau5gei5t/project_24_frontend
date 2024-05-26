"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";


import {
  type SurveysStore,
  createSurveysStore,
} from "@/FSDApp/stores/surveys-store";

export const SurveysStoreContext = createContext<StoreApi<SurveysStore> | null>(
  null
);

export interface SurveysStoreProviderProps {
  children: ReactNode;
}

export const SurveysStoreProvider = ({ children }: SurveysStoreProviderProps) => {
  const storeRef = useRef<StoreApi<SurveysStore>>();
  if (!storeRef.current) {
    storeRef.current = createSurveysStore();
  }

  return (
    <SurveysStoreContext.Provider value={storeRef.current}>
      {children}
    </SurveysStoreContext.Provider>
  );
};

export const useSurveysStore = <T,>(
  selector: (store: SurveysStore) => T
): T => {
  const surveysStoreContext = useContext(SurveysStoreContext);

  if (!surveysStoreContext) {
    throw new Error(`useSurveysStore must be use within SurveysStoreProvider`);
  }

  return useStore(surveysStoreContext, selector);
};

