// Простая карусель: автоматическое пролистывание + точки-индикаторы

const slides = document.querySelectorAll(".carousel__slide");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  currentIndex = index;
}

function nextSlide() {
  let newIndex = currentIndex + 1;
  if (newIndex >= slides.length) {
    newIndex = 0;
  }
  showSlide(newIndex);
}

// автопролистывание каждые 3 секунды
setInterval(nextSlide, 3000);

// клик по точке переключает на нужный слайд
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = Number(dot.dataset.index);
    showSlide(index);
  });
});
