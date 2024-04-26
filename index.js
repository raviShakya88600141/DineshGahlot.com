document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image-container img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");

  if (!images.length || !lightbox || !lightboxImage) {
    console.error("Required elements not found.");
    return; // Exit early if required elements are missing
  }

  images.forEach((img) => {
    img.addEventListener("click", function (event) {
      const src = this.getAttribute("src");
      const alt = this.getAttribute("alt");
      lightboxImage.src = src;
      lightboxImage.alt = alt;
      lightbox.style.display = "block";
      event.stopPropagation(); // Stop event propagation if necessary
    });
  });

  const close = document.querySelector(".close");
  if (close) {
    close.addEventListener("click", function () {
      lightbox.style.display = "none";
    });
  } else {
    console.error("Close button not found.");
  }
});
