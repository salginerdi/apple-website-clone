(function () {
  "use strict";

  AOS.init({
    startEvent: 'load',
    offset: 20, 
    once: true,
  })

  let camera = new Swiper("#camera .swiper", {
    speed: 600,
    spaceBetween: 12,
    navigation: {
      enabled: true,
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });

  let photos = GLightbox({
    selector: "#photos .photo",
  });

  let comment = new Swiper("#comment .swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },
  });

  let glightbox = GLightbox({
    selector: ".glightbox",
  });

  let header = document.getElementById("header");
  let headerScrolled = function () {
    if (window.scrollY > 100) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  };

  window.addEventListener("load", headerScrolled);
  document.addEventListener("scroll", headerScrolled);

  let links = document.getElementsByClassName("scroll-to");
  let focusSectionLink = function (event) {
    for (const link of links) {
      let id = link.hash.slice(1);
      let section = document.getElementById(id);
      let position = window.scrollY + window.innerHeight / 2;

      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        link.ariaCurrent = "page";
        link.classList.add("active");
      } else {
        link.ariaCurrent = null;
        link.classList.remove("active");
      }
    }
  };

  let focusSection = function (event) {
    event.preventDefault();
    let id = event.target.hash.slice(1);
    let section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  window.addEventListener("scroll", focusSectionLink);

  for (const link of links) {
    link.addEventListener("click", focusSection);
  }
})();
