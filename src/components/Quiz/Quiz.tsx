"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";
import { useState } from "react";

import Image from "next/image";

import { merriweather } from "@/utilities/fonts";

import bgImage from "@/assets/images/quiz.jpg";

import AlertSVG from "@/assets/icons/alert.svg";

import styles from "./Quiz.module.scss";

interface Question {
  id: number;
  heading: { en: string; ru: string };
  answers: { id: number; value: { en: string; ru: string } }[];
}

const questions = [
  {
    id: 1,
    heading: { en: "Are you a boy, or a girl?", ru: "Вы мальчик или девочка?" },
    answers: [
      { id: 1, value: { en: "Boy", ru: "Мальчик" } },
      { id: 2, value: { en: "Girl", ru: "Девочка" } },
    ],
  },
  {
    id: 2,
    heading: {
      en: "I have a lot of friends among my classmates",
      ru: "Среди одноклассников у меня много друзей:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Yes, I'm friends with everyone",
          ru: "Да, я дружу со всеми",
        },
      },
      {
        id: 2,
        value: { en: "I have some friends", ru: "У меня есть пару друзей" },
      },
      {
        id: 3,
        value: {
          en: "No, I'm not friends with anyone",
          ru: "Нет, я ни с кем не дружу",
        },
      },
      {
        id: 4,
        value: {
          en: "I'd like to be friends with everyone",
          ru: "Мне бы хотелось дружить со всеми",
        },
      },
    ],
  },
  {
    id: 3,
    heading: {
      en: "I care about the appearance of people around me",
      ru: "Для меня важна внешность окружающих:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Yes, if a person's not appealing, I won't talk to them",
          ru: "Да, если человек мне не симпатичен, я не буду с ним общаться",
        },
      },
      {
        id: 2,
        value: {
          en: "No, it's more important that a person's interesting",
          ru: "Нет, главное, чтобы человек был интересен",
        },
      },
      {
        id: 3,
        value: {
          en: "I suffer from my appearance myself",
          ru: "Я сам страдаю из-за своей внешности",
        },
      },
      {
        id: 4,
        value: {
          en: "If a person's not appealing, they deserve no good",
          ru: "Конечно, если человек не обладает хорошей внешностью, он не заслуживает ничего хорошего",
        },
      },
    ],
  },
  {
    id: 4,
    heading: {
      en: "I have classmates that I don't like",
      ru: "В моем классе есть ребята, которые мне неприятны:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Yes, one or two",
          ru: "Да, один или два",
        },
      },
      {
        id: 2,
        value: {
          en: "No, I like everyone",
          ru: "Нет, мне приятны все",
        },
      },
      {
        id: 3,
        value: {
          en: "I don't like anyone",
          ru: "Мне все не нравятся",
        },
      },
      {
        id: 4,
        value: {
          en: "Yes, but they're not liked by everyone",
          ru: "Да, но они неприятны всем в классе",
        },
      },
    ],
  },
  {
    id: 5,
    heading: {
      en: "It seems to me that my classmates are better than me",
      ru: "Мне кажется, что мои одноклассники лучше меня:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Yes, at everything",
          ru: "Да, во всем",
        },
      },
      {
        id: 2,
        value: {
          en: "Sometimes",
          ru: "Иногда",
        },
      },
      {
        id: 3,
        value: {
          en: "No, everyone wants to be like me",
          ru: "Нет, на меня все равняются",
        },
      },
      {
        id: 4,
        value: {
          en: "No, I don't feel worse than others",
          ru: "Нет, я не чувствую себя хуже других",
        },
      },
    ],
  },
  {
    id: 6,
    heading: {
      en: "If my classmate wears glasses",
      ru: "Если мой одноклассник пришел в очках:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "I'll talk to them as usual",
          ru: "Буду общаться с ним так же, как всегда",
        },
      },
      {
        id: 2,
        value: {
          en: "I'll make fun of them",
          ru: "Буду смеяться над ним",
        },
      },
      {
        id: 3,
        value: {
          en: "I won't talk to them",
          ru: "Перестану с ним общаться",
        },
      },
      {
        id: 4,
        value: {
          en: "I'll talk to them only when there's no one around",
          ru: "Буду общаться только тогда, когда не видят другие ребята",
        },
      },
    ],
  },
  {
    id: 7,
    heading: {
      en: "My classmates are very friendly",
      ru: "У меня очень дружный класс:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Yes, we're very friendly",
          ru: "Да, мы очень дружны",
        },
      },
      {
        id: 2,
        value: {
          en: "No, we almost never talk",
          ru: "Нет, мы почти не общаемся",
        },
      },
      {
        id: 3,
        value: {
          en: "Generally yes, if not counting some",
          ru: "В основном да, если не считать некоторых",
        },
      },
      {
        id: 4,
        value: {
          en: "We have guys who bully everyone",
          ru: "У нас есть ребята, которые всех «задирают»",
        },
      },
    ],
  },
  {
    id: 8,
    heading: {
      en: "I often feel lonely and worried",
      ru: "Я часто испытываю чувство одиночества и тревоги:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Yes",
          ru: "Да",
        },
      },
      {
        id: 2,
        value: {
          en: "No",
          ru: "Нет",
        },
      },
      {
        id: 3,
        value: {
          en: "Sometimes",
          ru: "Иногда",
        },
      },
      {
        id: 4,
        value: {
          en: "Often",
          ru: "Часто",
        },
      },
    ],
  },
  {
    id: 9,
    heading: {
      en: "If my classmate is bullied, I feel",
      ru: "Если при мне обижают одноклассника, я чувствую:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Relieved, it's great that it's not me",
          ru: "Облегчение: хорошо, что меня это не касается",
        },
      },
      {
        id: 2,
        value: {
          en: "Injustice, I help the classmate",
          ru: "Несправедливость, и заступаюсь за одноклассника",
        },
      },
      {
        id: 3,
        value: {
          en: "Nothing, perhaps he deserved it",
          ru: "Ничего не чувствую, наверняка он это заслужил",
        },
      },
      {
        id: 4,
        value: {
          en: "I do not care",
          ru: "Мне нет до этого никакого дела",
        },
      },
    ],
  },
  {
    id: 10,
    heading: {
      en: "I'd like to spend more time with my classmates",
      ru: "Я бы хотел проводить больше времени с одноклассниками:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Yes, but it happens rarely",
          ru: "Да, но это бывает редко",
        },
      },
      {
        id: 2,
        value: {
          en: "We spend our free time together already",
          ru: "Мы и так постоянно проводим свободное время вместе",
        },
      },
      {
        id: 3,
        value: {
          en: "No, they're not interesting",
          ru: "Нет, мне с ними не интересно",
        },
      },
      {
        id: 4,
        value: {
          en: "No, because some guys spoil everything",
          ru: "Нет, потому что некоторые ребята всё портят",
        },
      },
    ],
  },
  {
    id: 11,
    heading: {
      en: "I think my classmates don't want to talk to me",
      ru: "Мне кажется, что мои одноклассники не хотят со мной общаться:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Yes, and it's unpleasant",
          ru: "Да, это так, и мне это неприятно",
        },
      },
      {
        id: 2,
        value: {
          en: "No, everyone's friends with me",
          ru: "Нет, со мной все дружат",
        },
      },
      {
        id: 3,
        value: {
          en: "Yes, but I'm ok with it",
          ru: "Да, но меня это устраивает",
        },
      },
      {
        id: 4,
        value: {
          en: "It's me who don't want to talk",
          ru: "Это я не хочу с ними общаться",
        },
      },
    ],
  },
  {
    id: 12,
    heading: {
      en: "There're several guys in our class who serve as an example to others",
      ru: "У нас в классе есть пару ребят, на которых все равняются:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Yes, I think I'm one of them",
          ru: "Да, я думаю, что я один из них",
        },
      },
      {
        id: 2,
        value: {
          en: "Yes, but they don't deserve it",
          ru: "Да, но они этого не заслуживают",
        },
      },
      {
        id: 3,
        value: {
          en: "No, there're no such guys",
          ru: "Нет, у нас таких нет",
        },
      },
      {
        id: 4,
        value: {
          en: "Yes, and I want to be like them",
          ru: "Да, я тоже на них равняюсь",
        },
      },
    ],
  },
  {
    id: 13,
    heading: {
      en: "When I'm scolded at, I feel furious",
      ru: "Когда меня ругают, я испытываю чувство гнева:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Yes",
          ru: "Да",
        },
      },
      {
        id: 2,
        value: {
          en: "No",
          ru: "Нет",
        },
      },
      {
        id: 3,
        value: {
          en: "Sometimes",
          ru: "Иногда",
        },
      },
      {
        id: 4,
        value: {
          en: "Often",
          ru: "Часто",
        },
      },
    ],
  },
  {
    id: 14,
    heading: {
      en: "There're several guys who terrify everyone",
      ru: "В нашем классе есть несколько ребят, которых все боятся:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Yes, they humiliate and even beat everyone sometimes",
          ru: "Да, они всех унижают, а иногда и бьют",
        },
      },
      {
        id: 2,
        value: {
          en: "No, we don't have such guys",
          ru: "Нет, у нас таких нет",
        },
      },
      {
        id: 3,
        value: {
          en: "I'm one of them myself",
          ru: "Я и сам из их числа – меня все боятся",
        },
      },
      {
        id: 4,
        value: {
          en: "Of course, it's normal",
          ru: "Конечно, так и должно быть, это нормально",
        },
      },
    ],
  },
  {
    id: 15,
    heading: {
      en: "I'd like to study in a different class or school",
      ru: "Мне бы хотелось учиться в другом классе или школе:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Yes, I don't like our community",
          ru: "Да, мне не нравится наш коллектив",
        },
      },
      {
        id: 2,
        value: {
          en: "No, I'm fine with everything",
          ru: "Нет, меня всё устраивает",
        },
      },
      {
        id: 3,
        value: {
          en: "Sometimes, after scolding with my classmates",
          ru: "Иногда, после ссоры с одноклассниками",
        },
      },
      {
        id: 4,
        value: {
          en: "No, maybe it'll be even worse",
          ru: "Нет, а вдруг там будет хуже",
        },
      },
    ],
  },
  {
    id: 16,
    heading: {
      en: "I think you might solve any problem by force",
      ru: "Мне кажется, что с помощью силы можно решить любую проблему:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Yes, it's the most effective method",
          ru: "Да это самый действенный способ",
        },
      },
      {
        id: 2,
        value: {
          en: "No, it's better to solve a problem peacefully",
          ru: "Нет, лучше решать «мирным» путем",
        },
      },
      {
        id: 3,
        value: {
          en: "Sometimes you have to",
          ru: "Иногда без этого не обойтись",
        },
      },
      {
        id: 4,
        value: {
          en: "Everything depends on circumstances and people",
          ru: "Всё зависит от обстоятельств и от людей",
        },
      },
    ],
  },
  {
    id: 17,
    heading: {
      en: "In my class there's one person (several people), who's not friends with anyone",
      ru: "В моем классе есть один (несколько) человек, с которыми никто не дружит:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Yes, and I feel pity for them",
          ru: "Да, и мне их жаль",
        },
      },
      {
        id: 2,
        value: {
          en: "No, we're friends with everyone",
          ru: "Нет, мы все дружим",
        },
      },
      {
        id: 3,
        value: {
          en: "Yes, but they deserve it",
          ru: "Да, но они этого заслуживают",
        },
      },
      {
        id: 4,
        value: {
          en: "I'm one of them myself",
          ru: "Я сам из их числа",
        },
      },
    ],
  },
  {
    id: 18,
    heading: {
      en: "It seems to me that acts of violence often take place in our class (name-calling, taunting, hurtful gestures or actions)",
      ru: "Мне кажется, что в нашем классе часто происходят акты насилия (обзывания, насмешки, обидные жесты или действия):",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Yes, scolding and fights often take place",
          ru: "Да, постоянно ссоры и драки",
        },
      },
      {
        id: 2,
        value: {
          en: "No, it doesn't happen",
          ru: "Нет, у нас такого не бывает",
        },
      },
      {
        id: 3,
        value: {
          en: "Almost not, not taking into account some occasions",
          ru: "Почти нет, если не считать пару случаев",
        },
      },
      {
        id: 4,
        value: {
          en: "Of course, it's normal",
          ru: "Конечно, так и должно быть",
        },
      },
    ],
  },
  {
    id: 19,
    heading: {
      en: "If I'll see a fight between my classmates",
      ru: "Если я увижу драку между одноклассниками, то я:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "I'll walk away, it doesn't concern me",
          ru: "Пройду мимо, это меня не касается",
        },
      },
      {
        id: 2,
        value: {
          en: "I'll stop and watch",
          ru: "Обязательно остановлюсь и посмотрю",
        },
      },
      {
        id: 3,
        value: {
          en: "I'll film it and then post it to let everybody see",
          ru: "Сниму это всё на телефон, и после размещу в интернете, пусть все увидят",
        },
      },
      {
        id: 4,
        value: {
          en: "I'll try to stop the fight and figure out what's going on",
          ru: "Попытаюсь остановить драку и выяснить в чем дело",
        },
      },
    ],
  },
  {
    id: 20,
    heading: {
      en: "I think that I'm underestimated among people around me",
      ru: "Мне кажется, что в коллективе меня недооценивают:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Yes",
          ru: "Да",
        },
      },
      {
        id: 2,
        value: {
          en: "No",
          ru: "Нет",
        },
      },
      {
        id: 3,
        value: {
          en: "Sometimes",
          ru: "Иногда",
        },
      },
      {
        id: 4,
        value: {
          en: "Often",
          ru: "Часто",
        },
      },
    ],
  },
  {
    id: 21,
    heading: {
      en: "In my opinion teachers in school humiliate and insult students",
      ru: "По-моему педагоги в школе унижают и оскорбляют учащихся:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Yes",
          ru: "Да",
        },
      },
      {
        id: 2,
        value: {
          en: "No",
          ru: "Нет",
        },
      },
      {
        id: 3,
        value: {
          en: "Sometimes",
          ru: "Иногда",
        },
      },
      {
        id: 4,
        value: {
          en: "Often",
          ru: "Часто",
        },
      },
    ],
  },
  {
    id: 22,
    heading: {
      en: "If my class was a ship, I'd be a ...",
      ru: "Если бы мой класс был на корабле, я бы стал:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Captain",
          ru: "Капитаном",
        },
      },
      {
        id: 2,
        value: {
          en: "Captain assistant",
          ru: "Помощником капитана",
        },
      },
      {
        id: 3,
        value: {
          en: "Regular sailor",
          ru: "Обычным матросом",
        },
      },
      {
        id: 4,
        value: {
          en: "Yunga",
          ru: "Юнгой",
        },
      },
    ],
  },
  {
    id: 23,
    heading: {
      en: "If a person has some kind of a disability (warts, strabismus, obesity)",
      ru: "Если у человека изъяны во внешности (бородавки, косоглазие, ожирение и др.):",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "It's a cause for taunting",
          ru: "Это повод для насмешек",
        },
      },
      {
        id: 2,
        value: {
          en: "I won't talk to them",
          ru: "Я с таким не буду общаться",
        },
      },
      {
        id: 3,
        value: {
          en: "It's okay, I'll talk to them",
          ru: "Меня это не беспокоит, буду общаться",
        },
      },
      {
        id: 4,
        value: {
          en: "I won't talk to them, so I won't drop my reputation",
          ru: "Не буду общаться, чтобы не уронить свою репутацию",
        },
      },
    ],
  },
  {
    id: 24,
    heading: {
      en: "If somebody's being laughed at",
      ru: "Если при мне кто-то подвергается насмешкам:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "I'll behave just as everyone else",
          ru: "Я буду поступать так же как все",
        },
      },
      {
        id: 2,
        value: {
          en: "I'll protect them",
          ru: "Встану на его защиту",
        },
      },
      {
        id: 3,
        value: {
          en: "I'll be one of the first to laugh at them",
          ru: "Один из первых стану смеяться над ним",
        },
      },
      {
        id: 4,
        value: {
          en: "I'll do nothing, that doesn't concern me",
          ru: "Ничего делать не буду, меня это не касается",
        },
      },
    ],
  },
  {
    id: 25,
    heading: {
      en: "I often get disappointed whenever I'm unsuccessful in class",
      ru: "Я часто огорчаюсь, когда не пользуюсь успехом в классе:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Yes, it's very important for me",
          ru: "Да, для меня это очень важно",
        },
      },
      {
        id: 2,
        value: {
          en: "No, I don't care",
          ru: "Нет – мне всё равно",
        },
      },
      {
        id: 3,
        value: {
          en: "I'm always successful",
          ru: "Я всегда пользуюсь успехом",
        },
      },
      {
        id: 4,
        value: {
          en: "No, I've never been successful in class",
          ru: "Нет, я никогда не был успешен в классе",
        },
      },
    ],
  },
  {
    id: 26,
    heading: {
      en: "I'm in need of my classmates' support",
      ru: "Я нуждаюсь в поддержке одноклассников:",
    },
    answers: [
      {
        id: 1,
        value: {
          en: "Yes",
          ru: "Да",
        },
      },
      {
        id: 2,
        value: {
          en: "No",
          ru: "Нет",
        },
      },
      {
        id: 3,
        value: {
          en: "Sometimes",
          ru: "Иногда",
        },
      },
      {
        id: 4,
        value: {
          en: "Often",
          ru: "Часто",
        },
      },
    ],
  },
];

const answersLegend = [
  {
    role: "initiator",
    answers: [
      999, 1, 4, 4, 3, 3, 1, 2, 4, 2, 2, 1, 1, 999, 2, 4, 2, 999, 2, 2, 999, 1,
      4, 1, 3, 3,
    ],
  },
  {
    role: "helper",
    answers: [
      999, 2, 1, 4, 4, 2, 2, 3, 3, 3, 4, 3, 4, 999, 2, 1, 3, 999, 3, 1, 999, 2,
      1, 3, 1, 4,
    ],
  },
  {
    role: "defender",
    answers: [
      999, 1, 2, 2, 3, 1, 4, 2, 2, 1, 2, 1, 3, 999, 3, 2, 1, 999, 4, 2, 999, 1,
      3, 2, 2, 2,
    ],
  },
  {
    role: "victim",
    answers: [
      999, 2, 3, 1, 2, 1, 4, 1, 4, 3, 3, 2, 3, 999, 4, 3, 4, 999, 1, 4, 999, 4,
      3, 4, 4, 3,
    ],
  },
  {
    role: "observer",
    answers: [
      999, 4, 2, 3, 3, 4, 4, 3, 1, 4, 1, 2, 2, 999, 1, 4, 3, 999, 2, 3, 999, 3,
      4, 1, 2, 1,
    ],
  },
  {
    role: "studentViolence",
    answers: Array.from({ length: 26 }, (_, index) => {
      if (index === 13) return [1, 3, 4];
      if (index === 17) return [1, 4];
      return 999;
    }),
  },
  {
    role: "teacherViolence",
    answers: Array.from({ length: 26 }, (_, index) => {
      if (index === 20) return [1, 4];
      return 999;
    }),
  },
];

const tips = [
  {
    id: 1,
    heading: {
      en: <>Three Simple Rules That Will Make You Happy</>,
      ru: <>Три простых правила которые сделают тебя счастливым</>,
    },
  },
  {
    id: 2,
    heading: {
      en: <>Don&apos;t be afraid to stand up for yourself</>,
      ru: <>Не бойтесь постоять за себя!</>,
    },
    description: {
      en: (
        <>
          Do not allow yourself to be humiliated, fight back. Be friendly, but
          don&apos;t try to ingratiate yourself in order to please everyone. Be
          open, but do not immediately tell everyone about your personal
          problems. Do not gossip about others.
        </>
      ),
      ru: (
        <>
          Не позволяйте унижать себя, давайте отпор. Будьте доброжелательны, но
          при этом не заискивайте перед коллегами, чтобы всем понравиться.
          Будьте открыты, но не рассказывайте сразу всем о своих личных
          проблемах. Добросовестно выполняйте свои обязанности и не сплетничайте
          о других.
        </>
      ),
    },
  },
  {
    id: 3,
    heading: {
      en: <>Don&apos;t be alone</>,
      ru: <>Не оставайтесь в одиночестве!</>,
    },
    description: {
      en: (
        <>
          Lonely people may seem more vulnerable and can be an attractive target
          for abusers. Try to always be around friends, peers or other people
          during the day.
        </>
      ),
      ru: (
        <>
          Одинокие люди могут казаться более уязвимыми и могут стать
          привлекательной мишенью для обидчиков. Старайтесь всегда быть рядом с
          друзьями, сверстниками или другими людьми в течение дня.
        </>
      ),
    },
  },
  {
    id: 4,
    heading: {
      en: <>Protect yourself from cyberbullying</>,
      ru: <>Защититесь от кибербуллинга</>,
    },
    description: {
      en: (
        <>
          Think about what you write and post online and who sees it. Keep your
          password secret from others. Even friends can give away your password
          or use it to hack and get your personal information.
        </>
      ),
      ru: (
        <>
          Подумайте о том, что вы пишете и публикуете в Интернете, а также о
          том, кто это видит. Держите свой пароль в секрете от других. Даже
          друзья могут выдать ваш пароль или использовать его, чтобы взломать и
          получить вашу личную информацию.
        </>
      ),
    },
  },
];

const Quiz = ({ lang }: { lang?: "ru" }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number>();
  const [scores, setScores] = useState<{ role: string; value: number }[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  function handleNextQuestion() {
    if (selectedAnswer === undefined) return;
    if (currentQuestion !== questions.length - 1)
      setCurrentQuestion((currentQuestion) => currentQuestion + 1);
    else setIsFinished(true);
    setSelectedAnswer(undefined);

    answersLegend.forEach((block) => {
      const blockAnswer = block.answers[currentQuestion];

      if (
        blockAnswer === selectedAnswer + 1 ||
        (Array.isArray(blockAnswer) && blockAnswer.includes(selectedAnswer + 1))
      ) {
        const curScore = scores.find((score) => score.role === block.role);

        setScores((scores) =>
          curScore
            ? scores.map((score) =>
                score.role === block.role
                  ? { ...score, value: score.value + 1 }
                  : score,
              )
            : [...scores, { role: block.role, value: 1 }],
        );
      }
    });
  }

  return (
    <section className={styles.quiz}>
      <Image
        src={bgImage}
        alt=""
        sizes="100vw"
        priority={true}
        placeholder="blur"
        className={styles.quiz__image}
      />

      {isFinished ? (
        <div className={styles.results}>
          <h2
            className={`${styles.results__heading ?? ""} ${merriweather.className}`}
          >
            {lang === "ru" ? "Результаты теста" : "Quiz Results"}
          </h2>

          <div className={styles["results__main-container"]}>
            <div className={styles["results__sub-container"]}>
              <ul className={styles.results__list}>
                <Role scores={scores} value="initiator">
                  {lang === "ru" ? "Инициатор" : "Initiator"}
                </Role>
                <Role scores={scores} value="helper">
                  {lang === "ru" ? "Помощник" : "Helper"}
                </Role>
                <Role scores={scores} value="defender">
                  {lang === "ru" ? "Защитник" : "Defender"}
                </Role>
                <Role scores={scores} value="victim">
                  {lang === "ru" ? "Жертва" : "Victim"}
                </Role>
                <Role scores={scores} value="observer">
                  {lang === "ru" ? "Наблюдатель" : "Observer"}
                </Role>
              </ul>

              <ul className={styles["results__violence-list"]}>
                {scores.map((score) =>
                  score.role === "studentViolence" ? (
                    <ViolenceItem key={score.role}>
                      {lang === "ru"
                        ? "Насилие в классе со стороны учеников"
                        : "Violance in class from students detected"}
                    </ViolenceItem>
                  ) : score.role === "teacherViolence" ? (
                    <ViolenceItem key={score.role}>
                      {lang === "ru"
                        ? "Насилие в классе со стороны учителей"
                        : "Violance in class from teachers detected"}
                    </ViolenceItem>
                  ) : null,
                )}
              </ul>
            </div>

            <ul className={styles["results__tip-list"]}>
              {tips.map((tip) => (
                <Tip key={tip.id} lang={lang} tip={tip} />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <>
          <ol className={styles.quiz__list}>
            <Question
              lang={lang}
              question={questions[currentQuestion] as Question}
              number={currentQuestion}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
            />
          </ol>

          <button
            onClick={handleNextQuestion}
            className={styles["quiz__next-button"]}
          >
            {lang === "ru" ? "Следующий" : "Next"}
          </button>
        </>
      )}
    </section>
  );
};

const Question = ({
  lang,
  question,
  number,
  selectedAnswer,
  setSelectedAnswer,
}: {
  lang?: "ru";
  question: Question;
  number: number;
  selectedAnswer: number | undefined;
  setSelectedAnswer: Dispatch<SetStateAction<number | undefined>>;
}) => {
  return (
    <li
      className={`${styles.question ?? ""} ${styles["question--selected"] ?? ""}`}
    >
      <div className={styles["question__heading-box"]}>
        <p className={styles.question__label}>
          {lang === "ru"
            ? `Вопрос ${(number + 1).toString()} из ${questions.length.toString()}`
            : `Question ${(number + 1).toString()} of ${questions.length.toString()}`}
        </p>

        <h2
          className={`${styles.question__heading ?? ""} ${merriweather.className}`}
        >
          {lang === "ru" ? question.heading.ru : question.heading.en}
        </h2>
      </div>

      <ul className={styles["question__answers-list"]}>
        {question.answers.map((answer, index) => (
          <Answer
            key={answer.id}
            lang={lang}
            answer={answer}
            number={index}
            setSelectedAnswer={setSelectedAnswer}
            isSelected={selectedAnswer === index}
          />
        ))}
      </ul>
    </li>
  );
};

const Answer = ({
  lang,
  answer,
  number,
  setSelectedAnswer,
  isSelected,
}: {
  lang?: "ru";
  answer: { value: { en: string; ru: string } };
  number: number;
  setSelectedAnswer: Dispatch<SetStateAction<number | undefined>>;
  isSelected: boolean;
}) => {
  return (
    <li className={styles.answer}>
      <button
        onClick={() => {
          setSelectedAnswer(number);
        }}
        className={`${styles.answer__button ?? ""} ${isSelected ? (styles["answer__button--selected"] ?? "") : ""}`}
      >
        {lang === "ru" ? answer.value.ru : answer.value.en}
      </button>
    </li>
  );
};

const Role = ({
  scores,
  value,
  children: role,
}: {
  scores: {
    role: string;
    value: number;
  }[];
  value: string;
  children: string;
}) => {
  const score = scores.find((score) => score.role === value)?.value ?? 0;

  return (
    <li className={styles.role}>
      <h3 className={styles.role__heading}>{role}</h3>

      <div className={styles["role__score-blocks"]}>
        {Array.from({ length: 25 }, (_, index) => (
          <ScoreBlock key={index} isSelected={index < score} />
        ))}
      </div>

      <p className={styles.role__score}>{score}</p>
    </li>
  );
};

const ScoreBlock = ({ isSelected }: { isSelected: boolean }) => {
  return (
    <div
      className={`${styles["role__score-block"] ?? ""} ${isSelected ? (styles["role__score-block--marked"] ?? "") : ""}`}
    ></div>
  );
};

const ViolenceItem = ({ children: description }: { children: string }) => {
  return (
    <li className={styles["violence-item"]}>
      <AlertSVG className={styles["violence-item__icon"]} />

      <p className={styles["violence-item__description"]}>{description}</p>
    </li>
  );
};

const Tip = ({
  lang,
  tip,
}: {
  lang?: "ru";
  tip: {
    id: number;
    heading: { en: ReactNode; ru: ReactNode };
    description?: { en: ReactNode; ru: ReactNode };
  };
}) => {
  return (
    <li className={styles.tip}>
      <p className={styles.tip__heading}>
        {lang === "ru" ? tip.heading.ru : tip.heading.en}
      </p>

      {tip.description ? (
        <p className={styles.tip__description}>
          {lang === "ru" ? tip.description.ru : tip.description.en}
        </p>
      ) : null}
    </li>
  );
};

export default Quiz;
