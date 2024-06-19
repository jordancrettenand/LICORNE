// -----------popup----------

document.addEventListener("DOMContentLoaded", (event) => {
  const popups = document.querySelectorAll(".popup");
  const beerImages = document.querySelectorAll(".beer-image");
  const closeButtons = document.querySelectorAll(".close-button");

  beerImages.forEach((image) => {
    image.addEventListener("click", () => {
      const popupId = image.getAttribute("data-popup");
      document.getElementById(popupId).style.display = "flex"; // Show the corresponding popup
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".popup").style.display = "none"; // Hide the popup
    });
  });

  window.addEventListener("click", (event) => {
    popups.forEach((popup) => {
      if (event.target === popup) {
        popup.style.display = "none"; // Hide the popup when clicking outside of it
      }
    });
  });
});

// -----------carousel----------
let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

setInterval(nextSlide, 5000);
