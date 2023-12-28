import Head from "next/head";
import styles from "@/scss/Home.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import WhatIsBfic from "@/components/WhatIsBfic/WhatIsBfic";
import BficBlockChain from "@/components/BficBlockChain/BficBlockChain";
import CrossBlockchain from "@/components/CrossBlockchain/CrossBlockchain";
import ProjectBFICNetwork from "@/components/ProjectBFICNetwork/ProjectBFICNetwork";
import JoinBfic from "@/components/Joinbfic/JoinBfic";
import TimeLine from "@/components/TimeLine/TimeLine";
import CardsBfic from "@/components/Cards/CardsBfic";
import axios from "axios";
import { apigetStatic, apiPriceUrl } from "@/utils/constants";

function Home() {
  return (
    <>
      <Head>
        <title>BFIC</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icons/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <Navbar />
          <Hero />
        </div>
        <WhatIsBfic  />
        <CardsBfic />
        <BficBlockChain />
        <CrossBlockchain />
        <ProjectBFICNetwork />
        <TimeLine />
        <JoinBfic />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const resPrice = await fetch(apiPriceUrl);


  // const responseBficPrice = await axios.get(apiPriceUrl).then((res) => res.data)
  // const responseGetStatics = await axios
  //   .get(apigetStatic)
  //   .then((res) => res.data)
  return {
    props: {
      
    },
  };
}

export default Home;
