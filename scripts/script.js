document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');

    if (!isDropdownButton && e.target.closest('[data-dropdown]') !== null) return;

    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');

        if (currentDropdown.classList.contains('active')) {
           
            document.querySelector('[data-dropdown-big]').classList.add('highlight');
        } else {
           
            document.querySelector('[data-dropdown-big]').classList.remove('highlight');
        }
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown !== currentDropdown) {
            dropdown.classList.remove('active');
        }
    });

    
    const anyActiveDropdown = document.querySelector('[data-dropdown].active');
    if (!anyActiveDropdown) {
        document.querySelector('[data-dropdown-big]').classList.remove('highlight');
    }
});

const swiper = new Swiper('.offer-slider', {
    slidesPerView: 3,
    speed: 600,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    spaceBetween: 30,
    slidesPerGroup: 1,
});

const updateScrollbarWidth = () => {
    const totalSlides = swiper.slides.length;
    const visibleSlides = swiper.params.slidesPerView;
    const dragElement = document.querySelector('.swiper-scrollbar-drag');
    if (dragElement) {
        dragElement.style.width = `${(visibleSlides / totalSlides) * 100}%`;
    }
};