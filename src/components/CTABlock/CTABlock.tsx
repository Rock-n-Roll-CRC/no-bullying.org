import Link from "next/link";

import { merriweather } from "@/utilities/fonts";

import styles from "./CTABlock.module.scss";

const CTABlock = ({ lang }: { lang?: "ru" }) => {
  return (
    <article className={styles["cta-block"]}>
      <p
        className={`${styles["cta-block__heading"] ?? ""} ${merriweather.className}`}
      >
        {lang === "ru" ? "Давайте начнём!" : <>Let&apos;s get started</>}
      </p>

      <Link
        href={lang === "ru" ? "/ru/quiz" : "/quiz"}
        className={styles["cta-block__cta"]}
      >
        {lang === "ru" ? "Пройти викторину" : "Take the quiz"}
      </Link>
    </article>
  );
};

export default CTABlock;
