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
  }

  countWrapperWidth() {
    this.width = parseInt(window.getComputedStyle(this.sliderMain).width);
    this.slides.forEach((slide) => {
      slide.style.maxWidth = `${this.width}px`;
    });

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

  setInitial() {
    this.sliderWrapper.style.width = `${this.countWrapperWidth()}px`;
    this.dots = [];
    this.dotsContainer.innerHTML = "";
    if (this.sliderInterval) clearInterval(this.sliderInterval);
    this.createDots();
    this.changeSlide();
  }

  initSlider() {
    this.setInitial();

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

    if (document.documentElement.clientWidth < 591) {
      this.sliderInterval = setInterval(() => {
        this.changeSlide(1);
      }, 3000);
    }
  }
}

export default Slider;
