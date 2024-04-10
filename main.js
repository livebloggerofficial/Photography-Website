const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    header.classList.add("smaller");
  } else {
    header.classList.remove("smaller");
  }
});

const images = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const nextBtn = document.querySelector(".lightbox .next-btn");
const prevBtn = document.querySelector(".lightbox .prev-btn");
const closeBtn = document.querySelector(".lightbox .close-icon");
const lightboxImage = document.querySelector(".lightbox img");
const lightboxCaption = document.querySelector(".lightbox .caption");

let currentIndex = 0;

const displayLightbox = (index) => {
  lightbox.classList.add("active");
  lightboxImage.src = images[index].src;
  lightboxCaption.textContent = images[index].getAttribute("data-caption");
  currentIndex = index;
};

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    displayLightbox(index);
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  displayLightbox(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  displayLightbox(currentIndex);
});

// Mobile menu

const menuIcon = document.querySelector(".menu-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const allMenuItems = document.querySelectorAll(".mobile-menu-container a");

menuIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.toggle("active");
});

allMenuItems.forEach((a) => {
  a.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
  });
});
