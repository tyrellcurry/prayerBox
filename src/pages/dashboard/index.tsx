import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import AuthShowcase from "../../components/auth/AuthButton";
import Image from "next/image";

function dashboard() {
  const session = useSession();
  const router = useRouter();
  const { data: sessionData } = useSession();
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/");
    }
  }, [session, router]);
  return session.status === "authenticated" && (
    <>
      <div className="text-center text-5xl py-2 font-semibold">Dashboard</div>
      <div className="flex items-center flex-col">
        <div className="panel flex items-center flex-col">
          {sessionData && (
            <Image
              className="py-3"
              src={sessionData.user?.image ?? ""}
              width={100}
              height={100}
              alt="Profile Image"
            />
          )}
          <p className="pb-3">{sessionData && <span>{sessionData.account?.provider}</span>}</p>
          <p className="pb-3">
            {sessionData && <span>Name: {sessionData.user?.name}</span>}
          </p>
          <p className="pb-3"> {sessionData && <span>Email: {sessionData.user?.email}</span>}</p>
        </div>
        <AuthShowcase />
      </div>
    </>
  );
}

export default dashboard;
