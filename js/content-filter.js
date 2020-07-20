class ContentFilter {
  constructor({
    categoriesBtnAttName = "data-filter",
    categoryIteAttName = "data-category",
    itemList = "project__items"
  }) {
    this.list = document.querySelector(`.${itemList}`);
    this.categories = document.querySelectorAll(`[${categoriesBtnAttName}]`);
    this.category = document.querySelectorAll(`[${categoryIteAttName}]`);
    this.cutBtnAttName = categoriesBtnAttName.slice(5);
    this.cutIteAttName = categoryIteAttName.slice(5);
    this.all = "all";
  }

  filterInit() {
    if (this.categories == null && this.category == null) {
      console.log("Error: categoriesBtnAttName and categoryIteAttName is empty")
      console.log("Error: Please check your categoriesBtnAttName and categoryIteAttName")
    } else {
      this.categories.forEach(item => {
        item.addEventListener("click", () => {
          this.removeActive();
          item.classList.add("active");
          this.filtering(item.dataset[`${this.cutBtnAttName}`]);
        });
      })
    }
  }
  removeActive() {
    this.categories.forEach(item => item.classList.remove("active"));
  }

  filtering(btnAtt) {
    this.category.forEach(item => {
      item.classList.remove("hide");
      if (btnAtt != item.dataset[`${this.cutIteAttName}`] && btnAtt != this.all) {
        item.classList.add("hide");
      }
    })
  }
}