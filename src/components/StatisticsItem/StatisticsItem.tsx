import type { FC, ReactNode, SVGProps } from "react";

import { merriweather } from "@/utilities/fonts";

import styles from "./StatisticsItem.module.scss";

const StatisticsItem = ({
  lang,
  Icon,
  value,
  description,
}: {
  lang?: "ru";
  Icon: FC<SVGProps<SVGElement>>;
  value: string;
  description: { en: ReactNode; ru: ReactNode };
}) => {
  return (
    <li className={styles["statistic-item"]}>
      <Icon className={styles["statistic-item__icon"]} />

      <div className={styles["statistic-item__text-content"]}>
        <p
          className={`${styles["statistic-item__value"] ?? ""} ${merriweather.className}`}
        >
          {value}
        </p>

        <p className={styles["statistic-item__description"]}>
          {lang === "ru" ? description.ru : description.en}
        </p>
      </div>
    </li>
  );
};

export default StatisticsItem;
