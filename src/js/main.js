import "focus-visible";

import "../sass/main.sass";
import "../index.html";

import Slider from "./modules/slider";
import Accordeon from "./modules/accorderon";
import Map from "./modules/map";

("use strict");

document.addEventListener("DOMContentLoaded", () => {
  const slider = new Slider(
    ".slider__prev",
    ".slider__next",
    ".slider__img",
    ".slider__dots",
    ".slider__wrapper",
    ".slider__main"
  );
  slider.initSlider();

  new Accordeon(".directions__item").init();

  new Map(
    ".map__arrow-down",
    ".map__top ",
    ".map__top-item",
    ".map__top-items",
    ".select-block__item",
    ".map__select-block",
    ".map__dot"
  ).init();

  window.addEventListener("resize", () => {
    slider.initSlider();
  });
});
