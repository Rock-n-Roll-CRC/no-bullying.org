import LogoSVG from "@/assets/logo.svg";

import styles from "./Logo.module.scss";

const Logo = ({ className }: { className?: string }) => {
  return (
    <a href="#top" className={`${styles.logo ?? ""} ${className ?? ""}`}>
      <LogoSVG className={styles.logo__icon} />

      <h1 className={styles.logo__caption}>no-bullying.org</h1>
    </a>
  );
};

export default Logo;
