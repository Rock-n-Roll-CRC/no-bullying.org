import Image from "next/image";
import Link from "next/link";

import { merriweather } from "@/utilities/fonts";

import backgroundImage from "@/assets/images/hero.webp";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src={backgroundImage}
        alt=""
        quality={100}
        className={styles.hero__image}
        decoding="async"
      />

      <h2 className={`${styles.hero__heading ?? ""} ${merriweather.className}`}>
        You want to stop bullying,
        <br />
        we know what you need to do.
        <br />
        Let&apos;s work together.
      </h2>

      <p className={styles.hero__description}>
        Find the right instructions to follow,
        <br />
        personalized just for you.
      </p>

      <Link href="/quiz" className={styles.hero__cta}>
        Take the quiz
      </Link>
    </section>
  );
};

export default Hero;
