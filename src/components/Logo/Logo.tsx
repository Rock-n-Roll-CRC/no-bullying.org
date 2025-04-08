import LogoSVG from "@/assets/logo.svg";

import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <a href="#top" className={styles.logo}>
      <LogoSVG className={styles.logo__icon} />

      <h1 className={styles.logo__caption}>no-bullying.org</h1>
    </a>
  );
};

export default Logo;
