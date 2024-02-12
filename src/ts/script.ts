// Navigation Menu
const header = document.querySelector(".header");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigationMenu = document.querySelector(".navigation-menu");
const navigationMenuLink = document.querySelectorAll(".navigation-menu__link");

if (
  header !== null &&
  hamburgerMenu !== null &&
  navigationMenu !== null &&
  navigationMenuLink !== null
) {
  hamburgerMenu.addEventListener("click", () => {
    const currentState = hamburgerMenu.getAttribute("data-state");

    if (currentState == null || currentState === "closed") {
      hamburgerMenu.setAttribute("data-state", "opened");
      hamburgerMenu.setAttribute("aria-expanded", "true");
      header.classList.add("header--fixed");
      navigationMenu.classList.add("navigation-menu--visible");
    } else {
      hamburgerMenu.setAttribute("data-state", "closed");
      hamburgerMenu.setAttribute("aria-expanded", "false");
      header.classList.remove("header--fixed");
      navigationMenu.classList.remove("navigation-menu--visible");
    }
  });

  navigationMenuLink.forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerMenu.setAttribute("data-state", "closed");
      hamburgerMenu.setAttribute("aria-expanded", "false");
      header.classList.remove("header--fixed");
      navigationMenu.classList.remove("navigation-menu--visible");
    });
  });
}

// Tabs
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

if (tabs !== null && tabContents !== null) {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const index = Array.from(tabs).indexOf(tab);
      const currentTab = document.querySelector(".tab--selected");
      const currentTabContent = document.querySelector(
        ".tab-content--selected"
      );

      currentTab?.classList.remove("tab--selected");
      tab.classList.add("tab--selected");

      currentTabContent?.classList.remove("tab-content--selected");
      Array.from(tabContents)[index].classList.add("tab-content--selected");
    });
  });
}

// Carousel
const buttons = document.querySelectorAll(".carousel__button");
const quoteButtons = document.querySelectorAll(".quote__button");
const indicators = document.querySelectorAll(".carousel__indicator");

if (buttons !== null && indicators !== null) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const offset = button.classList.contains("carousel__button-back")
        ? -1
        : 1;
      const quotes = button
        .closest(".carousel")
        ?.querySelector(".carousel__list");

      if (quotes !== null && quotes !== undefined) {
        const selectedQuote = quotes.querySelector(".quote--selected");
        const selectedIndicator = document.querySelector(
          ".carousel__indicator--selected"
        );

        if (selectedQuote !== null) {
          let newIndex = [...quotes.children].indexOf(selectedQuote) + offset;

          if (newIndex < 0) newIndex = quotes.children.length - 1;
          if (newIndex >= quotes.children.length) newIndex = 0;

          quotes.children[newIndex].classList.add("quote--selected");
          selectedQuote.classList.remove("quote--selected");

          if (selectedIndicator !== null) {
            selectedIndicator.classList.remove("carousel__indicator--selected");
            indicators[newIndex].classList.add("carousel__indicator--selected");

            selectedIndicator.textContent = "\u25CB";
            indicators[newIndex].textContent = "\u25CF";
          }
        }
      }
    });
  });

  quoteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const offset = button.classList.contains("quote__button-back") ? -1 : 1;
      const quotes = button
        .closest(".carousel")
        ?.querySelector(".carousel__list");

      if (quotes !== null && quotes !== undefined) {
        const selectedQuote = quotes.querySelector(".quote--selected");
        const selectedIndicator = document.querySelector(
          ".carousel__indicator--selected"
        );

        if (selectedQuote !== null) {
          let newIndex = [...quotes.children].indexOf(selectedQuote) + offset;

          if (newIndex < 0) newIndex = quotes.children.length - 1;
          if (newIndex >= quotes.children.length) newIndex = 0;

          quotes.children[newIndex].classList.add("quote--selected");
          selectedQuote.classList.remove("quote--selected");

          if (selectedIndicator !== null) {
            selectedIndicator.classList.remove("carousel__indicator--selected");
            indicators[newIndex].classList.add("carousel__indicator--selected");

            selectedIndicator.textContent = "\u25CB";
            indicators[newIndex].textContent = "\u25CF";
          }
        }
      }
    });
  });
}

// Quiz
const answers = document.querySelectorAll(".answer__button");
const nextButton = document.querySelector(".quiz__next-button");
const answersArray: Array<number | null> = [];
const initiatorAnswers = [
  999, 1, 4, 4, 3, 3, 1, 2, 4, 2, 2, 1, 1, 999, 2, 4, 2, 999, 2, 2, 999, 1, 4,
  1, 3, 3,
];
const helperAnswers = [
  999, 2, 1, 4, 4, 2, 2, 3, 3, 3, 4, 3, 4, 999, 2, 1, 3, 999, 3, 1, 999, 2, 1,
  3, 1, 4,
];
const defenderAnswers = [
  999, 1, 2, 2, 3, 1, 4, 2, 2, 1, 2, 1, 3, 999, 3, 2, 1, 999, 4, 2, 999, 1, 3,
  2, 2, 2,
];
const victimAnswers = [
  999, 2, 3, 1, 2, 1, 4, 1, 4, 3, 3, 2, 3, 999, 4, 3, 4, 999, 1, 4, 999, 4, 3,
  4, 4, 3,
];
const observerAnswers = [
  999, 4, 2, 3, 3, 4, 4, 3, 1, 4, 1, 2, 2, 999, 1, 4, 3, 999, 2, 3, 999, 3, 4,
  1, 2, 1,
];

let initiatorScore = 0;
let helperScore = 0;
let defenderScore = 0;
let victimScore = 0;
let observerScore = 0;
let classmateViolance = 0;
let teacherViolance = 0;

answers.forEach((answer) => {
  answer.addEventListener("click", () => {
    const selectedAnswer = document.querySelector(".answer__button--selected");

    selectedAnswer?.classList.remove("answer__button--selected");
    answer.classList.add("answer__button--selected");
  });
});

nextButton?.addEventListener("click", () => {
  const selectedQuestion = document.querySelector(".question--selected");
  const selectedAnswer = document.querySelector(".answer__button--selected");
  const nextQuestion = document.querySelector(
    ".question--selected + .question"
  );

  const lis = [
    ...document.querySelectorAll(
      ".question--selected > .question__answers-list .answer"
    ),
  ];

  lis.forEach((li) => {
    const selectedAnswerIndex = lis.indexOf(li) + 1;

    if (li.matches(".answer:has(> .answer__button--selected)")) {
      answersArray.push(selectedAnswerIndex);

      if (selectedAnswerIndex === initiatorAnswers[answersArray.length - 1]) {
        initiatorScore++;
      }

      if (selectedAnswerIndex === helperAnswers[answersArray.length - 1]) {
        helperScore++;
      }

      if (selectedAnswerIndex === defenderAnswers[answersArray.length - 1]) {
        defenderScore++;
      }

      if (selectedAnswerIndex === victimAnswers[answersArray.length - 1]) {
        victimScore++;
      }

      if (selectedAnswerIndex === observerAnswers[answersArray.length - 1]) {
        observerScore++;
      }

      if (answersArray.length - 1 === 13) {
        if (
          selectedAnswerIndex === 1 ||
          selectedAnswerIndex === 3 ||
          selectedAnswerIndex === 4
        ) {
          classmateViolance++;
        }
      }

      if (answersArray.length - 1 === 17) {
        if (selectedAnswerIndex === 1 || selectedAnswerIndex === 4) {
          classmateViolance++;
        }
      }

      if (answersArray.length - 1 === 20) {
        if (selectedAnswerIndex === 1 || selectedAnswerIndex === 4) {
          teacherViolance++;
        }
      }

      selectedQuestion?.classList.remove("question--selected");
      nextQuestion?.classList.add("question--selected");
    }
  });

  selectedAnswer?.classList.remove("answer__button--selected");
});
