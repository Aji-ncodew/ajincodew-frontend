import Head from "next/head";
import Landing from "../Components/HomePage/Landing";

// import { Inter } from '@next/font/google'

import { useState, useEffect } from "react";
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Head>
        <title>
        Aji ncodew
        </title>
        <meta name="description" content="NSCC Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Landing />
        {/* <CardElements />
        <About />
        <TimelineF />
        <ClubActivities /> */}
      </main>
    </>
  );
}
