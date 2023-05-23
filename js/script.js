// ScrollReveal().reveal("");

// ScrollReveal().reveal(".animation", {
//   origin: "left",
//   delay: "500",
//   easing: "ease-in-out",
//   duration: "800",
//   interval: 16,
//   reset: true,
// });

const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2500,
  reset: false,
});

sr.reveal(".home__content, .about__img, .service__content, .contact__content", {
  origin: "left",
});

sr.reveal(".home__img, .about__content, .service__info, .contact__form", {
  origin: "right",
});

sr.reveal(
  ".home, .counter__wrapper, .portfolio__wrapper, .testimonial__wrapper, .blog__wrapper, .footer__content",
  {
    origin: "bottom",
  }
);
