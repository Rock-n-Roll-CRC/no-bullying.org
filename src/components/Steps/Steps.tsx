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
    heading: "Take the quiz",
    description: (
      <>
        Tell us about the problem,
        <br />
        we&apos;re good listeners.
      </>
    ),
    separator: ArrowDown,
  },
  {
    id: 2,
    illustration: Step2,
    heading: "Get the action plan",
    description: (
      <>
        We know you&apos;re feeling lost.
        <br />
        We will guide you.
      </>
    ),
    separator: ArrowUp,
  },
  {
    id: 3,
    illustration: Step3,
    heading: "Stick with it",
    description: (
      <>
        Follow the guide and enjoy
        <br />
        life to the fullest!
      </>
    ),
  },
];

const Steps = () => {
  return (
    <section className={styles.steps} id="steps">
      <h2
        className={`${styles.steps__heading ?? ""} ${merriweather.className}`}
      >
        How it works
      </h2>

      <ol className={styles.steps__list}>
        {steps.map((step) => (
          <Step
            key={step.id}
            Illustration={step.illustration}
            heading={step.heading}
            description={step.description}
            Separator={step.separator}
          />
        ))}
      </ol>

      <hr className={styles.steps__separator} />

      <CTABlock />
    </section>
  );
};

export default Steps;
