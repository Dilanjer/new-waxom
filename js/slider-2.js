const carouselSlide = document.querySelector(".post__items");
const carouselElement = document.querySelectorAll(".post__item");



const prevBtn = document.querySelector(".post__left");
const nextBtn = document.querySelector(".post__right");

let counter = 0;
const size = carouselElement[0].clientWidth + 32;
console.log(size)
nextBtn.addEventListener("click", () => {
  counter++;
  if (counter === carouselElement.length - 1) counter = 0;
  console.log(counter)
  console.log(size)

  carouselSlide.scrollLeft = size * counter;
});

prevBtn.addEventListener("click", () => {
  counter--;
  if (counter === -1) counter = 0;
  carouselSlide.scrollLeft = (size) * counter;
});