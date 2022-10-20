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
const videoButton = document.querySelector('#video-btn');
const videoImg = document.querySelector('.about__img');
const videoWrapper = document.querySelector('.about__video');
const video = document.querySelector('#video-file');

videoWrapper.addEventListener('click', function() {
if (video.paused) {
    videoImg.classList.add('hidden');
    videoButton.classList.add('none');
    videoWrapper.classList.remove('about__video-overlay');
    video.play();
} else {
    videoButton.classList.remove('none');
    videoWrapper.classList.add('about__video-overlay');
    video.pause();
}
});

/* Mobile Nav */
const openNavbtn = document.querySelector('#openMobileNav');
const closeNavbtn = document.querySelector('#closeMobileNav');
const mobileNav = document.querySelector('#mobileNav');

openNavbtn.onclick = function() {
    mobileNav.classList.remove('none');
    document.body.classList.add('no-scroll');
}

closeNavbtn.onclick = function() {
    mobileNav.classList.add('none');
    document.body.classList.remove('no-scroll');
}
