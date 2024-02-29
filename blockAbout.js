const titleBox = document.querySelector('.about__title');
const titleEnd = document.querySelector('.about__title_end');
const aboutBox = document.querySelector('.about__box');

function AboutTitlePosition() {
    if (window.innerWidth <= 767) {
        aboutBox.append(titleEnd);
    }
    if (window.innerWidth > 767) {
        titleBox.append(titleEnd);
    }
}
window.addEventListener('load', () => {
    AboutTitlePosition();
});

window.addEventListener('resize', () => {
    AboutTitlePosition();
});
