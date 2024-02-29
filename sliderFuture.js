const futureBox = document.querySelector('.future__swiper');

let sliderFuture;

function showFutureSlider() {
    if (window.innerWidth <= 767 && futureBox.dataset.mobile === 'false') {
        sliderFuture = new Swiper(futureBox, {
            // Optional parameters
            slidesPerView: 1,
            spaceBetween: 0,
            wrapperClass: 'future__swiper-wrapper',
            slideClass: 'future__swiper-slide',

            // If we need pagination
            pagination: {
                el: '.future__swiper-pagination',
                type: 'bullets',
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.future__swiper-button-next',
                prevEl: '.future__swiper-button-prev',
            },

            loop: false,
            centeredSlides: true,
            slideToClickedSlide: false,
        });
        futureBox.dataset.mobile = 'true';
    }
    if (window.innerWidth > 767) {
        futureBox.dataset.mobile = 'false';
        if (futureBox.classList.contains('swiper-initialized')) {
            sliderFuture.destroy();
        }
    }
}

window.addEventListener('load', () => {
    showFutureSlider();
});

window.addEventListener('resize', () => {
    showFutureSlider();
});
