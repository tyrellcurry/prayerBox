import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../server/auth";
import Image from "next/image";

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(providers);
  return (
    <>
      <section className="flex h-screen">
        <div className="bg_left h-screen w-1/3 bg-[url('https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')] bg-cover bg-center bg-no-repeat"></div>
        <div className="signin flex w-2/3 items-center justify-center px-5">
          <div className="signin_container h-2/3 w-full max-w-[700px] bg-slate-300 flex flex-col justify-center items-center rounded-lg">
            <h1 className="pb-4 text-2xl font-semibold">Sign In</h1>
              {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                  <button
                    className="flex items-center justify-center gap-x-2 rounded-lg bg-white p-7 py-2 drop-shadow-sm hover:drop-shadow-md"
                    onClick={() => signIn(provider.id)}
                  >
                    {provider.id === "google" && (
                      <Image
                        className="h-5 w-5"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 32 32' width='64' height='64'%3E%3Cdefs%3E%3Cpath id='A' d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'/%3E%3C/defs%3E%3CclipPath id='B'%3E%3Cuse xlink:href='%23A'/%3E%3C/clipPath%3E%3Cg transform='matrix(.727273 0 0 .727273 -.954545 -1.45455)'%3E%3Cpath d='M0 37V11l17 13z' clip-path='url(%23B)' fill='%23fbbc05'/%3E%3Cpath d='M0 11l17 13 7-6.1L48 14V0H0z' clip-path='url(%23B)' fill='%23ea4335'/%3E%3Cpath d='M0 37l30-23 7.9 1L48 0v48H0z' clip-path='url(%23B)' fill='%2334a853'/%3E%3Cpath d='M48 48L17 24l-4-3 35-10z' clip-path='url(%23B)' fill='%234285f4'/%3E%3C/g%3E%3C/svg%3E"
                        alt="Google"
                        height={100}
                        width={100}
                      />
                    )}{" "}
                    Sign in with {provider.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
