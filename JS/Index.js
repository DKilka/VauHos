const desktopImages = [
  "../IMG/slider_furnit_01.jpg",
  "../IMG/slider_furnit_02.jpg",
  "../IMG/slider_furnit_03.jpg",
  "../IMG/slider_glass_01.jpg",
  "../IMG/slider_glass_02.jpg",
  "../IMG/slider_shower_01.jpg",
  "../IMG/slider_shower_02.jpg",
  "../IMG/slider_shower_03.jpg",
  "../IMG/зображення_viber_2023-05-30_13-49-17-496.jpg"
];

const mobileImages = [
  "../IMG/sTel_furnit_01.jpg",
  "../IMG/sTel_furnit_02.jpg",
  "../IMG/sTel_furnit_03.jpg",  
  "../IMG/sTel_furnit_04.jpg",
  "../IMG/sTel_furnit_05.jpg",
  "../IMG/sTel_furnit_06.jpg",  
  "../IMG/sTel_shower_01.jpg",
  "../IMG/sTel_shower_02.jpg",
  "../IMG/sTel_shower_03.jpg",
  "../IMG/sTel_shower_04.jpg",
  "../IMG/sTel_shower_05.jpg",
  "../IMG/sTel_shower_06.jpg",
  "../IMG/sTel_glass_01.webp",
  "../IMG/sTel_glass_02.webp",
  "../IMG/sTel_glass_03.webp",
  "../IMG/sTel_glass_04.jpg",
  "../IMG/sTel_glass_05.jpg",
  "../IMG/sTel_glass_06.jpg",
  "../IMG/sTel_glass_07.jpg",
];

window.addEventListener("DOMContentLoaded", function () {
  updateSlide();
});

let currentSlideIndex = 0;
let isHovered = false;
let images = [];

const slideContainer = document.querySelector(".slider");
const slide = document.querySelector(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

function updateSlide() {
  const isMobile = window.innerWidth < 1200;
  images = isMobile ? mobileImages : desktopImages;
  slide.src = images[currentSlideIndex];
}

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
  showSlide(currentSlideIndex);
}

function prevSlide() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = images.length - 1;
  }
  showSlide(currentSlideIndex);
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

window.addEventListener("resize", updateSlide);

setInterval(function () {
  if (!isHovered) {
    nextSlide();
  }
}, 15000);