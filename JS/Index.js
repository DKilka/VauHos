const images = [
  "../IMG/glass_05.jpg",
  "../IMG/glass_04.jpg",
  "../IMG/glass_03.jpg",
  "../IMG/glass_02.jpg",
  "../IMG/alum_03.jpg",
  "../IMG/alum_02.jpg",
  "../IMG/alum_01.jpg",
  "../IMG/furn_02.jpg",
  "../IMG/furn_01.jpg",
];

let currentSlideIndex = 0;
let isHovered = false;

const slideContainer = document.querySelector(".slider");
const slide = document.querySelector(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

function showSlide(index) {
  slide.style.opacity = 0;
  setTimeout(function () {
    slide.src = images[index];
    slide.style.opacity = 1;
  }, 700);
}

function nextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex >= images.length) {
    currentSlideIndex = 0;
  }
  slide.style.opacity = 0;
  setTimeout(function () {
    slide.src = images[currentSlideIndex];
    slide.style.opacity = 1;
  }, 300);
}

function prevSlide() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = images.length - 1;
  }
  slide.style.opacity = 0;
  setTimeout(function () {
    slide.src = images[currentSlideIndex];
    slide.style.opacity = 1;
  }, 300);
}

function handleMouseEnter() {
  isHovered = true;
  prevButton.style.opacity = 1;
  nextButton.style.opacity = 1;
}

function handleMouseLeave() {
  isHovered = false;
  prevButton.style.opacity = 1;
  nextButton.style.opacity = 1;
}

nextButton.addEventListener("click", function () {
  if (!isHovered) {
    nextSlide();
  }
});
prevButton.addEventListener("click", function () {
  if (!isHovered) {
    prevSlide();
  }
});
slideContainer.addEventListener("mouseenter", handleMouseEnter);
slideContainer.addEventListener("mouseleave", handleMouseLeave);

setInterval(function () {
  if (!isHovered) {
    nextSlide();
  }
}, 5000);
