import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Period from "../components/period/Period";
import { useState } from "react";
import { diffInDays } from "../utils/datetime";

const MONTH_IN_DAYS = 30;
const YEAR_IN_DAYS = 365;

const Home: NextPage = () => {
  const [periods, setPeriods] = useState<Array<[string, string]>>([]);
  const totalPeriod = periods.reduce((res, period) => {
    const [sDate, eDate] = period;
    return res + diffInDays(sDate, eDate);
  }, 0);
  const onAddPeriod = (sDate: string, eDate: string) => {
    setPeriods([...periods, [sDate, eDate]]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>날짜 기간 계산기</title>
        <meta name="description" content="간단한 날짜 기간 계산기" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>날짜 기간 계산기</h1>
        <Period onSubmit={onAddPeriod} />
        <ul>
          {periods.map((period, index) => {
            const [sDate, eDate] = period;
            return <li key={`period${index}`}>{`${sDate} - ${eDate}`}</li>;
          })}
        </ul>
        <ul>
          <li>총기간 일: {totalPeriod}</li>
          <li>총기간 월: {totalPeriod / MONTH_IN_DAYS}</li>
          <li>총기간 년: {totalPeriod / YEAR_IN_DAYS}</li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
