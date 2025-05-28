navigationBar = document.querySelector(".navbar");
const scrollThreshhold = 80;

let scrollHandle = () => {
  if (window.scrollY > scrollThreshhold) {
    navigationBar.classList.add("scrolled");
  } else {
    navigationBar.classList.remove("scrolled");
  }
};

window.addEventListener("scroll", scrollHandle);

document.addEventListener('DOMContentLoaded', handleScroll);
