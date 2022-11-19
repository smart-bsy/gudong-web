import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-auto">
        <div>
          <div className=" font-bold text-2xl mt-6 inline-block h-10 w-52 text-center rounded-md pt-1 bg-purple-500">
            LOGO 在此
          </div>
          <div className=" w-max float-right">
            <div className="text-black font-bold font-mono text-xl text-right mt-9">
              我的股份: 50股
            </div>
            <div className=" text-black font-bold font-mono text-xl text-right">
              ID : 00000xxx1
            </div>
          </div>
        </div>
        <div className=" mt-10 clear-right">
          <div className=" h-[12.5rem] w-[54rem] m-auto text-center bg-fuchsia-300 font-mono text-white font-bold text-xl">
            这是一场社会实验
          </div>
          <div className=" h-[12.5rem] w-[54rem] mt-8 m-auto text-center bg-sky-300 font-mono text-white font-bold text-xl">
            这是一场社会实验
          </div>
          <div className=" h-[12.5rem] w-[54rem] mt-8 m-auto text-center bg-amber-200 font-mono text-white font-bold text-xl">
            这是一场社会实验
          </div>
          <div className=" h-[12.5rem] w-[54rem] mt-8 m-auto text-center bg-rose-200 font-mono text-white font-bold text-xl">
            这是一场社会实验
          </div>
          <div className=" h-[12.5rem] w-[54rem] mt-8 m-auto text-center bg-lime-400 font-mono text-white font-bold text-xl">
            这是一场社会实验
          </div>
          <div className=" h-[12.5rem] w-[54rem] mt-8 m-auto text-center bg-teal-600 font-mono text-white font-bold text-xl">
            这是一场社会实验
          </div>
        </div>
      </div>
    </div>
  );
}
