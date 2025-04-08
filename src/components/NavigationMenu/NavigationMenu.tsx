import Link from "next/link";

import { merriweather } from "@/utilities/fonts";

import styles from "./NavigationMenu.module.scss";

const NavigationMenu = () => {
  return (
    <div className={styles["navigation-menu"]}>
      <button
        className={styles["navigation-menu__button"]}
        aria-controls="primary-navigation"
        aria-expanded="false"
      >
        <svg fill="currentColor" viewBox="0 0 100 100">
          <rect width="80" height="5" x="10" y="25" rx="5"></rect>
          <rect width="80" height="5" x="10" y="45" rx="5"></rect>
          <rect width="80" height="5" x="10" y="65" rx="5"></rect>
        </svg>
      </button>

      <nav className={styles["navigation-menu__body"]} id="primary-navigation">
        <ul className={styles["navigation-menu__list"]}>
          <li className={styles["navigation-menu__list-item"]}>
            <a
              href="#steps"
              className={`${styles["navigation-menu__link"] ?? ""} ${merriweather.className}`}
            >
              How it works
            </a>
          </li>

          <li className={styles["navigation-menu__list-item"]}>
            <a
              href="#statistics"
              className={`${styles["navigation-menu__link"] ?? ""} ${merriweather.className}`}
            >
              Statistics
            </a>
          </li>

          <li className={styles["navigation-menu__list-item"]}>
            <a
              href="#tabs"
              className={`${styles["navigation-menu__link"] ?? ""} ${merriweather.className}`}
            >
              What is bullying?
            </a>
          </li>

          <li className={styles["navigation-menu__list-item"]}>
            <a
              href="#carousel"
              className={`${styles["navigation-menu__link"] ?? ""} ${merriweather.className}`}
            >
              Motivation
            </a>
          </li>

          <li className={styles["navigation-menu__list-item"]}>
            <a
              href="#contacts"
              className={`${styles["navigation-menu__link"] ?? ""} ${merriweather.className}`}
            >
              Contacts
            </a>
          </li>

          <li className={styles["navigation-menu__list-item"]}>
            <Link href="/quiz" className={styles["navigation-menu__cta"]}>
              Take the quiz
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;
