import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Panditi Matrimony</title>
        <meta name="description" content="A Matrimony App" />
        <link rel="icon" href="/panditi-logo.svg" />
      </Head>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-50 sm:flex-row">
        <div className="hidden md:block">
          <iframe
            className="px-4 w-96 h-96"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
          ></iframe>
        </div>
        <div className="flex flex-col items-center justify-between m-10 pb-5 rounded-none md:w-96 md:h-96 xs:w-64">
          <Image
            src="/panditi-matrimony.svg"
            height={100}
            width={250}
            alt="Your Name"
          />
          <hr className="w-full border-2 rounded-full border-green-300 cursor-pointer hover:border-red-500 duration-500" />
          <input
            className="m-6 appearance-none border-1 h-10 bg-slate-200 w-full border-none p-5 font-normal hover:bg-slate-100 focus:bg-slate-100 focus:outline-1 focus:outline-slate-300 rounded"
            type="tel"
            id="panditi-login-mobile"
            name="panditi-login-mobile"
            placeholder="Mobile Number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
          <button
            className="text-white bg-cyan-900 w-full p-1 font-mono shadow shadow-black"
            type="button"
          >
            Login with OTP
          </button>
        </div>
      </div>
      <footer className="w-screen text-center bg-fuchsia-100 font-mono">
        &copy; Copyright 2022 Panditi Matrimony
      </footer>
    </div>
  );
}
