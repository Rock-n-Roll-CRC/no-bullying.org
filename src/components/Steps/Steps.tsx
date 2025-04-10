import Step from "@/components/Step/Step";
import CTABlock from "@/components/CTABlock/CTABlock";

import { merriweather } from "@/utilities/fonts";

import Step1 from "@/assets/illustrations/step-1.svg";
import Step2 from "@/assets/illustrations/step-2.svg";
import Step3 from "@/assets/illustrations/step-3.svg";
import ArrowDown from "@/assets/illustrations/arrow-down.svg";
import ArrowUp from "@/assets/illustrations/arrow-up.svg";

import styles from "./Steps.module.scss";

const steps = [
  {
    id: 1,
    illustration: Step1,
    heading: { en: "Take the quiz", ru: "Пройдите викторину" },
    description: {
      en: (
        <>
          Tell us about the problem,
          <br />
          we&apos;re good listeners.
        </>
      ),
      ru: (
        <>
          Расскажите нам о проблеме,
          <br />
          мы хорошие слушатели.
        </>
      ),
    },
    separator: ArrowDown,
  },
  {
    id: 2,
    illustration: Step2,
    heading: { en: "Get the action plan", ru: "Получите план действий" },
    description: {
      en: (
        <>
          We know you&apos;re feeling lost.
          <br />
          We will guide you.
        </>
      ),
      ru: (
        <>
          Мы знаем, что вы потеряны.
          <br />
          Мы направим вас в нужном направлении.
        </>
      ),
    },
    separator: ArrowUp,
  },
  {
    id: 3,
    illustration: Step3,
    heading: { en: "Stick with it", ru: "Следуйте инструкциям" },
    description: {
      en: (
        <>
          Follow the guide and enjoy
          <br />
          life to the fullest!
        </>
      ),
      ru: (
        <>
          Следуйте нашим советам и
          <br />
          наслаждайтесь жизнью по полной!
        </>
      ),
    },
  },
];

const Steps = ({ lang }: { lang?: "ru" }) => {
  return (
    <section className={styles.steps} id="steps">
      <h2
        className={`${styles.steps__heading ?? ""} ${merriweather.className}`}
      >
        {lang === "ru" ? "Как это работает" : "How it works"}
      </h2>

      <ol className={styles.steps__list}>
        {steps.map((step) => (
          <Step
            lang={lang}
            key={step.id}
            Illustration={step.illustration}
            heading={step.heading}
            description={step.description}
            Separator={step.separator}
          />
        ))}
      </ol>

      <hr className={styles.steps__separator} />

      <CTABlock lang={lang} />
    </section>
  );
};

export default Steps;
