import BuyBficHero from "@/components/BuyBficHero/BuyBficHero";
import React from "react";
import Head from "next/head";
import GetYourBfic from "@/components/GetYourBfic/GetYourBfic";
import TopCrawlers from "@/components/TopCrawlers/TopCrawlers";
import SupportedWallets from "@/components/SupporteWallets/SupportedWallets";
import ExchangeRoadmap from "@/components/ExchangeRoadmap/ExchangeRoadmap";

const buyBfic = () => {
  return (
    <>
      <Head>
        <title>Buy - BFIC</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icons/favicon.ico" />
      </Head>
      <main>
        <BuyBficHero />
        <GetYourBfic />
        <TopCrawlers />
        <SupportedWallets />
        <ExchangeRoadmap />
      </main>
    </>
  );
};

export default buyBfic;
