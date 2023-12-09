class Accordeon {
  constructor(itemSelector) {
    this.items = document.querySelectorAll(itemSelector);
  }

  init() {
    this.items.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("directions__item_active");
      });
    });
  }
}

export default Accordeon;
