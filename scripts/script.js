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

/* const footerToggle = document.querySelectorAll("[data-footer-toggle]");
const footerDropdown = document.querySelectorAll("[data-footer-dropdown]");

footerToggle.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    const clickedDropdown = e.target.closest("[data-footer-dropdown]");
    const nav = clickedDropdown.querySelector(".footer-nav");
    const isOpen = clickedDropdown.classList.contains("open");

     
    mobileDropdowns.forEach(dropdown => {
        dropdown.classList.remove('open');
        dropdown.querySelector('.header-menu__mobile-nav').style.height = 0;
    });

    
    if (!isOpen) {
        clickedDropdown.classList.add('open');
        nav.style.height = nav.scrollHeight + 'px';
    }
  });
}); */

//

const openButton = document.querySelector('.big-menu__trigger');
const buttonMenu = document.querySelector('.button-menu');

openButton.addEventListener('click', (e) => {
    e.target.closest('.button-menu').classList.toggle('open');
});




const footerToggles = document.querySelectorAll("[data-footer-toggle]");
const footerDropdowns = document.querySelectorAll("[data-footer-dropdown]");

footerToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
  
    const dropdown = e.target.closest(".footer-dropdown");
    if (!dropdown) return;

   
    const nav = dropdown.querySelector(".footer-nav");
    const isOpen = dropdown.classList.contains("open");

  
    footerDropdowns.forEach(d => {
        if (d !== dropdown) {
            d.classList.remove('open');
            d.querySelector('.footer-nav').style.height = 0;
        }
    });

    
    if (!isOpen) {
        dropdown.classList.add('open');
        nav.style.height = nav.scrollHeight + 'px';
    } else {
        dropdown.classList.remove('open');
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
});

const updateScrollbarWidth = () => {
  const totalSlides = swiper.slides.length;
  const visibleSlides = swiper.params.slidesPerView;
  const dragElement = document.querySelector(".swiper-scrollbar-drag");
  if (dragElement) {
    dragElement.style.width = `${(visibleSlides / totalSlides) * 100}%`;
  }
};
