const images = [
  "../IMG/photo_2023-05-29_16-37-59.jpg",
  "../IMG/photo_2023-05-29_16-37-59.jpg",
  "../IMG/slide_furnit_03.jpg",
  "../IMG/slide_furnit_04.jpg",
  "../IMG/slide_furnit_05.jpg",
  "../IMG/slide_furnit_06.jpg",
  "../IMG/slide_furnit_07.jpg",
  "../IMG/slide_glass_01.jpg",
  "../IMG/slide_glass_02.jpg",
];

window.addEventListener("DOMContentLoaded", function () {
  slide.src = images[currentSlideIndex];
});

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
}, 15000);
