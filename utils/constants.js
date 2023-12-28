import Image from "next/image";
import styles from "../components/ExchangeRoadmap/PointTimeline/PointTimeLine.module.scss";
import React, { useState } from "react";

export const apiPriceUrl = process.env.bfic_Price;
export const apigetStatic = process.env.get_Statastics;
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaTelegramPlane,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import Link from "next/link";

export const dataBfic = [
  {
    id: 5,
    name: "Avg. fee per transcation",
    number: "$0.01",
  },
  {
    id: 6,
    name: "Nodes",
    number: "27",
  },
];

export const dataImage = [
  {
    id: 1,
    imageUrl: "/assets/icons/bficScan.png",
    name: "BFICscan",
    catagory: "Blockchain Explorer",
    socialMedia: [],
  },
  {
    id: 2,
    imageUrl: "/assets/icons/xchange.png",
    name: "xchange On",
    catagory: "CEX (Exchange)",
    socialMedia: [
      <Link href={"https://twitter.com/XChangeon"} target="_blank">
        <FaTwitter
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://www.instagram.com/xchangeon/"} target="_blank">
        <FaInstagram
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://www.facebook.com/XchangeOn"} target="_blank">
        <FaFacebookF
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://t.me/xchangeonbyinnovationfactory"} target="_blank">
        <FaTelegramPlane
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.youtube.com/channel/UCY0QYfhuuOZg1H1Ui6CzIQw"}
        target="_blank"
      >
        <FaYoutube
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,

      <Link href={"https://discord.gg/MCfVDmDyP3"} target="_blank">
        <FaDiscord
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
    ],
  },
  {
    id: 3,
    imageUrl: "/assets/icons/dexa.png",
    name: "dexa",
    catagory: "Decentralized Exchange",
    socialMedia: [
      <Link href={"https://twitter.com/dexa_official_"} target="_blank">
        <FaTwitter
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://www.instagram.com/dexa_official/"} target="_blank">
        <FaInstagram
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://discord.gg/ycHSnNBVsV"} target="_blank">
        <FaDiscord
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
    ],
  },
  {
    id: 4,
    imageUrl: "/assets/icons/loveWallet.png",
    name: "loveWallet",
    catagory: "Decentralized Wallet",
    socialMedia: [
      <Link href={"https://twitter.com/LoveWallet1"} target="_blank">
        <FaTwitter
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.instagram.com/lovewalletofficial/"}
        target="_blank"
      >
        <FaInstagram
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.facebook.com/lovewalletofficial"}
        target="_blank"
      >
        <FaFacebookF
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://t.me/+Jjarsk7Yx9BiY2Jk"} target="_blank">
        <FaTelegramPlane
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.youtube.com/channel/UCbVrCF6NjjvBKycw-KFsM6A"}
        target="_blank"
      >
        <FaYoutube
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,

      <Link href={"https://discord.gg/KNW833bbF9"} target="_blank">
        <FaDiscord
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
    ],
  },
  {
    id: 5,
    imageUrl: "/assets/icons/time2travel.png",
    name: "time2travel",
    catagory: "Travel & Immigration ",
    socialMedia: [
      <Link href={"https://twitter.com/Time_2_Travel_"} target="_blank">
        <FaTwitter
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://www.instagram.com/time2travel.biz/"} target="_blank">
        <FaInstagram
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.facebook.com/time2travelofficial"}
        target="_blank"
      >
        <FaFacebookF
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://t.me/time2travelofficial"} target="_blank">
        <FaTelegramPlane
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.youtube.com/channel/UCYVWXXChXhFnBQKueeUZ8Ig"}
        target="_blank"
      >
        <FaYoutube
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,

      <Link href={"https://discord.gg/g6bRaAF5Rv"} target="_blank">
        <FaDiscord
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
    ],
  },
  {
    id: 6,
    imageUrl: "/assets/icons/bfic-store.png",
    name: "BFIC store",
    catagory: "FMCG / Retail",
    socialMedia: [
      <Link href={"https://twitter.com/BStorebyBFICoin"} target="_blank">
        <FaTwitter
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.instagram.com/bstorebybficoin/?hl=en"}
        target="_blank"
      >
        <FaInstagram
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://www.facebook.com/Bstorebybficoin/"} target="_blank">
        <FaFacebookF
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://t.me/Bficstoreofficial"} target="_blank">
        <FaTelegramPlane
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.youtube.com/channel/UCMSxSuEqHr86MH42bj11cBw"}
        target="_blank"
      >
        <FaYoutube
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,

      <Link href={"https://discord.gg/4j23TzHZHX"} target="_blank">
        <FaDiscord
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
    ],
  },
  {
    id: 7,
    imageUrl: "/assets/icons/super11.png",
    name: "super11",
    catagory: "Gaming",
    socialMedia: [
      <Link href={"https://twitter.com/Super11Official"} target="_blank">
        <FaTwitter
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://www.instagram.com/super11official/"} target="_blank">
        <FaInstagram
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.facebook.com/profile.php?id=100090210840429"}
        target="_blank"
      >
        <FaFacebookF
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://t.me/Super_11Official"} target="_blank">
        <FaTelegramPlane
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.youtube.com/channel/UCGtxZ_o9YVmozfsrkN0Kz-w"}
        target="_blank"
      >
        <FaYoutube
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,

      <Link href={"https://discord.gg/UZTUqb5Czz"} target="_blank">
        <FaDiscord
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
    ],
  },
  {
    id: 8,
    imageUrl: "/assets/icons/meta.png",
    name: "MetaMall",
    catagory: "Metaverse",
  },
  {
    id: 9,
    imageUrl: "/assets/icons/bficAcademy.png",
    name: "Trust Academy",
    catagory: "Education",
    socialMedia: [
      <Link href={"https://twitter.com/BFICacademy"} target="_blank">
        <FaTwitter
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://www.instagram.com/bfic_academy/"} target="_blank">
        <FaInstagram
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={
          "https://www.facebook.com/BFIC-Academy-by-Innovation-Factory-103297562496313"
        }
        target="_blank"
      >
        <FaFacebookF
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://t.me/bficacademyforum"} target="_blank">
        <FaTelegramPlane
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.youtube.com/channel/UCv5tRNbllb66BEFnwQ2Pztw"}
        target="_blank"
      >
        <FaYoutube
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,

      <Link href={"https://discord.gg/2bQV2Gbfhu"} target="_blank">
        <FaDiscord
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
    ],
  },
  {
    id: 10,
    imageUrl: "/assets/icons/bficyoutube.png",
    name: "Cryptotube",
    catagory: "Entertainment",
  },
  {
    id: 11,
    imageUrl: "/assets/icons/cyrptocash.png",
    name: "Crypto Cash",
    catagory: "Fintech",
    socialMedia: [
      <Link href={"https://twitter.com/cryptocash_66"} target="_blank">
        <FaTwitter
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://www.instagram.com/thecryptocash.io/"} target="_blank">
        <FaInstagram
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={
          "https://www.facebook.com/cryptocashofficial"
        }
        target="_blank"
      >
        <FaFacebookF
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://t.me/crypto_cash_official"} target="_blank">
        <FaTelegramPlane
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.youtube.com/@cryptocash9586/"}
        target="_blank"
      >
        <FaYoutube
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,

      <Link href={"https://discord.gg/uZsYN5Xkx9"} target="_blank">
        <FaDiscord
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
    ],
  },
  {
    id: 12,
    imageUrl: "/assets/icons/payPlus.png",
    name: "Payplus",
    catagory: "Fintech",
    socialMedia: [
      <Link href={"https://twitter.com/PayPlusOfficial"} target="_blank">
        <FaTwitter
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://www.instagram.com/pay_plus_official/"} target="_blank">
        <FaInstagram
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={
          "https://www.facebook.com/PayPlus_Official-102498665970239"
        }
        target="_blank"
      >
        <FaFacebookF
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://t.me/payplusofficial"} target="_blank">
        <FaTelegramPlane
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.youtube.com/channel/UCVLc9-z5St-cXpkYOYi2JAQ"}
        target="_blank"
      >
        <FaYoutube
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,

      <Link href={"https://discord.gg/u72Tsd9QHG"} target="_blank">
        <FaDiscord
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
    ],
  },
  {
    id: 13,
    imageUrl: "/assets/icons/exploreWorld.png",
    name: "Explore The World",
    catagory: "Travel & Immigration ",
    socialMedia: [
      <Link href={"https://twitter.com/ETW_Official_"} target="_blank">
        <FaTwitter
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://www.instagram.com/etw_official_/"} target="_blank">
        <FaInstagram
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={
          "https://www.facebook.com/ETW_Official-100708872819994"
        }
        target="_blank"
      >
        <FaFacebookF
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://t.me/etw_official"} target="_blank">
        <FaTelegramPlane
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.youtube.com/channel/UCYF1wKqS7A8vDCxTQ3WhBsw"}
        target="_blank"
      >
        <FaYoutube
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,

      <Link href={"https://discord.gg/rWUWpRaSDt"} target="_blank">
        <FaDiscord
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
    ],
  },
  {
    id: 14,
    imageUrl: "/assets/icons/fo.png",
    name: "Full On",
    catagory: "Entertainment",
    socialMedia: [
      <Link href={"https://twitter.com/FullOn_Official"} target="_blank">
        <FaTwitter
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://www.instagram.com/fullon_official/"} target="_blank">
        <FaInstagram
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={
          "https://www.facebook.com/profile.php?id=100090037482928"
        }
        target="_blank"
      >
        <FaFacebookF
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://t.me/FullOn_Official"} target="_blank">
        <FaTelegramPlane
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.youtube.com/channel/UCUHfvJr2LF-f-GQVAcbkVhw"}
        target="_blank"
      >
        <FaYoutube
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,

      <Link href={"https://discord.gg/dBvNbbC4hY"} target="_blank">
        <FaDiscord
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
    ],
  },
  {
    id: 15,
    imageUrl: "/assets/icons/jokers.png",
    name: "jokers",
    catagory: "Entertainment",
    socialMedia: [
      <Link href={"https://twitter.com/JokerzOfficial_"} target="_blank">
        <FaTwitter
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://www.instagram.com/_jokerz_official/"} target="_blank">
        <FaInstagram
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={
          "https://www.facebook.com/Jokerz-103652712518339"
        }
        target="_blank"
      >
        <FaFacebookF
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://t.me/jokerzofficial"} target="_blank">
        <FaTelegramPlane
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.youtube.com/channel/UCGylEUxW5_i8cWJTee3yfqw"}
        target="_blank"
      >
        <FaYoutube
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,

      <Link href={"https://discord.gg/eTfRDApGw9"} target="_blank">
        <FaDiscord
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
    ],
  },
  {
    id: 16,
    imageUrl: "/assets/icons/trump.png",
    name: "Trump Card",
    catagory: "Fintech",
    socialMedia: [
      <Link href={"https://twitter.com/_TrumpCard_"} target="_blank">
        <FaTwitter
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://www.instagram.com/_trumpcard_/"} target="_blank">
        <FaInstagram
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={
          "https://www.facebook.com/profile.php?id=100087341754592"
        }
        target="_blank"
      >
        <FaFacebookF
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://t.me/trumpcardofficial"} target="_blank">
        <FaTelegramPlane
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.youtube.com/channel/UCgoDabtjKr1D-fzwoAn3iFg"}
        target="_blank"
      >
        <FaYoutube
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,

      <Link href={"https://discord.gg/RwJsapPcDh"} target="_blank">
        <FaDiscord
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
    ],
  },
  {
    id: 17,
    imageUrl: "/assets/icons/1st.png",
    name: "1st Investment",
    catagory: "Fintech",
    socialMedia: [

      <Link
        href={
          "https://www.facebook.com/1stinvestmentofficial"
        }
        target="_blank"
      >
        <FaFacebookF
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://t.me/investmentofficialchat"} target="_blank">
        <FaTelegramPlane
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.youtube.com/channel/UCX8WgBOqHKyJRzt0fYcehMg"}
        target="_blank"
      >
        <FaYoutube
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,

      <Link href={"https://discord.gg/bCYXv887Wn"} target="_blank">
        <FaDiscord
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
    ],
  },
  {
    id: 18,
    imageUrl: "/assets/icons/bficnetwork.png",
    name: "BFIC Network",
    catagory: "Fintech",
    socialMedia: [
      <Link href={"https://twitter.com/BFICBLove"} target="_blank">
        <FaTwitter
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://www.instagram.com/bficblovenetwork/"} target="_blank">
        <FaInstagram
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={
          "https://www.facebook.com/Bficblovenetwork"
        }
        target="_blank"
      >
        <FaFacebookF
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://t.me/+lZfudFWL1kI4ZmZk"} target="_blank">
        <FaTelegramPlane
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.youtube.com/channel/UCjbYeJUnvOK3MoeYPQb1g9g"}
        target="_blank"
      >
        <FaYoutube
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,

      <Link href={"https://discord.gg/pSUHaZtds6"} target="_blank">
        <FaDiscord
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
    ],
    
  },
  {
    id: 19,
    imageUrl: "/assets/icons/blovenetwork.png",
    name: "B-love Network",
    catagory: "Fintech",
    socialMedia: [
      <Link href={"https://twitter.com/BFICBLove"} target="_blank">
        <FaTwitter
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://www.instagram.com/bficblovenetwork/"} target="_blank">
        <FaInstagram
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={
          "https://www.facebook.com/Bficblovenetwork"
        }
        target="_blank"
      >
        <FaFacebookF
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://t.me/+lZfudFWL1kI4ZmZk"} target="_blank">
        <FaTelegramPlane
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.youtube.com/channel/UCjbYeJUnvOK3MoeYPQb1g9g"}
        target="_blank"
      >
        <FaYoutube
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,

      <Link href={"https://discord.gg/pSUHaZtds6"} target="_blank">
        <FaDiscord
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
    ],
  },
  {
    id: 20,
    imageUrl: "/assets/icons/belluto.png",
    name: "Bulleto",
    catagory: "Fintech",
    socialMedia: [
      <Link href={"https://twitter.com/Bulletoofficial"} target="_blank">
        <FaTwitter
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://www.instagram.com/bulletoofficial/"} target="_blank">
        <FaInstagram
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={
          "https://www.facebook.com/bulletoofficial"
        }
        target="_blank"
      >
        <FaFacebookF
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://t.me/bulletobyinnovationfactory"} target="_blank">
        <FaTelegramPlane
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.youtube.com/channel/UCi-pyPi4TRq6mRNJHxZagRQ"}
        target="_blank"
      >
        <FaYoutube
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,

      <Link href={"https://discord.gg/9WJH8F8jrP"} target="_blank">
        <FaDiscord
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
    ],
  },
  {
    id: 21,
    imageUrl: "/assets/icons/project.png",
    name: "P2Proprties",
    catagory: "Real Estate",
  },

  {
    id: 22,
    imageUrl: "/assets/icons/snack.png",
    name: "Snake & Ladder",
    catagory: "Gaming",
  },
  {
    id: 23,
    imageUrl: "/assets/icons/blockhub.png",
    name: "BlockHub",
    catagory: "Development",
  },
  {
    id: 24,
    imageUrl: "/assets/icons/bbonds.png",
    name: "Bbonds",
    catagory: "Fintech",
    socialMedia: [
      <Link href={"https://twitter.com/Bbondsofficial"} target="_blank">
        <FaTwitter
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://www.instagram.com/bbondsofficial/"} target="_blank">
        <FaInstagram
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={
          "https://www.facebook.com/bbondsofficial"
        }
        target="_blank"
      >
        <FaFacebookF
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://t.me/bbonds_official"} target="_blank">
        <FaTelegramPlane
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.youtube.com/channel/UCdzaI3rZ1SPXnWvWdgRExdg"}
        target="_blank"
      >
        <FaYoutube
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,

      <Link href={"https://discord.gg/T6Ryp3X5cq"} target="_blank">
        <FaDiscord
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
    ],
  },
  {
    id: 25,
    imageUrl: "/assets/icons/blokes.png",
    name: "Idol Blocks",
    catagory: "Gaming ",
  },
  {
    id: 26,
    imageUrl: "/assets/icons/InsuredTrading.png",
    name: "Insured Trading",
    catagory: "Entertainment",
  },
  {
    id: 27,
    imageUrl: "/assets/icons/VirtualMeet.png",
    name: "Virtual Meet",
    catagory: "Fintech",
  },

  {
    id: 28,
    imageUrl: "/assets/icons/payBlock.png",
    name: "SoPae",
    catagory: "Fintech",
    socialMedia: [
      <Link href={"https://twitter.com/SoPae_Official"} target="_blank">
        <FaTwitter
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://www.instagram.com/sopae_official/"} target="_blank">
        <FaInstagram
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={
          "https://www.facebook.com/profile.php?id=100089949287588"
        }
        target="_blank"
      >
        <FaFacebookF
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link href={"https://t.me/SoPae_Official"} target="_blank">
        <FaTelegramPlane
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
      <Link
        href={"https://www.youtube.com/channel/UCOtqY8DVvLtIomud1D7Jo6A"}
        target="_blank"
      >
        <FaYoutube
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,

      <Link href={"https://discord.gg/HKupnHKfTv"} target="_blank">
        <FaDiscord
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            padding: "4px",
          }}
        />
      </Link>,
    ],
  },
];

export const joinBfic = [
  {
    id: "col_1",
    caption: "up",
    imgs: [
      {
        id: "col_1_1",
        imgUrl: "/assets/Images/zeeSenior.png",
      },
      {
        id: "col_1_1",
        imgUrl: "/assets/Images/richvspoor.png",
      },
    ],
  },

  {
    id: "col_2",
    caption: "normal",
    imgs: [
      {
        id: "col_2_1",
        imgUrl: "/assets/Images/party.png",
      },
      {
        id: "col_2_2",
        imgUrl: "/assets/Images/bficLive.png",
      },
    ],
  },

  {
    id: "col_3",
    caption: "down",
    imgs: [
      {
        id: "col_3_1",
        imgUrl: "/assets/Images/richvspoor.png",
      },
      {
        id: "col_3_2",
        imgUrl: "/assets/Images/zeeSenior.png",
      },
    ],
  },

  {
    id: "col_4",
    caption: "normal",
    imgs: [
      {
        id: "col_2_1",
        imgUrl: "/assets/Images/party.png",
      },
      {
        id: "col_2_2",
        imgUrl: "/assets/Images/bficLive.png",
      },
    ],
  },

  {
    id: "col_5",
    caption: "down",
    imgs: [
      {
        id: "col_3_1",
        imgUrl: "/assets/Images/richvspoor.png",
      },
      {
        id: "col_3_2",
        imgUrl: "/assets/Images/zeeSenior.png",
      },
    ],
  },
];

export const btnFilter = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "crypto Commerce",
  },
  {
    id: 3,
    name: "DeFi",
  },
  {
    id: 4,
    name: "GameFi",
  },
  {
    id: 5,
    name: "NFT",
  },
  {
    id: 6,
    name: "pos",
  },
];

export const blogs = [
  {
    id: 1,
    title: "Events",
    details: [
      {
        id: 1,
        imgUrl: "/assets/images/blogsevents.png",
        name: "event Name",
      },
      {
        id: 2,
        imgUrl: "/assets/images/blogsevents.png",
        name: "event Name",
      },
      {
        id: 3,
        imgUrl: "/assets/images/blogsevents.png",
        name: "event Name",
      },
      {
        id: 4,
        imgUrl: "/assets/images/blogsevents.png",
        name: "event Name",
      },
    ],
  },
  {
    id: 2,
    title: "Webinar Name",
    details: [
      {
        id: 1,
        imgUrl: "/assets/images/blogs.png",
        name: "Webinar Name",
      },
      {
        id: 2,
        imgUrl: "/assets/images/blogs.png",
        name: "Webinar Name",
      },
      {
        id: 3,
        imgUrl: "/assets/images/blogs.png",
        name: "Webinar Name",
      },
      {
        id: 4,
        imgUrl: "/assets/images/blogs.png",
        name: "Webinar Name",
      },
    ],
  },

  {
    id: 3,
    title: "News 01",
    details: [
      {
        id: 1,
        imgUrl: "/assets/images/blogs.png",
        name: "News 01 Name",
      },
      {
        id: 2,
        imgUrl: "/assets/images/blogs.png",
        name: "News 01 Name",
      },
      {
        id: 3,
        imgUrl: "/assets/images/blogs.png",
        name: "News 01 Name",
      },
      {
        id: 4,
        imgUrl: "/assets/images/blogs.png",
        name: "News 01 Name",
      },
    ],
  },
];

export const dateTimeLine = [
  {
    id: "dateTimeLine_1",
    detailsDown: {
      date: "2021 - Q1",
      dataDown: ["BFIC Token Launch", " Ecosystem Design"],
    },
    detailsUp: {
      date: "2021 - Q2",
      dataUp: ["BBONDS", " BULLETO Smart Contract"],
    },
  },

  {
    id: "dateTimeLine_2",
    detailsDown: {
      date: "2021 - Q3",
      dataDown: ["BFIC Mainnet & Network 1st Investment"],
    },
    detailsUp: {
      date: "2021 - Q4",
      dataUp: ["Eco System Hard Fork", "XchangeOn"],
    },
  },

  {
    id: "dateTimeLine_3",
    detailsDown: {
      date: "2022 - Q1",
      dataDown: ["Trump Card", "Virtual Meet", "Exchange Listing"],
    },
    detailsUp: {
      date: "2022 - Q2",
      dataUp: ["BFIC Store", "Crypto Cash", "Insured Trading"],
    },
  },

  {
    id: "dateTimeLine_4",
    detailsDown: {
      date: "2022 - Q3",
      dataDown: ["BlockHub", "Time Travel"],
    },
    detailsUp: {
      date: "2022 - Q4",
      dataUp: ["XchangeOn", "DEX", "Snake & Ladder", "IdolBlocks"],
    },
  },
];

export const dataTopCrawles = [
  {
    id: 1,
    imageUrl: "/assets/imagesTopCrawlers/crawerls1.png",
  },
  {
    id: 2,
    imageUrl: "/assets/imagesTopCrawlers/crawerls2.png",
  },
  {
    id: 3,
    imageUrl: "/assets/imagesTopCrawlers/crawerls3.png",
  },
  {
    id: 4,
    imageUrl: "/assets/imagesTopCrawlers/crawerls4.png",
  },
  {
    id: 5,
    imageUrl: "/assets/imagesTopCrawlers/crawerls5.png",
  },
  {
    id: 6,
    imageUrl: "/assets/imagesTopCrawlers/crawerls6.png",
  },
  {
    id: 7,
    imageUrl: "/assets/imagesTopCrawlers/crawerls7.png",
  },
  {
    id: 8,
    imageUrl: "/assets/imagesTopCrawlers/crawerls8.png",
  },
  {
    id: 9,
    imageUrl: "/assets/imagesTopCrawlers/crawerls19.png",
  },
  {
    id: 10,
    imageUrl: "/assets/imagesTopCrawlers/crawerls9.png",
  },
  {
    id: 11,
    imageUrl: "/assets/imagesTopCrawlers/crawerls10.png",
  },
  {
    id: 12,
    imageUrl: "/assets/imagesTopCrawlers/crawerls11.png",
  },

  {
    id: 13,
    imageUrl: "/assets/imagesTopCrawlers/crawerls20.png",
  },

  {
    id: 14,
    imageUrl: "/assets/imagesTopCrawlers/crawerls12.png",
  },
  {
    id: 15,
    imageUrl: "/assets/imagesTopCrawlers/crawerls13.png",
  },
  {
    id: 16,
    imageUrl: "/assets/imagesTopCrawlers/crawerls14.png",
  },
  {
    id: 17,
    imageUrl: "/assets/imagesTopCrawlers/crawerls15.png",
  },
  {
    id: 18,
    imageUrl: "/assets/imagesTopCrawlers/crawerls16.png",
  },

  {
    id: 19,
    imageUrl: "/assets/imagesTopCrawlers/crawerls18.png",
  },
];

export const dateTime2 = [
  {
    id: "dateTimeLine_1",
    detailsDown: {
      date: "2022",
      month: "NOV - DEC",
      dataDown: [
        <div className={styles.boxImages}>
          <Image
            src="/assets/imagestimeline/dig.png"
            width={160}
            height={40}
            quality={100}
            priority
            className={styles.icons}
          />
        </div>,
        <div className={styles.boxImages}>
          <Image
            src="/assets/imagestimeline/bitmart.png"
            width={160}
            height={40}
            quality={100}
            priority
            className={styles.icons}
          />
        </div>,
        <div className={styles.boxImages}>
          <Image
            src="/assets/imagestimeline/uniswap.png"
            width={160}
            height={40}
            quality={100}
            priority
            className={styles.icons}
          />
        </div>,
        <div className={styles.boxImages}>
          <Image
            src="/assets/imagestimeline/panckaSwap.png"
            width={160}
            height={40}
            quality={100}
            priority
            className="max-h-full h-9"
          />
        </div>,
      ],
    },
    detailsUp: {
      date: "2023 ",
      month: "JAN - FEB",
      dataUp: [
        <div
          style={{
            height: "35px",
            marginBottom: "0.5rem",
            width: "160px",
          }}
        >
          <Image
            src="/assets/imagestimeline/hit.png"
            width={123}
            height={30}
            quality={100}
            priority
          />
        </div>,
        <div
          style={{
            height: "35px",
            width: "140px",
            marginTop: " 0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <Image
            src="/assets/imagestimeline/bitMex.png"
            width={123}
            height={30}
            quality={100}
            priority
          />
        </div>,
        <div
          style={{
            height: "35px",
            width: "100px",
            marginBottom: "0.5rem",
          }}
        >
          <Image
            src="/assets/imagestimeline/bitHumb.png"
            width={134}
            height={40}
            quality={100}
            priority
            className={styles.icons}
          />
        </div>,

        <div
          style={{
            height: "25px",
            width: "120px",
            marginTop: " 0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <Image
            src="/assets/imagestimeline/bitRex.png"
            width={134}
            height={25}
            quality={100}
            priority
            className={styles.icons}
          />
        </div>,
      ],
    },
  },

  {
    id: "dateTimeLine_2",
    detailsDown: {
      date: "2023",
      month: "MAR - MAY",
      dataDown: [
        <div
          style={{
            height: "25px",
            marginTop: " 0.5rem",
            marginBottom: "0.5rem",
            width: "200px",
          }}
        >
          <Image
            src="/assets/imagestimeline/mexc.png"
            width={200}
            height={40}
            quality={100}
            priority
            className={styles.icons}
          />
        </div>,
        <div className={styles.boxImages}>
          <Image
            src="/assets/imagestimeline/consbit.png"
            width={160}
            height={40}
          />
        </div>,
        <div style={{ height: "34px", width: "100%", marginTop: " 0.5rem" }}>
          <Image
            src="/assets/imagestimeline/gate.io.png"
            width={160}
            height={40}
            quality={100}
            priority
            className={styles.icons}
          />
        </div>,
      ],
    },
    detailsUp: {
      date: "2023 ",
      month: "JUN - AUG",
      dataUp: [
        <div style={{ height: "30px", width: "145px", marginBottom: "0.5rem" }}>
          <Image
            src="/assets/imagestimeline/polo.png"
            width={160}
            height={25}
            quality={100}
            priority
            className={styles.icons}
          />
        </div>,
        <div
          style={{
            height: "27px",
            width: "90px",
            marginTop: " 0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <Image
            src="/assets/imagestimeline/bitbank.png"
            width={160}
            height={26}
            quality={100}
            priority
            className={styles.icons}
          />
        </div>,
        <div
          style={{
            height: "27px",
            width: "70px",
            marginTop: " 0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <Image
            src="/assets/imagestimeline/bybit.png"
            width={160}
            height={40}
            quality={100}
            priority
            className={styles.icons}
          />
        </div>,
      ],
    },
  },

  {
    id: "dateTimeLine_3",
    detailsDown: {
      date: "2023",
      month: "SEP - NOV",
      dataDown: [
        <div
          style={{
            height: "25px",
            marginTop: " 0.5rem",
            marginBottom: "0.8rem",
            width: "200px",
          }}
        >
          <Image
            src="/assets/imagestimeline/okx.png"
            width={90}
            height={40}
            quality={100}
            priority
            className={styles.icons}
          />
        </div>,
        <div
          style={{
            height: "30px",
            marginTop: " 0.5rem",
            marginBottom: "0.5rem",
            width: "200px",
          }}
        >
          <Image
            src="/assets/imagestimeline/liquid.png"
            width={130}
            height={26}
            quality={100}
            priority
          />
        </div>,
        <div
          style={{
            height: "25px",
            marginTop: " 0.8rem",

            width: "200px",
          }}
        >
          <Image
            src="/assets/imagestimeline/kraken.png"
            width={160}
            height={25}
            quality={100}
            priority
            className={styles.icons}
          />
        </div>,
      ],
    },
    detailsUp: {
      date: "2023 ",
      month: "DEC - DEC",
      dataUp: [
        <div className={styles.boxImages}>
          <Image
            src="/assets/imagestimeline/kucoin.png"
            width={160}
            height={40}
            quality={100}
            priority
            className={styles.icons}
          />
        </div>,
      ],
    },
  },

  {
    id: "dateTimeLine_4",
    detailsDown: {
      date: "2024",
      month: "JAN - DEC",
      dataDown: [
        <div
          style={{
            height: "30px",
            marginTop: " 0.5rem",
            marginBottom: "0.8rem",
            width: "200px",
          }}
        >
          <Image
            src="/assets/imagestimeline/binance.png"
            width={160}
            height={60}
            quality={100}
            priority
            className={styles.icons}
          />
        </div>,
        <div
          style={{
            height: "30px",
            marginTop: " 0.5rem",
            marginBottom: "0.5rem",
            width: "200px",
          }}
        >
          <Image
            src="/assets/imagestimeline/coinbase.png"
            width={130}
            height={26}
            quality={100}
            priority
          />
        </div>,
      ],
    },
    detailsUp: {
      date: "",
      month: "",
      dataUp: [],
    },
  },
];
