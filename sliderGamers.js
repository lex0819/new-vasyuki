const sladerGamers = new Swiper('.gamers__swiper', {
    // Optional parameters
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    wrapperClass: 'gamers__swiper-wrapper',
    slideClass: 'gamers__swiper-slide',

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.gamers__swiper-pagination',
        type: 'fraction',
        clickable: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.gamers__swiper-button-next',
        prevEl: '.gamers__swiper-button-prev',
    },

    loop: true,
    centeredSlides: false,
    slideToClickedSlide: false,

    breakpoints: {
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },
        1060: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
        },
    },
});

const containerSlide = document.querySelector('.gamers__content');
const btnsSlide = document.querySelector('.gamers__swiper-control');
const headerSlide = document.querySelector('.gamers__header');

function moveSliderBtns() {
    if (window.innerWidth <= 767) {
        btnsSlide.classList.add('gamers__swiper-control__bottom');
        containerSlide.append(btnsSlide);
    }
    if (window.innerWidth > 767) {
        btnsSlide.classList.remove('gamers__swiper-control__bottom');
        headerSlide.append(btnsSlide);
    }
}

window.addEventListener('load', () => {
    moveSliderBtns();
});

window.addEventListener('resize', () => {
    moveSliderBtns();
});
