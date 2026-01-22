"use client";

import { useEffect, useState } from "react";
import styles from "./TypingTitle.module.css";

type TypingTitleProps = {
  text: string;
  speed?: number;
};

export function TypingTitle({ text, speed = 90 }: TypingTitleProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h1 className={styles.title}>
      {displayed}
      <span className={styles.cursor} />
    </h1>
  );
}
