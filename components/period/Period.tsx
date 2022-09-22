import React, { useState } from "react";
import styles from "./period.module.css";

interface PeriodProps {
  onSubmit: (sDate: string, eDate: string) => void;
}

export default function Period(props: PeriodProps) {
  const { onSubmit } = props;
  const [sDate, setSDate] = useState("");
  const [eDate, setEDate] = useState("");

  const onSDateChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSDate(e.target.value);
  };

  const onEDateChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEDate(e.target.value);
  };

  const onPeriodSubmit = () => {
    onSubmit(sDate, eDate);
    setSDate("");
    setEDate("");
  };

  return (
    <div className={styles["period"]}>
      <input type="date" onChange={onSDateChange} value={sDate} />
      <span>~</span>
      <input type="date" onChange={onEDateChange} value={eDate} />
      <button onClick={onPeriodSubmit}>추가</button>
    </div>
  );
}
