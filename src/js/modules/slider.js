class Slider {
  counter = 0;
  width = 0;

  constructor(
    prevBtn,
    nxtBtn,
    slides,
    dotsContainer,
    sliderWrapper,
    sliderMain
  ) {
    this.prevBtn = document.querySelector(prevBtn);
    this.nxtBtn = document.querySelector(nxtBtn);
    this.slides = document.querySelectorAll(slides);
    this.dotsContainer = document.querySelector(dotsContainer);
    this.sliderWrapper = document.querySelector(sliderWrapper);
    this.sliderMain = document.querySelector(sliderMain);
    this.sliderWrapper.style.width = `${this.countWrapperWidth()}px`;
    this.dots = [];
  }

  countWrapperWidth() {
    this.width = parseInt(window.getComputedStyle(this.sliderMain).width);

    return this.width * this.slides.length;
  }

  createDots() {
    this.slides.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.classList.add("slider__dot");
      dot.setAttribute("data-count", i);

      this.dots.push(dot);

      this.dotsContainer.insertAdjacentElement("beforeend", dot);
    });

    this.dots[this.counter].classList.add("slider__dot_active");
  }

  checkCounter() {
    if (this.counter < 0) this.counter = this.slides.length - 1;
    if (this.counter > this.slides.length - 1) this.counter = 0;
  }

  changeSlide(n = 0) {
    this.counter += n;

    this.checkCounter();

    this.dots.forEach((dot, i) => {
      dot.classList.remove("slider__dot_active");
      if (this.counter === i) dot.classList.add("slider__dot_active");
    });

    this.sliderWrapper.style.transform = `translateX(-${
      this.width * this.counter
    }px)`;
  }

  initSlider() {
    this.createDots();
    this.nxtBtn.addEventListener("click", () => {
      this.changeSlide(1);
    });
    this.prevBtn.addEventListener("click", () => {
      this.changeSlide(-1);
    });

    this.dotsContainer.addEventListener("click", (e) => {
      const target = e.target;

      if (target && target.classList.contains("slider__dot")) {
        this.counter = +target.getAttribute("data-count");
        this.changeSlide();
      }
    });
  }
}

export default Slider;
