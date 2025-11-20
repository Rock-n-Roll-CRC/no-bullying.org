import Image from "next/image";
import Link from "next/link";

import { merriweather } from "@/utilities/fonts";

import backgroundImage from "@/assets/images/hero.jpg";

import styles from "./Hero.module.scss";

const Hero = ({ lang }: { lang?: "ru" }) => {
  return (
    <section className={styles.hero}>
      <Image
        src={backgroundImage}
        alt=""
        sizes="100vw"
        priority={true}
        placeholder="blur"
        className={styles.hero__image}
      />

      <h2 className={`${styles.hero__heading ?? ""} ${merriweather.className}`}>
        {lang === "ru" ? (
          <>
            Вы хотите остановить буллинг,
            <br />
            мы знаем, что вам нужно делать.
            <br />
            Давайте работать вместе.
          </>
        ) : (
          <>
            You want to stop bullying,
            <br />
            we know what you need to do.
            <br />
            Let&apos;s work together.
          </>
        )}
      </h2>

      <p className={styles.hero__description}>
        {lang === "ru" ? (
          <>
            Найдите правильные инструкции,
            <br />
            специально для вас.
          </>
        ) : (
          <>
            Find the right instructions to follow,
            <br />
            personalized just for you.
          </>
        )}
      </p>

      <Link
        href={lang === "ru" ? "/ru/quiz" : "/quiz"}
        className={styles.hero__cta}
      >
        {lang === "ru" ? "Пройти викторину" : "Take the quiz"}
      </Link>
    </section>
  );
};

export default Hero;
