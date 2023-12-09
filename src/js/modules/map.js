class Map {
  constructor(
    trigger,
    main,
    regions,
    regionsContainer,
    selectItems,
    selectContainer,
    dots
  ) {
    this.trigger = document.querySelector(trigger);
    this.main = document.querySelector(main);
    this.regions = document.querySelectorAll(regions);
    this.regionsContainer = document.querySelector(regionsContainer);
    this.selectItems = document.querySelectorAll(selectItems);
    this.selectContainer = document.querySelector(selectContainer);
    this.dots = document.querySelectorAll(dots);
    this.allSelectRegions = Array.from(this.selectItems).filter(
      (item) => !item.getAttribute("data-city")
    );
  }

  showCities(attr, name) {
    this.dots.forEach((dot) => {
      if (name === "all") {
        dot.style.display = "block";
      } else {
        if (dot.getAttribute(attr) !== name) {
          dot.style.display = "none";
        } else {
          dot.style.display = "block";
        }
      }
    });
  }

  showDropdown(elem) {
    elem.classList.toggle("select-block__item_dropdown");

    const siblings = [...elem.parentNode.children].filter((n) => n !== elem);

    siblings.forEach((sibling) => {
      elem.classList.contains("select-block__item_dropdown")
        ? (sibling.style.display = "block")
        : (sibling.style.display = "none");
    });
  }

  chooseSelector(e, className, isCity) {
    const target = e.target;
    const regionAttr = e.target.getAttribute("data-region");

    if (target && target.classList.contains(className)) {
      if (document.documentElement.clientWidth > 1100 || isCity)
        this.main.classList.remove("map__top_active");

      this.regions.forEach((region) => {
        region.classList.remove("map__top-item_active");
        if (region.getAttribute("data-region") === regionAttr)
          region.classList.add("map__top-item_active");
      });

      this.allSelectRegions.forEach((region) => {
        region.classList.remove("select-block__item_active");
        if (region.getAttribute("data-region") === regionAttr)
          region.classList.add("select-block__item_active");
      });

      const cities = Array.from(this.selectItems).filter((item) =>
        item.getAttribute("data-city")
      );

      cities.forEach((city) => {
        city.classList.remove("select-block__item_active");
      });

      if (isCity) {
        cities.forEach((city) => {
          if (
            city.getAttribute("data-city") ===
            e.target.getAttribute("data-city")
          )
            city.classList.add("select-block__item_active");
        });
      }

      this.showCities(
        isCity ? "data-city" : "data-region",
        isCity ? e.target.getAttribute("data-city") : regionAttr
      );
    }
  }

  init() {
    this.trigger.addEventListener("click", () => {
      this.main.classList.toggle("map__top_active");
      this.main.classList.contains("map__top_active")
        ? (document.querySelector(".map").style.overflow = "hidden")
        : (document.querySelector(".map").style.overflow = "");
    });

    this.regionsContainer.addEventListener("click", (e) => {
      this.chooseSelector(e, "map__top-item", false);
    });

    this.selectContainer.addEventListener("click", (e) => {
      const isCity = e.target.getAttribute("data-city");

      this.chooseSelector(e, "select-block__item", isCity);
    });

    this.allSelectRegions.forEach((region) => {
      region.addEventListener("click", () => {
        this.showDropdown(region);
      });
    });
  }
}

export default Map;
