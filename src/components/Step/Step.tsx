import type { FC, ReactNode, SVGProps } from "react";

import { merriweather } from "@/utilities/fonts";

import styles from "./Step.module.scss";

const Step = ({
  lang,
  Illustration,
  heading,
  description,
  Separator,
}: {
  lang?: "ru";
  Illustration: FC<SVGProps<SVGElement>>;
  heading: { en: string; ru: string };
  description: { en: ReactNode; ru: ReactNode };
  Separator?: FC<SVGProps<SVGElement>>;
}) => {
  return (
    <li className={styles.step}>
      <article className={styles.step__body}>
        <Illustration className={styles.step__image} />

        <div className={styles["step__text-content"]}>
          <h3 className={styles.step__heading}>
            {lang === "ru" ? heading.ru : heading.en}
          </h3>

          <p
            className={`${styles.step__description ?? ""} ${merriweather.className}`}
          >
            {lang === "ru" ? description.ru : description.en}
          </p>
        </div>
      </article>

      {Separator && <Separator className={styles.step__separator} />}
    </li>
  );
};

export default Step;
