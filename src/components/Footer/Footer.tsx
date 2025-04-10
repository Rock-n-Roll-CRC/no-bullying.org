import Logo from "@/components/Logo/Logo";

import styles from "./Footer.module.scss";

const Footer = ({ lang, page }: { lang?: "ru"; page?: "quiz" }) => {
  return (
    <footer
      className={`${styles.footer ?? ""} ${page ? (styles[`footer--${page}-page`] ?? "") : ""}`}
    >
      <p className={styles.footer__description}>
        {lang === "ru"
          ? "Разработано Дихтярь Данилом"
          : "Designed and made by Danil Dikhtyar"}
      </p>

      <Logo className={styles.footer__logo} />

      <p className={styles.footer__copyright}>&copy; 2024 no-bullying.org</p>
    </footer>
  );
};

export default Footer;
