import Logo from "@/components/Logo/Logo";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__description}>
        Designed and made by Danil Dikhtyar
      </p>

      <Logo className={styles.footer__logo} />

      <p className={styles.footer__copyright}>&copy; 2024 no-bullying.org</p>
    </footer>
  );
};

export default Footer;
