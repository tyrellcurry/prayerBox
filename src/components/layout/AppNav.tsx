import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import ThemeToggler from "../darkmode/ThemeToggler";
import AuthButton from "../auth/AuthButton";
import Padding from "./Padding";
function AppNav() {
  const { data: sessionData } = useSession();
  const router = useRouter();
  const isActive = (href) => router.pathname === href;
  const navLinks = [
    {
      name: "Dashboard",
      url: "/dashboard",
    },
    {
      name: "Journal Entries",
      url: "/journals",
    },
  ];
  return (
    <>
      <div className="absolute pt-4">
        <Padding>
          <button className="menu_btn w-fit rounded-lg bg-slate-400 p-3 py-2">
            <svg
              className="h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              {/*<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->*/}
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </Padding>
      </div>
      <nav className="">
        <div className="box absolute flex h-full flex-col justify-between bg-slate-500 p-8 dark:bg-slate-800 dark:text-slate-300">
          <ul>
            {navLinks.map((links) => (
              <li className="pb-4">
                <a
                  href={links.url}
                  className={`block w-full text-center ${
                    isActive(links.url) ? "bg-blue-700 text-white dark:bg-blue-500" : "bg-gray-300 dark:bg-gray-500"
                  } rounded-md px-4 py-2 text-sm font-medium`}
                >
                  {links.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="bottom flex flex-col items-center">
            <div className="pt-4">
              <div className="panel flex justify-center pb-4">
                {sessionData?.user?.image && (
                  <>
                    <div
                      className="h-10 w-10 rounded-full bg-slate-200"
                      style={{
                        backgroundImage: `url(${
                          sessionData?.user?.image || ""
                        })`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </>
                )}
              </div>

              <AuthButton />
            </div>
            <div className="pt-4">
              <ThemeToggler />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default AppNav;
