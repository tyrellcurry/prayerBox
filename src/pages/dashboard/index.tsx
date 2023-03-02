import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import AuthShowcase from "../../components/auth/AuthButton";
import VerseSearch from "../../components/scripture/VerseSearch";
import Image from "next/image";
import AppNav from "../../components/layout/AppNav";
import Head from "next/head";

function dashboard() {
  const session = useSession();
  const router = useRouter();
  const { data: sessionData } = useSession();
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/");
    }
  }, [session, router]);

  return (
    session.status === "authenticated" && (
      <>
        <Head>
          <title>Account Dashboard | {sessionData?.user?.name}</title>
        </Head>
        <AppNav />
        <div className="py-2 text-center text-5xl font-semibold">Dashboard</div>
        <div className="flex flex-col items-center">
          <div className="panel flex flex-col items-center">
            {sessionData?.user?.image && (
              <Image
                className="py-3"
                src={sessionData?.user?.image ?? ""}
                width={100}
                height={100}
                alt="Profile Image"
              />
            )}
            <p className="pb-3">
              {sessionData && <span>Name: {sessionData.user?.name}</span>}
            </p>
            <p className="pb-3">
              {" "}
              {sessionData && <span>Email: {sessionData.user?.email}</span>}
            </p>
          </div>
          <AuthShowcase />
        </div>
        <VerseSearch />
      </>
    )
  );
}

export default dashboard;
