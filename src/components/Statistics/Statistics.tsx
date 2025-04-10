import StatisticsItem from "@/components/StatisticsItem/StatisticsItem";

import Statistic1 from "@/assets/icons/statistics/statistic-1.svg";
import Statistic2 from "@/assets/icons/statistics/statistic-2.svg";
import Statistic3 from "@/assets/icons/statistics/statistic-3.svg";

import styles from "./Statistics.module.scss";

const statistics = [
  {
    id: 1,
    icon: Statistic1,
    value: "20.2%",
    description: {
      en: (
        <>
          of surveyed students report
          <br />
          being bullied
        </>
      ),
      ru: (
        <>
          опрошенных студентов жалуются
          <br />
          на буллинг
        </>
      ),
    },
  },
  {
    id: 2,
    icon: Statistic2,
    value: "46.0%",
    description: {
      en: (
        <>
          of bullyied students notified
          <br />
          an adult at school
        </>
      ),
      ru: (
        <>
          студентов которые подверглись буллингу
          <br />
          сообщили об этом взрослому в школе
        </>
      ),
    },
  },
  {
    id: 3,
    icon: Statistic3,
    value: "41.0%",
    description: {
      en: (
        <>
          of bullied students think that
          <br />
          the bullying will not stop
        </>
      ),
      ru: (
        <>
          студентов которые подверглись буллингу
          <br />
          считают что буллинг не прекратится
        </>
      ),
    },
  },
];

const Statistics = ({ lang }: { lang?: "ru" }) => {
  return (
    <section className={styles.statistics} id="statistics">
      <ul className={styles.statistics__list}>
        {statistics.map((statisticsItem) => (
          <StatisticsItem
            lang={lang}
            key={statisticsItem.id}
            Icon={statisticsItem.icon}
            value={statisticsItem.value}
            description={statisticsItem.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
