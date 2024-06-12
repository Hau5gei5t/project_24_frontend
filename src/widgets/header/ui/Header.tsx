"use client";
import { useUserStore } from "@/FSDApp/providers/user-store-provider";
import useStore from "@/FSDApp/stores/useStore";
import Logo from "@/shared/ui/logo";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const isAuth = useStore(useUserStore, (state) => state.isAuthenticated);
  const { logout } = useUserStore((state) => state);
  const link = pathname.split("/")[1];
  const [currentPath, setCurrentPath] = useState<string>(
    link.length > 0 ? link : "menu"
  );
  useEffect(() => {
    setCurrentPath(
      pathname.split("/")[1].length > 0 ? pathname.split("/")[1] : "menu"
    );
  }, [pathname]);

  return (
    <div className="navbar bg-base-100 shadow-base rounded-3xl flex-wrap">
      <div className="navbar-start">
        <Link href={"/"} className="link pl-5">
          <Logo color="white" />
        </Link>
      </div>
      <div className="navbar-end gap-5 last:pr-5">
        <input
          type="text"
          placeholder="Поиск..."
          className="input input-bordered w-[25vw] max-w-xs rounded-3xl"
        />
        {!isAuth ? (
          <>
            <button className="btn btn-outline rounded-full w-32 flex justify-between" onClick={() => router.push("/login")}>
              Войти
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </>
        ) : (
          <>
            <div className="avatar">
              <div className="w-12 mask mask-squircle">
                <Image
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="Avatar"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="drawer lg:hidden">
              <input id="swapik" type="checkbox" className="drawer-toggle" />

              <label htmlFor="swapik" className="swap swap-rotate z-10 sm:z-0">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="swap-off fill-current [:checked~*_&]:!-rotate-45 [:checked~*_&]:!opacity-0 w-10 h-10"
                >
                  <path
                    d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>

                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="swap-on fill-current [:checked~*_&]:!rotate-0 [:checked~*_&]:!opacity-100 w-10 h-10"
                >
                  <path
                    d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </label>
              <div className="dropdown-content"></div>
              <div className="drawer-side">
                <label
                  htmlFor="swapik"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <li>
                    <Link href={"#"}>Личный кабинет</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Статистика</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Управление</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Выйти</Link>
                  </li>
                </ul>
              </div>
            </div>

            <select
              className="select select-bordered w-full max-w-xs rounded-3xl hidden lg:block "
              id="select"
              value={currentPath}
              onChange={(e) => {
                router.push("/" + e.target.value);
              }}
            >
              <option disabled value={"menu"}>
                Меню
              </option>
              <option value={"profile"}>Личный кабинет</option>
              {/* <option value={"statistics"}>Статистика</option> */}
              <option value={"management"}>Управление</option>
              <option value={"#"} onClick={() => {logout()
                Cookies.remove("token")
              }}>
                Выйти
              </option>
            </select>
          </>
        )}
      </div>
    </div>
  );
}
