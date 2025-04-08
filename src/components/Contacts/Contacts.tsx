import type { FC, SVGProps } from "react";

import { merriweather } from "@/utilities/fonts";

import Icon1 from "@/assets/icons/email.svg";
import Icon2 from "@/assets/icons/phone.svg";

import styles from "./Contacts.module.scss";

interface Contact {
  id: number;
  icon: FC<SVGProps<SVGElement>>;
  heading: string;
  description: string;
  color: "main" | "grey";
}

const contacts: Contact[] = [
  {
    id: 1,
    icon: Icon1,
    heading: "Contact Us",
    description: "danil.dikhtyaris@gmail.com",
    color: "main",
  },
  {
    id: 2,
    icon: Icon2,
    heading: "Local Helpline",
    description: "1-800-273-8255",
    color: "grey",
  },
];

const Contacts = () => {
  return (
    <section className={styles.contacts} id="contacts">
      <div className={styles["contacts__heading-box"]}>
        <h2
          className={`${styles.contacts__heading ?? ""} ${merriweather.className}`}
        >
          Being strong is hard,
          <br />
          we&apos;ve got your back.
        </h2>

        <p className={styles.contacts__description}>
          You&apos;re on the way to live the life
          <br />
          you&apos;ve never lived.
        </p>
      </div>

      <ul className={styles.contacts__list}>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </section>
  );
};

const Contact = ({ contact }: { contact: Contact }) => {
  return (
    <li
      className={`${styles.contact ?? ""} ${styles[`contact--color-${contact.color}`] ?? ""}`}
    >
      <contact.icon className={styles.contact__icon} />

      <div className={styles["contact__text-content"]}>
        <h3 className={styles.contact__heading}>{contact.heading}</h3>

        <p className={styles.contact__description}>{contact.description}</p>
      </div>
    </li>
  );
};

export default Contacts;
