import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "../utils/api";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Padding from "../components/layout/Padding";
import Head from "next/head";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Head>
          <meta name="description" content="Prayer Journaling Web App" />
          <link rel="icon" href="/favicon3.png" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
