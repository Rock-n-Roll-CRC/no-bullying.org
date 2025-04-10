"use client";

import type { StaticImageData } from "next/image";

import { createContext, useContext, useState } from "react";
import Image from "next/image";

import Image1 from "@/assets/images/carousel/andrew-vachss.webp";
import Image2 from "@/assets/images/carousel/heather-brewer.webp";
import Image3 from "@/assets/images/carousel/unknown.webp";
import Image4 from "@/assets/images/carousel/ralph-w-sockman.webp";
import Image5 from "@/assets/images/carousel/lady-gaga.webp";

import LeftMarkSVG from "@/assets/icons/left-mark.svg";
import RightMarkSVG from "@/assets/icons/right-mark.svg";

import styles from "./Carousel.module.scss";

interface Slide {
  id: number;
  image: StaticImageData;
  description: { en: string; ru: string };
  author: { en: string; ru: string };
}

const slides = [
  {
    id: 1,
    image: Image1,
    description: {
      en: `Life is a fight, but not everyone's a fighter. Otherwise, bullies would be an endangered species.`,
      ru: `Жизнь - это борьба, но не все являются бойцами. В противном случае хулиганы превратились бы в вымирающий вид.`,
    },
    author: { en: `Andrew Vachss`, ru: `Эндрю Вахс` },
  },
  {
    id: 2,
    image: Image2,
    description: {
      en: `Bullying is a horrible thing. It sticks with you forever. It poisons you. But only if you let it.`,
      ru: `Буллинг - ужасная вещь. Он остается с вами навсегда. Он отравляет вас. Но только если вы позволите.`,
    },
    author: { en: `Heather Brewer`, ru: `Хизер Брюэр` },
  },
  {
    id: 3,
    image: Image3,
    description: {
      en: `Strong people stand up for themselves. But the strongest people stand up for others.`,
      ru: `Сильные люди постоят за себя. Но сильнейшие постоят за других.`,
    },
    author: { en: `Unknown`, ru: `Неизвестный` },
  },
  {
    id: 4,
    image: Image4,
    description: {
      en: `The test of courage comes when we are in the minority. The test of tolerance comes when we are in the majority.`,
      ru: `Испытание мужества наступает, когда мы оказываемся в меньшинстве. Испытание на терпимость происходит, когда мы оказываемся в большинстве.`,
    },
    author: { en: `Ralph W. Sockman`, ru: `Ральф В. Сокман` },
  },
  {
    id: 5,
    image: Image5,
    description: {
      en: `Don't you ever let a soul in the world tell you that you can't be exactly who you are.`,
      ru: `Не позволяйте ни одной душе в мире говорить вам, что вы не можете быть тем, кто вы есть.`,
    },
    author: { en: `Lady Gaga`, ru: `Леди Гага` },
  },
];

const CarouselContext = createContext<{
  selectedSlide: number;
  handleShowPreviousSlide: () => void;
  handleShowNextSlide: () => void;
}>({
  selectedSlide: 0,
  handleShowPreviousSlide: () => null,
  handleShowNextSlide: () => null,
});

const Carousel = ({ lang }: { lang?: "ru" }) => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  function handleShowNextSlide() {
    if (selectedSlide === slides.length - 1) setSelectedSlide(0);
    else setSelectedSlide((slide) => slide + 1);
  }

  function handleShowPreviousSlide() {
    if (selectedSlide === 0) setSelectedSlide(slides.length - 1);
    else setSelectedSlide((slide) => slide - 1);
  }

  return (
    <CarouselContext.Provider
      value={{ selectedSlide, handleShowNextSlide, handleShowPreviousSlide }}
    >
      <section className={styles.carousel} id="carousel">
        <ol className={styles["carousel__slide-list"]}>
          {slides.map((slide, index) => (
            <Slide
              lang={lang}
              key={slide.id}
              slide={slide}
              isSelected={selectedSlide === index}
            />
          ))}
        </ol>

        <div className={styles.carousel__buttons}>
          <button
            onClick={handleShowPreviousSlide}
            className={styles.carousel__button}
          >
            &larr;
          </button>

          <button
            onClick={handleShowNextSlide}
            className={styles.carousel__button}
          >
            &rarr;
          </button>
        </div>

        <div className={styles.carousel__indicators}>
          {slides.map((_, index) => (
            <Indicator key={index} isSelected={selectedSlide === index} />
          ))}
        </div>
      </section>
    </CarouselContext.Provider>
  );
};

const Slide = ({
  lang,
  slide,
  isSelected,
}: {
  lang?: "ru";
  slide: Slide;
  isSelected: boolean;
}) => {
  const { handleShowPreviousSlide, handleShowNextSlide } =
    useContext(CarouselContext);

  return (
    <li
      className={`${styles.slide ?? ""} ${isSelected ? (styles["slide--selected"] ?? "") : ""}`}
    >
      <Image
        src={slide.image}
        alt={lang === "ru" ? slide.author.ru : slide.author.en}
        className={styles.slide__image}
      />

      <div className={styles["slide__text-content"]}>
        <p className={styles.slide__description}>
          <LeftMarkSVG className={styles["slide__left-mark"]} />
          {lang === "ru" ? slide.description.ru : slide.description.en}
          <RightMarkSVG className={styles["slide__right-mark"]} />
        </p>

        <p className={styles.slide__author}>
          {lang === "ru" ? slide.author.ru : slide.author.en}
        </p>
      </div>

      <button
        onClick={handleShowPreviousSlide}
        className={styles["slide__button-back"]}
      >
        &larr;
      </button>

      <button
        onClick={handleShowNextSlide}
        className={styles["slide__button-next"]}
      >
        &rarr;
      </button>
    </li>
  );
};

const Indicator = ({ isSelected }: { isSelected: boolean }) => {
  return (
    <span className={styles.indicator}>
      {isSelected ? <>&#9679;</> : <>&#9675;</>}
    </span>
  );
};

export default Carousel;
