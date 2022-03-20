const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

//////////////////////////////////
/// Smooth scrolling animation ///

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const secEl = document.querySelector(href);
      secEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

const sr = ScrollReveal({
  distance: "100px",
  duration: 1000,
  // reset: true,
});

sr.reveal(`.hero-text-box, .hunt-img-box, .buy-text-box, .rarity-img-box`, {
  origin: "left",
  interval: 300,
  opacity: 0,
  easing: "ease",
});

sr.reveal(`.hero-img-box, .hunt-text-box , .buy-img-box, .rarity-text-box`, {
  origin: "right",
  interval: 300,
  opacity: 0,
  easing: "ease",
});

sr.reveal(`.btn-move, .auction-wrap ,.heading-secondary`, {
  origin: "bottom",
  interval: 300,
  opacity: 0,
  easing: "ease",
});

sr.reveal(`.main-nav-link, .buy-item, .roadmap-item ,.copyright`, {
  origin: "bottom",
  interval: 300,
  opacity: 0,
  easing: "ease",
});
