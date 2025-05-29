<<<<<<< HEAD
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    this.size = Math.random() * 3 + 1;
    this.alpha = Math.random() + 0.5;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (
      this.x < 0 ||
      this.x > canvas.width ||
      this.y < 0 ||
      this.y > canvas.height
    ) {
      this.reset();
    }
  }
  draw() {
    ctx.fillStyle = `rgba(0, 135, 158, ${this.alpha})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 10);
    ctx.fill();
  }
}

const particles = Array.from({ length: 100 }, () => new Particle());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

animate();



=======
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
>>>>>>> master
