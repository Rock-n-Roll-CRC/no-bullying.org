"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";

import {
  Children,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useState,
} from "react";

import { merriweather } from "@/utilities/fonts";

import styles from "./Tabs.module.scss";

const TabsContext = createContext<{
  selectedTab: string | undefined;
  setSelectedTab: Dispatch<SetStateAction<string | undefined>>;
}>({
  selectedTab: undefined,
  setSelectedTab: () => null,
});

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState<string>();

  return (
    <TabsContext.Provider value={{ selectedTab, setSelectedTab }}>
      <section className={styles.tabs} id="tabs">
        <h2
          className={`${styles.tabs__heading ?? ""} ${merriweather.className}`}
        >
          What is bullying?
        </h2>

        <div className={styles.tabs__body}>
          <Labels>
            <Label value="definition">Definition</Label>
            <Label value="types">Types</Label>
            <Label value="consequences">Consequences</Label>
          </Labels>

          <TabContents>
            <TabContent tab="definition">
              <Paragraph>
                In 2014 the U.S. Department of Education and the Center for
                Disease Control defined bullying as having these components:
              </Paragraph>

              <List isBulletPoint>
                <ListItem>
                  <Paragraph>Aggressive behavior</Paragraph>
                </ListItem>

                <ListItem>
                  <Paragraph>Power imbalance</Paragraph>
                </ListItem>

                <ListItem>
                  <Paragraph>Repeated or likely to be repeated.</Paragraph>
                </ListItem>
              </List>

              <Paragraph>
                Middle schoolers are most likely to be bullied. Most bullying in
                this age group is done in person. It involves name calling,
                spreading rumors, teasing, hitting, pushing, threatening or
                sexual comments. Sometimes kids are bullied online.
              </Paragraph>

              <Paragraph>
                Bullying can have a lot of long-term consequences that may last
                into adulthood.
              </Paragraph>
            </TabContent>

            <TabContent tab="types">
              <List>
                <ListItem>
                  <Heading>Physical bullying</Heading>

                  <Paragraph>
                    Physical bullying is one of the most obvious and easily
                    identifiable forms of bullying. It involves the use of
                    physical force or aggression to harm or intimidate another
                    person. This type of bullying can include hitting, kicking,
                    pushing or any other physical action intended to cause harm
                    or injury.
                  </Paragraph>
                </ListItem>

                <ListItem>
                  <Heading>Verbal bullying</Heading>

                  <Paragraph>
                    Verbal bullying involves using words to hurt or intimidate
                    another person. This can include teasing, name-calling,
                    spreading rumors, or any other form of verbal aggression.
                    Verbal bullying can be particularly destructive because it
                    can be difficult to get rid of and can leave emotional scars
                    that will last a lifetime.
                  </Paragraph>
                </ListItem>

                <ListItem>
                  <Heading>Cyberbullying</Heading>

                  <Paragraph>
                    In today&apos;s digital age, cyberbullying is an
                    increasingly common form of bullying. It involves using
                    technology such as social media, text messaging or email to
                    harass, intimidate or embarrass another person.
                    Cyberbullying can take many different forms, such as
                    spreading rumors online, sharing embarrassing photos or
                    videos, or sending threatening messages.
                  </Paragraph>
                </ListItem>

                <ListItem>
                  <Heading>Social bullying</Heading>

                  <Paragraph>
                    Social bullying, also known as relational aggression,
                    involves using social status or relationships to hurt or
                    intimidate another person. This can include excluding
                    someone from a social group, spreading rumors, or using
                    social media to humiliate another person. Social bullying
                    can be particularly difficult to detect because it is often
                    done in secret or behind closed doors.
                  </Paragraph>
                </ListItem>

                <ListItem>
                  <Heading>Sexual bullying</Heading>

                  <Paragraph>
                    Sexual bullying is a form of bullying that includes
                    unwelcome sexual advances, comments or behavior. It can
                    include inappropriate touching, sexual advances, or any
                    other behavior intended to intimidate, humiliate, or coerce
                    another person into sexual activity. Sexual bullying can be
                    particularly destructive and traumatic, and it can have
                    long-term consequences for the victim.
                  </Paragraph>
                </ListItem>

                <ListItem>
                  <Heading>Racial bullying</Heading>

                  <Paragraph>
                    Racial bullying involves using someone&apos;s race or
                    ethnicity to harass or intimidate them. This can include
                    using racial slurs, making derogatory comments or engaging
                    in discriminatory behavior. Racial bullying can be
                    particularly harmful as it affects a person&apos;s identity
                    and can lead to feelings of isolation and discrimination.
                  </Paragraph>
                </ListItem>
              </List>
            </TabContent>

            <TabContent tab="consequences">
              <List>
                <ListItem>
                  <Heading>Psychological Effects</Heading>

                  <Paragraph>
                    The psychological effects of bullying include depression,
                    anxiety, low self-esteem, selfharming behavior (especially
                    for girls), alcohol and drug use and dependence, aggression,
                    and involvement in violence or crime (especially for boys).
                    While bullying can lead to mental health problems for any
                    child, those who already have mental health difficulties are
                    even more likely to be bullied and to experience its
                    negative effects.
                  </Paragraph>
                </ListItem>

                <ListItem>
                  <Heading>Physical Effects</Heading>

                  <Paragraph>
                    The physical effects of bullying can be obvious and
                    immediate, such as being injured from a physical attack.
                    However, the ongoing stress and trauma of being bullied can
                    also lead to physical problems over time. A child who is
                    bullied could develop sleep disorders - such as difficulty
                    falling asleep or staying asleep - stomachaches, headaches,
                    heart palpitations, dizziness, bedwetting, and chronic pain
                    and somatization (i.e., a syndrome of distressful, physical
                    symptoms that cannot be explained by a medical cause).
                  </Paragraph>
                </ListItem>

                <ListItem>
                  <Heading>Academic Effects</Heading>

                  <Paragraph>
                    Research has consistently shown that bullying can have a
                    negative impact on how well children and adolescents do in
                    school. It has a negative impact on both grades and
                    standardized test scores starting as early as kindergarten
                    and continuing through high school.
                  </Paragraph>
                </ListItem>
              </List>
            </TabContent>
          </TabContents>
        </div>
      </section>
    </TabsContext.Provider>
  );
};

const Labels = ({ children }: { children: ReactNode }) => {
  const { selectedTab, setSelectedTab } = useContext(TabsContext);

  useEffect(() => {
    const firstLabel = Children.toArray(children).at(0);

    if (!selectedTab && isValidElement(firstLabel))
      setSelectedTab(
        (firstLabel.props as { value: string; children: string }).value,
      );
  }, [children, selectedTab, setSelectedTab]);

  return <ol className={styles["tabs__label-list"]}>{children}</ol>;
};

const Label = ({ value, children }: { value: string; children: string }) => {
  const { selectedTab, setSelectedTab } = useContext(TabsContext);

  return (
    <li
      onClick={() => {
        setSelectedTab(value);
      }}
      className={`${styles.label ?? ""} ${selectedTab === value ? (styles["label--selected"] ?? "") : ""}`}
    >
      <h3 className={styles.label__heading}>{children}</h3>
    </li>
  );
};

const TabContents = ({ children }: { children: ReactNode }) => {
  return <ol className={styles["tabs__content-list"]}>{children}</ol>;
};

const TabContent = ({
  tab,
  children,
}: {
  tab: string;
  children: ReactNode;
}) => {
  const { selectedTab } = useContext(TabsContext);

  return (
    <li
      className={`${styles["tab-content"] ?? ""} ${selectedTab === tab ? (styles["tab-content--selected"] ?? "") : ""}`}
    >
      {children}
    </li>
  );
};

const Paragraph = ({ children }: { children: ReactNode }) => {
  return <p>{children}</p>;
};

const List = ({
  isBulletPoint,
  children,
}: {
  isBulletPoint?: boolean;
  children: ReactNode;
}) => {
  return (
    <ul
      className={`${styles.list ?? ""} ${isBulletPoint ? (styles["list--bullet-point"] ?? "") : ""}`}
    >
      {children}
    </ul>
  );
};

const ListItem = ({ children }: { children: ReactNode }) => {
  return <li className={styles["list-item"]}>{children}</li>;
};

const Heading = ({ children }: { children: ReactNode }) => {
  return <h4>{children}</h4>;
};

export default Tabs;
