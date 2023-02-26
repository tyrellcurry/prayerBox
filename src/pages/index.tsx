import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { api } from "../utils/api";
import Nav from "../components/layout/Nav";
import Padding from "../components/layout/Padding";

const Home: any = () => {
  const hello = api.example.hello.useQuery({ text: "from PrayerBox" });

  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    session.status === "unauthenticated" && (
      <>
        <Head>
          <title>PrayerBox ✨</title>
        </Head>
        <Nav />
        <main className="bg-blue-100 dark:bg-slate-800">
          <Padding>
            <div className="flex min-h-screen flex-col items-center justify-center bg-blue-100 dark:bg-slate-800">
              <div className="container flex flex-col items-center justify-center gap-12 px-4 py-8 md:py-12 ">
                <h1 className="text-5xl font-extrabold tracking-tight text-slate-600 dark:text-white sm:text-[5rem]">
                  Prayer
                  <span className="text-orange-400 dark:text-[hsl(52,100%,70%)]">
                    Box
                  </span>
                </h1>
              </div>
            </div>
          </Padding>
        </main>
      </>
    )
  );
};

export default Home;
