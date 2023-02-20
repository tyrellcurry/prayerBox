import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { api } from "../../utils/api";

const AuthShowcase: React.FC = () => {
    const { data: sessionData } = useSession();
  
    return (
      <div>
        {/* {sessionData && <Image className="pt-3" src={sessionData.user?.image ?? ''} width={100} height={100} alt="Profile Image" /> }
        <p className="text-center text-2xl text-white">
          {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
          {secretMessage && <span> - {secretMessage}</span>}
        </p> */}
        <button
          className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? "Sign out" : "Sign in"}
        </button>
      </div>
    );
  };

  export default AuthShowcase;