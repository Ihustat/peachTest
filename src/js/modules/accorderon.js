class Accordeon {
  constructor(itemSelector) {
    this.items = document.querySelectorAll(itemSelector);
  }

  init() {
    this.items.forEach((item) => {
      item.addEventListener("click", (e) => {
        const target = e.target;

        if (target && target.classList.contains("arrow-down")) {
          item.classList.toggle("directions__item_active");
        }
      });
    });
  }
}

export default Accordeon;
