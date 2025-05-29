const navigationBar = document.querySelector(".navbar");
const navbarToggler = document.querySelector(".navbar-toggler");
const mainPart = document.querySelector("#mainNavbar");

const scrollThreshhold = 50;

const landingCarousel = document.getElementById("landing-carousel");

// Helper Functions
let scrollHandle = () => {
  if (window.scrollY > scrollThreshhold) {
    navigationBar.classList.add("scrolled");
  } else {
    navigationBar.classList.remove("scrolled");
  }
};

let toggleHandle = () => {
  let screenWidth = window.innerWidth;
  if (
    !navbarToggler.classList.contains("collapsed") &&
    !navigationBar.classList.contains("scrolled") &&
    screenWidth < 992
  ) {
    mainPart.classList.add("navbar-toggled-bg");
  } else {
    mainPart.classList.remove("navbar-toggled-bg");
  }
};

let carouselCaptionHandle = () => {
  const carouselCaptions = document.querySelectorAll(".carousel-caption");

  carouselCaptions.forEach((caption) => {
    caption.classList.add("d-none");
  });

  const activeCarouselItem = landingCarousel
    ? landingCarousel.querySelector(".carousel-item.active")
    : null;

  if (activeCarouselItem) {
    const activeCaption = activeCarouselItem.querySelector(".carousel-caption");

    if (activeCaption) {
      activeCaption.classList.remove("d-none");
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  scrollHandle();
  window.addEventListener("scroll", scrollHandle);
  navbarToggler.addEventListener("click", toggleHandle);

  carouselCaptionHandle();
  if (landingCarousel) {
    landingCarousel.addEventListener("slid.bs.carousel", function (event) {
      carouselCaptionHandle();
    });
  }
});
