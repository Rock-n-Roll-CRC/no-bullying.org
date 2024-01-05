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
