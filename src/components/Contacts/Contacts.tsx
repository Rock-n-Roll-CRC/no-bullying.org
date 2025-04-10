import type { FC, SVGProps } from "react";

import { merriweather } from "@/utilities/fonts";

import Icon1 from "@/assets/icons/email.svg";
import Icon2 from "@/assets/icons/phone.svg";

import styles from "./Contacts.module.scss";

interface Contact {
  id: number;
  icon: FC<SVGProps<SVGElement>>;
  heading: { en: string; ru: string };
  description: { en: string; ru: string };
  color: "main" | "grey";
}

const contacts: Contact[] = [
  {
    id: 1,
    icon: Icon1,
    heading: { en: "Contact Us", ru: "Свяжись с нами" },
    description: {
      en: "danil.dikhtyaris@gmail.com",
      ru: "danil.dikhtyaris@gmail.com",
    },
    color: "main",
  },
  {
    id: 2,
    icon: Icon2,
    heading: { en: "Local Helpline", ru: "Телефон Доверия" },
    description: { en: "1-800-273-8255", ru: "1-800-273-8255" },
    color: "grey",
  },
];

const Contacts = ({ lang }: { lang?: "ru" }) => {
  return (
    <section className={styles.contacts} id="contacts">
      <div className={styles["contacts__heading-box"]}>
        <h2
          className={`${styles.contacts__heading ?? ""} ${merriweather.className}`}
        >
          {lang === "ru" ? (
            <>
              Быть сильным трудно,
              <br />
              мы поддержим тебя.
            </>
          ) : (
            <>
              Being strong is hard,
              <br />
              we&apos;ve got your back.
            </>
          )}
        </h2>

        <p className={styles.contacts__description}>
          {lang === "ru" ? (
            <>
              Ты на пути чтобы жить жизнь,
              <br />
              которой ты никогда не жил.
            </>
          ) : (
            <>
              You&apos;re on the way to live the life
              <br />
              you&apos;ve never lived.
            </>
          )}
        </p>
      </div>

      <ul className={styles.contacts__list}>
        {contacts.map((contact) => (
          <Contact key={contact.id} lang={lang} contact={contact} />
        ))}
      </ul>
    </section>
  );
};

const Contact = ({ lang, contact }: { lang?: "ru"; contact: Contact }) => {
  return (
    <li
      className={`${styles.contact ?? ""} ${styles[`contact--color-${contact.color}`] ?? ""}`}
    >
      <contact.icon className={styles.contact__icon} />

      <div className={styles["contact__text-content"]}>
        <h3 className={styles.contact__heading}>
          {lang === "ru" ? contact.heading.ru : contact.heading.en}
        </h3>

        <p className={styles.contact__description}>
          {lang === "ru" ? contact.description.ru : contact.description.en}
        </p>
      </div>
    </li>
  );
};

export default Contacts;
