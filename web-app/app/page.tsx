"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("@/app/components/index"),
  { ssr: false }
);

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div>
      <Head>
        <title>Phaser Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div key={Math.random()} id="game"></div>
      {loading ? <DynamicComponentWithNoSSR /> : null}
    </div>
  );
}
