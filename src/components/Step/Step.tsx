import type { FC, ReactNode, SVGProps } from "react";

import { merriweather } from "@/utilities/fonts";

import styles from "./Step.module.scss";

const Step = ({
  Illustration,
  heading,
  description,
  Separator,
}: {
  Illustration: FC<SVGProps<SVGElement>>;
  heading: string;
  description: ReactNode;
  Separator?: FC<SVGProps<SVGElement>>;
}) => {
  return (
    <li className={styles.step}>
      <article className={styles.step__body}>
        <Illustration className={styles.step__image} />

        <div className={styles["step__text-content"]}>
          <h3 className={styles.step__heading}>{heading}</h3>

          <p
            className={`${styles.step__description ?? ""} ${merriweather.className}`}
          >
            {description}
          </p>
        </div>
      </article>

      {Separator && <Separator className={styles.step__separator} />}
    </li>
  );
};

export default Step;
