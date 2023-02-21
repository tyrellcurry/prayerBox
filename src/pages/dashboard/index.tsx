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

  // Declare the variable outside of the fetch function
  let responseData;

  var myHeaders = new Headers();
  myHeaders.append("api-key", "f016cf0177b4aaa543d94e80df34cf26");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://api.scripture.api.bible/v1/bibles/06125adad2d5898a-01/search?query=love&limit=20", requestOptions)
    .then((response) => response.json()) // Use response.json() instead of response.text() to parse the response as JSON
    .then((result) => {
      responseData = result; // Assign the response to the variable
      console.log(responseData); // You can log the variable here to confirm that it has been assigned
    })
    .catch((error) => console.log("error", error));


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
      </>
    )
  );
}

export default dashboard;
