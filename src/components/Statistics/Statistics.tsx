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
    description: (
      <>
        of surveyed students report
        <br />
        being bullied
      </>
    ),
  },
  {
    id: 2,
    icon: Statistic2,
    value: "46.0%",
    description: (
      <>
        of bullyied students notified
        <br />
        an adult at school
      </>
    ),
  },
  {
    id: 3,
    icon: Statistic3,
    value: "41.0%",
    description: (
      <>
        of bullied students think that
        <br />
        the bullying will not stop
      </>
    ),
  },
];

const Statistics = () => {
  return (
    <section className={styles.statistics} id="statistics">
      <ul className={styles.statistics__list}>
        {statistics.map((statisticsItem) => (
          <StatisticsItem
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
