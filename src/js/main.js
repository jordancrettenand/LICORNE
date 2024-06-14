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
