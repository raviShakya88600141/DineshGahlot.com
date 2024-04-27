document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image-container img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");

  if (!images.length || !lightbox || !lightboxImage) {
    console.error("Required elements not found.");
    return;
  }

  images.forEach((img) => {
    img.addEventListener("click", function (event) {
      const src = this.getAttribute("src");
      const alt = this.getAttribute("alt");
      lightboxImage.src = src;
      lightboxImage.alt = alt;
      lightbox.style.display = "block";
      event.stopPropagation();
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

window.addEventListener("scroll", function () {
  var header = document.getElementById("main-header");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 20) {
    header.style.background = "black";
  } else {
    header.style.background = "transparent";
  }
});
