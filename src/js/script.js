/* Slider */
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48,
        loop: true,
        responsive: {
            0 : {
                items: 2,
                margin: 32,
            },
            601 : {
                items: 3,
                margin: 32,
            },
        }
    });
});

/* Video */
const videoButton = document.querySelector('#video-button');
const videoImg = document.querySelector('.video__img');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-item');

videoWrapper.addEventListener('click', function() {
if (video.paused) {
    videoImg.classList.add('hidden');
    videoButton.classList.add('hidden');
    videoWrapper.classList.remove('video__overlay');
    video.play();
} else {
    videoButton.classList.remove('hidden');
    videoWrapper.classList.add('video__overlay');
    video.pause();
}
});

/* Mobile menu */
const openButton = document.querySelector('#menu-open');
const closeButton = document.querySelector('#menu-close');
const mobileMenu = document.querySelector('#menu-mobile');

openButton.addEventListener('click', function() {
    mobileMenu.classList.remove('hidden');
    document.body.classList.add('no-scroll');
})

closeButton.addEventListener('click', function() {
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('no-scroll');
})