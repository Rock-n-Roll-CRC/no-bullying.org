import Link from "next/link";

import { merriweather } from "@/utilities/fonts";

import styles from "./CTABlock.module.scss";

const CTABlock = () => {
  return (
    <article className={styles["cta-block"]}>
      <p
        className={`${styles["cta-block__heading"] ?? ""} ${merriweather.className}`}
      >
        Let&apos;s get started
      </p>

      <Link href="/quiz" className={styles["cta-block__cta"]}>
        Take the quiz
      </Link>
    </article>
  );
};

export default CTABlock;
