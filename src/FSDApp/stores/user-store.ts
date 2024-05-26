import { createFormModel } from "@/FSDPages/createForm/model";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
export type UserState = {
  userData?: {
    id?: string;
    email?: string;
    description?: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    themes: string[];
    age: number;
    gender: "male" | "female"|undefined;
    education: string;
    occupation: string;
    role: "req" | "res";
  };
  isAuthenticated: boolean|undefined;
};

export type UserActions = {
  setUserData: (userData: UserState["userData"]) => void;
  deleteUserData: () => void;
  login: () => void;
  logout: () => void;
};

export type UserStore = UserState & UserActions;

export const defaultInitState: UserState = {
  userData: undefined,
  isAuthenticated: undefined,
};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return create<UserStore>()(
    persist(
      (set, get) => ({
        ...initState,
        setUserData: (userData: UserState["userData"]) =>
          set({ userData: userData }),
        deleteUserData: () => set({ userData: undefined }),
        login: () => set({ isAuthenticated: true }),
        logout: () => set({ isAuthenticated: false }),
      }),
      {
        name: "user",
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          userData: state.userData,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    )
  );
};
