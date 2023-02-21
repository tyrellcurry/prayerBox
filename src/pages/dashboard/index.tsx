import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import AuthShowcase from "../../components/auth/AuthButton";
import Image from "next/image";
import VerseSearch from "../../components/api/VerseSearch";

function dashboard() {
  const session = useSession();
  const router = useRouter();
  const { data: sessionData } = useSession();
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/");
    }
  }, [session, router]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchCount, setSearchCount] = useState(0);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchValue(searchTerm);
    setSearchCount((prevCount) => prevCount + 1);
  };

  return (
    session.status === "authenticated" && (
      <>
        <div className="py-2 text-center text-5xl font-semibold">Dashboard</div>
        <div className="flex flex-col items-center">
          <div className="panel flex flex-col items-center">
            {sessionData && (
              <Image
                className="py-3"
                src={sessionData.user?.image ?? ""}
                width={100}
                height={100}
                alt="Profile Image"
              />
            )}
            <p className="pb-3">
              {sessionData && <span>{sessionData.account?.provider}</span>}
            </p>
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
        <div className="m-auto max-w-[700px]">
          <form onSubmit={handleSearchSubmit}>
            <div className="flex justify-center py-4">
              <input
                className="px-2 text-slate-800"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="ml-2 bg-slate-200 px-4 text-slate-800 hover:bg-slate-300"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
          {searchValue && (
            <VerseSearch key={searchCount} search={searchValue} />
          )}
        </div>
      </>
    )
  );
}

export default dashboard;
