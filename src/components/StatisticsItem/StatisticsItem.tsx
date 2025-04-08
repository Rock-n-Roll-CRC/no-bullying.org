import type { FC, ReactNode, SVGProps } from "react";

import { merriweather } from "@/utilities/fonts";

import styles from "./StatisticsItem.module.scss";

const StatisticsItem = ({
  Icon,
  value,
  description,
}: {
  Icon: FC<SVGProps<SVGElement>>;
  value: string;
  description: ReactNode;
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

        <p className={styles["statistic-item__description"]}>{description}</p>
      </div>
    </li>
  );
};

export default StatisticsItem;
