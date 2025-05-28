const navigationBar = document.querySelector(".navbar");
const navbarToggler = document.querySelector(".navbar-toggler");
const mainPart = document.querySelector("#mainNavbar");

const scrollThreshhold = 80;

let scrollHandle = () => {
  if (window.scrollY > scrollThreshhold) {
    navigationBar.classList.add("scrolled");
  } else {
    navigationBar.classList.remove("scrolled");
  }
};

let toggleHandle = () => {
  let screenWidth = window.innerWidth;
  if (!navbarToggler.classList.contains("collapsed") && !navigationBar.classList.contains("scrolled") && screenWidth < 992) {
    mainPart.classList.add("navbar-toggled-bg");
  } else {
    mainPart.classList.remove("navbar-toggled-bg");
  }
};

window.addEventListener("scroll", scrollHandle);
navbarToggler.addEventListener("click", toggleHandle);

document.addEventListener("DOMContentLoaded", scrollHandle);
