"use client";

import { useState } from "react";
import Link from "next/link";

import { merriweather } from "@/utilities/fonts";

import styles from "./NavigationMenu.module.scss";

const NavigationMenu = ({ lang }: { lang?: "ru" }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={styles["navigation-menu"]}>
      <button
        onClick={handleToggleOpen}
        className={styles["navigation-menu__button"]}
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
      >
        <svg fill="currentColor" viewBox="0 0 100 100">
          <rect width="80" height="5" x="10" y="25" rx="5"></rect>
          <rect width="80" height="5" x="10" y="45" rx="5"></rect>
          <rect width="80" height="5" x="10" y="65" rx="5"></rect>
        </svg>
      </button>

      <nav
        onBlur={() => {
          setIsOpen(false);
        }}
        className={`${styles["navigation-menu__body"] ?? ""} ${isOpen ? (styles["navigation-menu__body--visible"] ?? "") : ""}`}
        id="primary-navigation"
      >
        <ul className={styles["navigation-menu__list"]}>
          <li className={styles["navigation-menu__list-item"]}>
            <a
              href="#steps"
              className={`${styles["navigation-menu__link"] ?? ""} ${merriweather.className}`}
            >
              {lang === "ru" ? "Как это работает" : "How it works"}
            </a>
          </li>

          <li className={styles["navigation-menu__list-item"]}>
            <a
              href="#statistics"
              className={`${styles["navigation-menu__link"] ?? ""} ${merriweather.className}`}
            >
              {lang === "ru" ? "Статистика" : "Statistics"}
            </a>
          </li>

          <li className={styles["navigation-menu__list-item"]}>
            <a
              href="#tabs"
              className={`${styles["navigation-menu__link"] ?? ""} ${merriweather.className}`}
            >
              {lang === "ru" ? "Что такое буллинг?" : "What is bullying?"}
            </a>
          </li>

          <li className={styles["navigation-menu__list-item"]}>
            <a
              href="#carousel"
              className={`${styles["navigation-menu__link"] ?? ""} ${merriweather.className}`}
            >
              {lang === "ru" ? "Мотивация" : "Motivation"}
            </a>
          </li>

          <li className={styles["navigation-menu__list-item"]}>
            <a
              href="#contacts"
              className={`${styles["navigation-menu__link"] ?? ""} ${merriweather.className}`}
            >
              {lang === "ru" ? "Контакты" : "Contacts"}
            </a>
          </li>

          <li className={styles["navigation-menu__list-item"]}>
            <Link
              href={lang === "ru" ? "/ru/quiz" : "/quiz"}
              className={styles["navigation-menu__cta"]}
            >
              {lang === "ru" ? "Пройти викторину" : "Take the quiz"}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;
