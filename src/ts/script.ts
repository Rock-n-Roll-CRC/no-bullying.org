// Navigation Menu
const header = document.querySelector(".header");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");
const navigationMenu = document.querySelector(".navigation-menu");
const navigationMenuLink = document.querySelectorAll(".navigation-menu__link");

if (
  header !== null &&
  hamburgerMenu !== null &&
  closeMenu !== null &&
  navigationMenu !== null &&
  navigationMenuLink !== null
) {
  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.add("hamburger-menu--hidden");
    header.classList.add("header--fixed");
    closeMenu.classList.add("close-menu--visible");
    navigationMenu.classList.add("navigation-menu--visible");
  });

  closeMenu.addEventListener("click", () => {
    closeMenu.classList.remove("close-menu--visible");
    header.classList.remove("header--fixed");
    hamburgerMenu.classList.remove("hamburger-menu--hidden");
    navigationMenu.classList.remove("navigation-menu--visible");
  });

  navigationMenuLink.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu.classList.remove("close-menu--visible");
      header.classList.remove("header--fixed");
      hamburgerMenu.classList.remove("hamburger-menu--hidden");
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
