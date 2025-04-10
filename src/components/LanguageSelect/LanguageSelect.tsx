"use client";

import { useState } from "react";
import Link from "next/link";

import { merriweather } from "@/utilities/fonts";

import GlobeSVG from "@/assets/icons/globe.svg";

import styles from "./LanguageSelect.module.scss";

const LanguageSelect = ({ lang }: { lang?: "ru" }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={styles["language-select"]}>
      <button
        onClick={handleToggleOpen}
        className={styles["language-select__button"]}
      >
        <GlobeSVG />
      </button>

      {isOpen && (
        <div
          className={`${styles["language-select__body"] ?? ""} ${merriweather.className}`}
        >
          <Link href="/">{lang === "ru" ? "английский" : "english"}</Link>

          <Link href="/ru">{lang === "ru" ? "русский" : "russian"}</Link>
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
