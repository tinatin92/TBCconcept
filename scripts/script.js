document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");

  if (!isDropdownButton && e.target.closest("[data-dropdown]") !== null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");

    if (currentDropdown.classList.contains("active")) {
      document.querySelector("[data-dropdown-big]").classList.add("highlight");
    } else {
      document
        .querySelector("[data-dropdown-big]")
        .classList.remove("highlight");
    }
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown !== currentDropdown) {
      dropdown.classList.remove("active");
    }
  });

  const anyActiveDropdown = document.querySelector("[data-dropdown].active");
  if (!anyActiveDropdown) {
    document.querySelector("[data-dropdown-big]").classList.remove("highlight");
  }
});

//

const openButton = document.querySelector(".big-menu__trigger");
const buttonMenu = document.querySelector(".button-menu");

openButton.addEventListener("click", (e) => {
  e.target.closest(".button-menu").classList.toggle("open");
});

const footerToggles = document.querySelectorAll("[data-footer-toggle]");
const footerDropdowns = document.querySelectorAll("[data-footer-dropdown]");

footerToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    const dropdown = e.target.closest(".footer-dropdown");
    if (!dropdown) return;

    const nav = dropdown.querySelector(".footer-nav");
    const isOpen = dropdown.classList.contains("open");

    footerDropdowns.forEach((d) => {
      if (d !== dropdown) {
        d.classList.remove("open");
        d.querySelector(".footer-nav").style.height = 0;
      }
    });

    if (!isOpen) {
      dropdown.classList.add("open");
      nav.style.height = nav.scrollHeight + "px";
    } else {
      dropdown.classList.remove("open");
      nav.style.height = 0;
    }
  });
});

//

const mobileToggles = document.querySelectorAll("[data-mobile-toggle]");
const mobileDropdowns = document.querySelectorAll("[data-mobile-dropdown]");
const header = document.querySelector(".header");

mobileToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    const clickedDropdown = e.target.closest("[data-mobile-dropdown]");
    const nav = clickedDropdown.querySelector(".header-menu__mobile-nav");
    const isOpen = clickedDropdown.classList.contains("open");

    mobileDropdowns.forEach((dropdown) => {
      dropdown.classList.remove("open");
      dropdown.querySelector(".header-menu__mobile-nav").style.height = 0;
    });

    if (!isOpen) {
      clickedDropdown.classList.add("open");
      nav.style.height = nav.scrollHeight + "px";
    }
  });
});

const headerMobile = document.querySelector(".header-menu__mobile");

const burgerIcon = document.querySelector(".burger-icon");
burgerIcon.addEventListener("click", function () {
  this.classList.toggle("active");
  headerMobile.classList.toggle("open");
});

//

const swiper = new Swiper(".offer-slider", {
  slidesPerView: 3,
  speed: 600,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  spaceBetween: 30,
  slidesPerGroup: 1,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const updateScrollbarWidth = () => {
  const totalSlides = swiper.slides.length;
  const visibleSlides = swiper.params.slidesPerView;
  const dragElement = document.querySelector(".swiper-scrollbar-drag");
  if (dragElement) {
    dragElement.style.width = `${(visibleSlides / totalSlides) * 100}%`;
  }
};

///

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const scrollbar = document.getElementById("custom-scrollbar");
  const thumb = document.getElementById("custom-scroll-thumb");

  const contentHeight = content.scrollHeight;
  const viewHeight = content.clientHeight;
  const thumbHeight = (viewHeight / contentHeight) * viewHeight;
  thumb.style.height = `${thumbHeight}px`;

  let isDragging = false;
  let startY = 0;
  let startTop = 0;

  thumb.addEventListener("mousedown", (e) => {
    isDragging = true;
    startY = e.clientY;
    startTop = thumb.offsetTop;
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const deltaY = e.clientY - startY;
    const newTop = startTop + deltaY;

    if (newTop < 0) {
      thumb.style.top = "0px";
    } else if (newTop + thumb.offsetHeight > scrollbar.offsetHeight) {
      thumb.style.top = `${scrollbar.offsetHeight - thumb.offsetHeight}px`;
    } else {
      thumb.style.top = `${newTop}px`;
    }

    const scrollRatio = newTop / (scrollbar.offsetHeight - thumb.offsetHeight);
    content.scrollTop =
      scrollRatio * (content.scrollHeight - content.clientHeight);
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.userSelect = "auto";
  });

  content.addEventListener("scroll", () => {
    const scrollRatio =
      content.scrollTop / (content.scrollHeight - content.clientHeight);
    thumb.style.top = `${
      scrollRatio * (scrollbar.offsetHeight - thumb.offsetHeight)
    }px`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cookiesContainer = document.getElementById("cookiescontainer");
  const cookiesButton = document.querySelector(".accept-cookies");

  if (localStorage.getItem("cookiesAccepted") !== "true") {
    cookiesContainer.style.display = "block";
  }

  cookiesButton.addEventListener("click", (e) => {
    e.target.closest(".cookies-container").classList.add("close");

    localStorage.setItem("cookiesAccepted", "true");
  });
});
