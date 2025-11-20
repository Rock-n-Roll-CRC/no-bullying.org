"use client";

import Link from "next/link";

import LogoSVG from "@/assets/logo.svg";

import styles from "./Logo.module.scss";
import { usePathname } from "next/navigation";

const Logo = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  return (
    <Link
      href={
        pathname === "/" || pathname === "/ru"
          ? "#top"
          : pathname.includes("ru")
            ? "/ru"
            : "/"
      }
      className={`${styles.logo ?? ""} ${className ?? ""}`}
    >
      <LogoSVG className={styles.logo__icon} />

      <h1 className={styles.logo__caption}>no-bullying.org</h1>
    </Link>
  );
};

export default Logo;
