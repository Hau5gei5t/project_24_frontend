import { useUserStore } from "@/FSDApp/providers/user-store-provider";
import useStore from "@/FSDApp/stores/useStore";
import Link from "next/link";
import React from "react";

const Home = () => {
  const isAuth = useStore(useUserStore, (state) => state.isAuthenticated);
  return (
    <>
      <div className="hero min-h-[calc(100dvh-10rem)]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there (приветствие)</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. (описание)
            </p>
            <Link href={isAuth?"/management":"/login"} className="btn btn-primary">
              Начать
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
