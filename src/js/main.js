import "focus-visible";

import "../sass/main.sass";
import "../index.html";

import Slider from "./modules/slider";

("use strict");

document.addEventListener("DOMContentLoaded", () => {
  new Slider(
    ".slider__prev",
    ".slider__next",
    ".slider__img",
    ".slider__dots",
    ".slider__wrapper",
    ".slider__main"
  ).initSlider();
});
