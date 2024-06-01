import { useSurveysStore } from "@/FSDApp/providers/surveys-store-provider";
import { useUserStore } from "@/FSDApp/providers/user-store-provider";
import { SurveysState } from "@/FSDApp/stores/surveys-store";
import useStore from "@/FSDApp/stores/useStore";
import { UserState } from "@/FSDApp/stores/user-store";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Statistic() {
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
      axios.get("http://localhost:3000/surveys").then((res) => {
        console.log(res.data);

        setSurveys(res.data);
      });
    }, [isAuth, router]);
  return (
    <>
      <div className="container mx-auto mt-5 min-h-[calc(100dvh-10rem)] flex gap-6 flex-col">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Статистика</h1>
        </div>
      </div>
    </>
  );
}
