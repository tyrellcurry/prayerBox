import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from "next-auth/react";
import AuthShowcase from "../../components/auth/AuthShowcase"
function dashboard() {
    const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push('/');
    }
  }, [session, router]);
  return (

    <>
    <div>dashboard</div>
    <AuthShowcase />
    </>
  )
}

export default dashboard