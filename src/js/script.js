// Navigation Menu
const header = document.querySelector(".header");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");
const navigationMenu = document.querySelector(".navigation-menu");
const navigationMenuLink = document.querySelectorAll(".navigation-menu__link");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.add("hamburger-menu--unactive");
  header.classList.add("header--active");
  closeMenu.classList.add("close-menu--active");
  navigationMenu.classList.add("navigation-menu--active");
});

closeMenu.addEventListener("click", () => {
  hamburgerMenu.classList.remove("hamburger-menu--unactive");
  header.classList.remove("header--active");
  closeMenu.classList.remove("close-menu--active");
  navigationMenu.classList.remove("navigation-menu--active");
});

navigationMenuLink.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("hamburger-menu--unactive");
    header.classList.remove("header--active");
    closeMenu.classList.remove("close-menu--active");
    navigationMenu.classList.remove("navigation-menu--active");
  });
});

// Tabs
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const index = Array.from(tabs).indexOf(tab);
    const currentTab = document.querySelector(".tab--active");
    const currentTabContent = document.querySelector(".tab-content--active");

    currentTab.classList.remove("tab--active");
    tab.classList.add("tab--active");

    currentTabContent.classList.remove("tab-content--active");
    Array.from(tabContents)[index].classList.add("tab-content--active");
  });
});

// Carousel
const buttons = document.querySelectorAll(".carousel__button");
const indicators = document.querySelectorAll(".carousel__indicator");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.classList.contains("carousel__button--back") ? -1 : 1;
    const slides = button.closest(".carousel").querySelector(".carousel__list");
    const activeSlide = slides.querySelector(".quote--active");
    const activeIndicator = document.querySelector(
      ".carousel__indicator--active"
    );
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].classList.add("quote--active");
    delete activeSlide.classList.remove("quote--active");

    activeIndicator?.classList.remove("carousel__indicator--active");
    indicators[newIndex].classList.add("carousel__indicator--active");

    activeIndicator.textContent = "\u25CB";
    indicators[newIndex].textContent = "\u25CF";
  });
});
